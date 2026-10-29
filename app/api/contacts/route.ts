import { NextResponse } from "next/server";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function GET() {
  try {
    const q = query(
      collection(db, "contacts"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const contacts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}