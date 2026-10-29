import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { adminDb } from "@/lib/firebase-admin";

export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const snapshot = await adminDb
      .collection("admin")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const admin =
      snapshot.docs[0].data();

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response =
      NextResponse.json({
        success: true,
      });


      
    response.cookies.set(
      "admin_token",
      token,
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}