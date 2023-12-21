import { ProductsFetch } from "@/lib/prod";
import Image from "next/image";

const mychange = async ({ pdyn }: { pdyn: string }) => {
  const letChange = await ProductsFetch();
  const arr = letChange.find((e: any) => {
    let a = String(e.id);
    return a === pdyn;
  });
  return arr;
};

const Ppage = async ({ params }: { params: { pdyn: string } }) => {
  const updata = await mychange(params);
  return (
    <main className="bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-screen text-white font-2xl flex justify-center gap-4 items-center">
      <Image
        src={updata?.image}
        width={100}
        height={100}
        alt={updata?.title}
        className="w-1/4 h-1/2 mx-5 rounded-md"
      />
      <div className="flex flex-col font-3xl font-serif">
        <h1>Category: {updata?.category}</h1>
        <div>Title: {updata?.title}</div>
        <h1>Description: {updata?.description}</h1>
        <h1 className="text-red-500">Price: ${updata?.price}</h1>
        <h1 className="text-gray-800">Sold: {updata?.rating.count}</h1>
        <h1 className="text-yellow-400">Rating: {updata?.rating.rate}/5</h1>
      </div>
    </main>
  );
};
export default Ppage;
