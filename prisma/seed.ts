import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "First ticket",
    content: "This is the first ticket from the database.",
    status: "OPEN" as const,
  },
  {
    title: "Second ticket",
    content: "This is the second ticket from the database.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Third ticket",
    content: "This is the third ticket from the database.",
    status: "DONE" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished in ${t1 - t0}ms`);
};

seed();
