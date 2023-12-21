import Link from "next/link";
const Linkcomponent = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link
      href={link}
      className="hover:bg-clip-padding hover:text-indigo-600 hover:bg-gradient-to-l hover:from-pink-300 hover:to-orange-300 border-none rounded-lg p-2"
    >
      {name}
    </Link>
  );
};
export default Linkcomponent;
