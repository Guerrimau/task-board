import { db } from "@/database";

export async function GET() {
    await db.connect()
    await db.disconnect()

    return Response.json({ hello: "world" });
}