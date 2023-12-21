import { ProductsFetch } from "@/lib/prod";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const productDetail = await ProductsFetch();
  return (
    <main className="bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-full grid grid-cols-5 gap-2">
      <div className="text-center text-3xl font-sans font-bold text-yellow-600 underline cursor-pointer underline-offset-4 hover:underline-offset-1 col-span-5">
        Prdoucts List
      </div>
      {productDetail.map((e: any) => (
        <div
          className="m-2 bg-white hover:shadow-slate-200 hover:shadow-md hover:cursor-pointer"
          key={e.id}
        >
          <Image
            src={e.image}
            width={100}
            height={100}
            alt={e.title}
            className="w-full h-56 object-fill"
          />
          {e.category}
          <Link href={`/products/${e.id}`} key={e.id}>
            <p>Product Name: {e.title}</p>
          </Link>
          <h1 className="">Rs.{e.price}</h1>
        </div>
      ))}
    </main>
  );
};
export default Products;
{
  /* <div className="grid grid-cols-5 gap-2">
        {productDetail.map((e: any) => (
          <div key={e.id} className="border border-black p-2">
            <Image
              src={e.image}
              width={100}
              height={100}
              alt={e.title}
              className="w-full h-56 object-fill"
            />
            <h1>{e.category}</h1>
            <p>Product Name: {e.title}</p>
            <h1 className="">Rs.{e.price}</h1>
          </div>
        ))}
      </div> */
}
