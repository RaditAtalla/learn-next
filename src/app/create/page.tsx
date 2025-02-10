import Button from "@/components/button";

export default function CreatePage() {
  return (
    <main className="px-10 pt-32 pb-10 flex flex-col gap-8">
      <h1 className="text-center">Create Team</h1>
      <form
        action=""
        className="border-2 border-zinc-300 rounded-md flex flex-col items-center gap-5 mx-96 py-10 px-5"
      >
        <input type="text" placeholder="Title" name="title" />
        <textarea
          name="content"
          id="content"
          placeholder="Content"
          className="mb-4"
        />
        <Button label="Submit" className="w-full" />
      </form>
    </main>
  );
}
