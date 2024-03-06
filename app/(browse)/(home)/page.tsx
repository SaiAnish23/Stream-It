import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4 text-white ">
      <p>One of the most popular streaming services in the world</p>
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
      <div className="btn"> ha bhai</div>
    </div>
  );
}
