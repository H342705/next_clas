import Linkcomponent from "./link-comp";

const Navbar = () => {
  return (
    <nav className="flex justify-around h-24 text-white items-center bg-indigo-600">
      <Linkcomponent name={"Home"} link="/" />
      <Linkcomponent name={"Products"} link="/products" />
      <Linkcomponent name={"Suppliers"} link="/blog" />
      <Linkcomponent name={"WareHouses"} link="/data" />
    </nav>
  );
};
export default Navbar;
