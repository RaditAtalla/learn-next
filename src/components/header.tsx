"use client";

import { Darumadrop_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const darumadropOne = Darumadrop_One({
  weight: ["400"],
});

export default function Header() {
  const path = usePathname();

  return (
    <header
      className={`flex justify-between items-center ${darumadropOne.className} p-5 fixed w-full bg-white`}
    >
      <p className="text-5xl">TEEM</p>
      <div className="font-[roboto] flex items-center gap-8">
        <Link
          href={"/"}
          className={`${path == "/" && "border-b-2 border-zinc-300"}`}
        >
          Home
        </Link>
        <Link
          href={"/create"}
          className={`${path == "/create" && "border-b-2 border-zinc-300"}`}
        >
          Create
        </Link>
        <Link href={"/account"}>
          <Image
            src={"/me.png"}
            alt="Profile"
            width={40}
            height={40}
            className={`object-cover rounded-full aspect-square border-2 ${
              path == "/account" && "border-zinc-300"
            }`}
          />
        </Link>
      </div>
    </header>
  );
}
