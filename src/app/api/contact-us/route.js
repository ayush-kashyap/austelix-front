import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        success: true,
        users: [
            { id: 1, name: "Ayush" },
            { id: 2, name: "Jayesh" }
        ]
    });
}

export async function POST(request) {
    const body = await request.json();

    return NextResponse.json({
        success: true,
        data: body
    });
}