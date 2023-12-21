import { FetchedData } from "@/lib/data";
import Image from "next/image";
const check = async ({ bdyn }: { bdyn: string }) => {
  const myArray = await FetchedData();
  const dataImpres = myArray.find((e: any) => e.slug == bdyn);
  return dataImpres;
};

const SinglePost = async ({ params }: { params: { bdyn: string } }) => {
  const exdata = await check(params);
  return (
    <main className="flex justify-center items-center bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-screen gap-x-4 text-xl text-white font-sans">
      <Image
        src={exdata?.avatar}
        width={250}
        height={300}
        alt={exdata?.title}
        className="rounded-xl"
      />
      <div className="flex flex-col">
        <p>Name: {exdata?.name}</p>
        <p>Address: {exdata?.title}</p>
        <p>Joined: {exdata?.createdAt}</p>
      </div>
    </main>
  );
};
export default SinglePost;
