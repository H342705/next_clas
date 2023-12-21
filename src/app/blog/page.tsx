import Linkcomponent from "@/components/link-comp";
import { FetchedData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

// before start first leave image then add
// it sows to add i config.naxt.js
const Blog = async () => {
  const importdata = await FetchedData();
  // console.log(importdata);
  return (
    <main className="bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-full gap-2 space-x-4 grid grid-cols-3">
      <div className="text-center text-3xl font-sans font-bold text-yellow-600 underline cursor-pointer underline-offset-4 hover:underline-offset-1 col-span-3">
        Our Top Suppliers
      </div>
      {importdata.map((post: any) => (
        <div
          className="flex gap-3 items-center justify-between border-b-2"
          key={post.id}
        >
          <p className="">{post.id}.</p>
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="text-white font-sans"
          >
            {post.name}
          </Link>
          <Image
            src={post.avatar}
            width={50}
            height={50}
            alt={post.title}
            className="border rounded-full"
          />
        </div>
      ))}
    </main>
  );
};
export default Blog;
