import { UserButton } from "@clerk/nextjs";

const Home = async () => {
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Home;
