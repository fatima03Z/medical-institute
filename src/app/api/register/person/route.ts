import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // ✅ TODO: Add validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ TODO: Save to database (MongoDB, Prisma, etc.)
    // Example placeholder:
    console.log("Register Person:", body);

    return NextResponse.json({ message: "Person registered successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
