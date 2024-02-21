import Link from "next/link";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="font-extrabold text-3xl text-white">VRx</h1>
        </Link>
        <Link href="/sign-in" className="flex justify-center items-center">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-white bg-red-700 rounded-full min-w-[130px]"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
