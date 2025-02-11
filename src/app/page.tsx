import Card from "@/components/card";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const teams = await prisma.team.findMany({
    include: {
      createdBy: true,
    },
  });

  return (
    <main className="px-10 pt-32 pb-10 flex flex-col gap-8">
      <h1 className="text-center">Looking for Team</h1>
      <div className="grid grid-cols-3 gap-5">
        {teams.map((team) => {
          return (
            <Card
              name={team.name}
              description={team.description}
              createdBy={team.createdBy.username}
              createdAt={team.createdAt.toLocaleDateString()}
              key={team.id}
            />
          );
        })}
      </div>
    </main>
  );
}
