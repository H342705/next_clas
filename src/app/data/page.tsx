import { Fetching } from "@/lib/more";
import Link from "next/link";

const Data = async () => {
  const dataImport = await Fetching();
  return (
    <main className="bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-full gap-2 text-white grid grid-cols-5">
      <div className="text-center text-3xl font-sans font-bold text-yellow-600 underline cursor-pointer underline-offset-4 hover:underline-offset-1 col-span-5">
        Our Main WareHouses
      </div>
      {dataImport.map((post: any) => (
        <Link
          href={`/data/${post.altSpellings[0]}`}
          className="border-b hover:bg-clip-text hover:bg-gradient-to-r hover:text-transparent hover:from-gray-900 to-gray-300"
          key={post.name.common}
        >
          {post.capital}
        </Link>
      ))}
    </main>
  );
};
export default Data;
