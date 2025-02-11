import Link from "next/link";
import Button from "./button";

type CardProps = {
  name: string;
  description: string;
  createdBy: string;
  createdAt: string;
};

export default function Card({
  name,
  description,
  createdBy,
  createdAt,
}: CardProps) {
  return (
    <div className="border-2 border-zinc-300 rounded-md p-7">
      <div className="inline-flex flex-col gap-1 mb-4">
        <Link href={"/blogId"}>
          <h2 className="text-3xl font-bold border-b-2 border-white hover:border-zinc-300 transition-colors">
            {name}
          </h2>
        </Link>
        <div className="flex gap-2">
          <Link
            href={"/authorId"}
            className="text-zinc-500 font-light hover:font-bold transition-colors"
          >
            {createdBy}
          </Link>
          <p className="text-zinc-500 font-light">|</p>
          <p className="text-zinc-500 font-light">{createdAt}</p>
        </div>
      </div>
      <p className="mb-12 line-clamp-3">{description}</p>
      <Link href={"/blogId"}>
        <Button label="View" />
      </Link>
    </div>
  );
}
