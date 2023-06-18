// Description: Footer component
import Logo from "../public/favicon.svg";
import Link  from "next/link";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-300">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-5 basis-1/4 md:mt-3">
          {/* LINKS */}
          <h2 className="mb-3 text-lg font-bold">Links</h2>
          <p className="mb-3 text-xs">
            Feel free to check out{" "}
            <Link href="https://www.cedekpoole.com" target="_blank" className="underline hover:font-bold">
              my portfolio
            </Link>
          </p>
          <p className="mb-3 text-xs">
            See{" "}
            <Link
              href="https://github.com/cedekpoole"
              target="_blank"
              className="underline hover:font-bold"
            >
              my projects
            </Link>{" "}
            on GitHub
          </p>
          <p className="text-xs">
            Follow me on{" "}
            <Link
              href="https://www.linkedin.com/in/cam-edek-poole/"
              target="_blank"
              className="underline hover:font-bold"
            >
              LinkedIn
            </Link>
          </p>
        </div>
        {/* CONTACT LINK */}
        <div className="z-20 mt-5 basis-1/4 md:mt-3">
          <h2 className="mb-3 text-lg font-bold">Contact Me</h2>
          <p className="mb-3 text-xs">
            Fill in{" "}
            <Link className="underline hover:font-bold" target="_blank" href="https://cedekpoole.com/contact">
              this
            </Link>{" "}
            form
          </p>
          <p className="mb-3 text-xs">Greater London Area, UK</p>
          <p></p>
        </div>
        {/* Add logo and copyright text */}
        <div className="flex basis-1/2 flex-col items-end md:mt-14">
          <Image className="w-16" src={Logo} alt="Logo" />
          <p className="mt-2 text-xs">
            <FaRegCopyright className="mr-1 inline" />
            cedekpoole{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;