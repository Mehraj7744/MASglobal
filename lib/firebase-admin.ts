import {
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let adminApp: App | undefined;
let adminDbInstance: any;

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (projectId && clientEmail && privateKey) {
  try {
    adminApp =
      getApps().length === 0
        ? initializeApp({
            credential: cert({
              projectId,
              clientEmail,
              privateKey,
            }),
          })
        : getApps()[0];
    adminDbInstance = getFirestore(adminApp);
  } catch (error) {
    console.warn("Failed initializing Firebase Admin with provided credentials, falling back to in-memory store:", error);
  }
}

// Resilient in-memory fallback store for development & mock mode
if (!adminDbInstance) {
  const collectionsStore = new Map<string, Map<string, any>>();

  const getCollectionMap = (name: string) => {
    if (!collectionsStore.has(name)) {
      collectionsStore.set(name, new Map());
    }
    return collectionsStore.get(name)!;
  };

  adminDbInstance = {
    collection: (collName: string) => {
      const coll = getCollectionMap(collName);

      const queryObj: any = {
        where: (field: string, op: string, value: any) => {
          return {
            ...queryObj,
            get: async () => {
              const allDocs = Array.from(coll.entries()).map(([id, data]) => ({
                id,
                data: () => data,
                exists: true,
              }));
              const filtered = allDocs.filter((d) => {
                const data = d.data();
                if (op === "==") return data[field] === value;
                return true;
              });
              return {
                empty: filtered.length === 0,
                docs: filtered,
                size: filtered.length,
              };
            },
            limit: (n: number) => ({
              get: async () => {
                const allDocs = Array.from(coll.entries()).map(([id, data]) => ({
                  id,
                  data: () => data,
                  exists: true,
                }));
                const filtered = allDocs.filter((d) => {
                  const data = d.data();
                  if (op === "==") return data[field] === value;
                  return true;
                }).slice(0, n);
                return {
                  empty: filtered.length === 0,
                  docs: filtered,
                  size: filtered.length,
                };
              },
            }),
          };
        },
        limit: (n: number) => ({
          get: async () => {
            const docs = Array.from(coll.entries())
              .slice(0, n)
              .map(([id, data]) => ({
                id,
                data: () => data,
                exists: true,
              }));
            return {
              empty: docs.length === 0,
              docs,
              size: docs.length,
            };
          },
        }),
        orderBy: (field: string, direction = "asc") => ({
          get: async () => {
            const docs = Array.from(coll.entries())
              .map(([id, data]) => ({
                id,
                data: () => data,
                exists: true,
              }))
              .sort((a, b) => {
                const valA = a.data()[field];
                const valB = b.data()[field];
                if (direction === "desc") {
                  return valA < valB ? 1 : -1;
                }
                return valA > valB ? 1 : -1;
              });
            return {
              empty: docs.length === 0,
              docs,
              size: docs.length,
            };
          },
        }),
        add: async (data: any) => {
          const id = "mock_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
          const docData = { ...data, id };
          coll.set(id, docData);
          return {
            id,
            get: async () => ({ id, exists: true, data: () => docData }),
          };
        },
        get: async () => {
          const docs = Array.from(coll.entries()).map(([id, data]) => ({
            id,
            data: () => data,
            exists: true,
          }));
          return {
            empty: docs.length === 0,
            docs,
            size: docs.length,
          };
        },
      };

      return queryObj;
    },
  };
}

export const adminDb = adminDbInstance as Firestore;
