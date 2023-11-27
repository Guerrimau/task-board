import { db } from "@/database";
import { Entry } from "@/models";

const seedData = [
  {
    description: "lorem pending",
    createdA: Date.now(),
    status: "Pending",
  },
  {
    description: "lorem ipsum pe",
    createdA: Date.now() - 1000000,
    status: "In-Progress",
  },
  {
    description: "lorem finished",
    createdA: Date.now() - 100000,
    status: "Finished",
  },
];

export async function GET() {
  await db.connect();
  await Entry.deleteMany();
  await Entry.insertMany(seedData);
  await db.disconnect();

  return Response.json({ msg: "Created seed values" });
}
