import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// CREATE VISITOR
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");

    const ip =
      forwardedFor?.split(",")[0].trim() ||
      realIp ||
      "Unknown";

    let country = null;
    let city = null;
    let region = null;

    try {
      if (ip !== "Unknown" && ip !== "::1") {
        const geoRes = await fetch(
          `https://ipwho.is/${ip}`
        );

        const geoData = await geoRes.json();

        if (geoData.success) {
          country = geoData.country;
          city = geoData.city;
          region = geoData.region;
        }
      }
    } catch (error) {
      console.error(
        "Geo lookup failed:",
        error
      );
    }

    console.log(
      "VISITOR PAYLOAD:",
      JSON.stringify(body, null, 2)
    );

    const visitorData = {
      page: body.page || "/",
      fullUrl: body.fullUrl || "",

      userAgent:
        body.userAgent || "Unknown",

      language:
        body.language || "Unknown",

      platform:
        body.platform || "Unknown",

      screenWidth:
        body.screenWidth ?? null,

      screenHeight:
        body.screenHeight ?? null,

      viewportWidth:
        body.viewportWidth ?? null,

      viewportHeight:
        body.viewportHeight ?? null,

      timezone:
        body.timezone || null,

      referrer:
        body.referrer || "Direct",

      cookiesEnabled:
        body.cookiesEnabled ?? null,

      online:
        body.online ?? null,

      hardwareConcurrency:
        body.hardwareConcurrency ?? null,

      deviceMemory:
        body.deviceMemory ?? null,

      timestamp:
        body.timestamp || null,

      ip,

      country:
        body.country || null,

      city:
        body.city || null,

      region:
        body.region || null,

      visitedAt:
        FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb
      .collection("visitors")
      .add(visitorData);

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.error(
      "VISITOR API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to track visitor",
      },
      {
        status: 500,
      }
    );
  }
}

// FETCH VISITORS
export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("visitors")
      .orderBy("visitedAt", "desc")
      .get();

    const visitors = snapshot.docs.map(
      (doc) => {
        const data = doc.data();

        return {
          id: doc.id,

          ...data,

          visitedAt:
            data.visitedAt?.toDate?.()?.toISOString() ||
            null,
        };
      }
    );

    return NextResponse.json({
      success: true,
      data: visitors,
    });
  } catch (error) {
    console.error(
      "FETCH VISITOR ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        data: [],
      },
      {
        status: 500,
      }
    );
  }
}