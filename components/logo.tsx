import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <h1 className="text-2xl font-bold">myapp</h1>
    </Link>
  );
}