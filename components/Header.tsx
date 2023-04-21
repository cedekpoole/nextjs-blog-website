import Link from "next/link";
import Image from "next/image";
import LogoImg from "../assets/logo.svg";
import { MotionDiv } from "./MotionDiv";

const Header = () => {
  return (
    <header className="flex justify-between items-center space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={LogoImg} alt="Logo" width={50} height={50} />
        </Link>
        <h3>CEDEKPOOLE WEEKLY</h3>
      </div>
      <MotionDiv duration={0.5} x={100}>
        <Link
          href="https://cedekpoole.com"
          className="hidden xs:block bg-gray-100 py-2 px-4 rounded-lg hover:text-gray-20 hover:bg-gray-300 transition duration-500 hover:translate-x-1 hover:shadow-2xl"
        >
          Check out my portfolio
        </Link>
      </MotionDiv>
    </header>
  );
};

export default Header;
