import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Home;
