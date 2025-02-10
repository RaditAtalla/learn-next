import Card from "@/components/card";

export default function HomePage() {
  return (
    <main className="px-10 pt-32 pb-10 flex flex-col gap-8">
      <h1 className="text-center">Looking for Team</h1>
      <div className="grid grid-cols-3 gap-5">
        {"123456789".split("").map(() => {
          return <Card />;
        })}
      </div>
    </main>
  );
}
