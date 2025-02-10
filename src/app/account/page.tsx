import Button from "@/components/button";
import Image from "next/image";

export default function AccountPage() {
  return (
    <main className="px-10 pt-32 pb-10 flex flex-col gap-8">
      <div className="flex justify-center gap-24">
        <div className="flex flex-col">
          <div className="border-2 border-zinc-300 p-2 max-w-fit rounded-full mb-8">
            <Image
              src={"/me.png"}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square"
            />
          </div>
          <Button label="Switch Account" className="mb-4" />
          <Button label="Log Out" />
        </div>
        <form action="" className="pt-4 flex flex-col gap-10">
          <h1>My Account</h1>

          <input
            type="text"
            placeholder="Username"
            value="Garvel"
            className="text-5xl"
            disabled
          />
          <textarea
            placeholder="Bio"
            value="Hello! I mainly write blogs about software development and programming in general. I am a javascript-centric developer, so i use techs like react, express, next and more!"
            disabled
          />
          <Button label="Edit" />
        </form>
      </div>
    </main>
  );
}
