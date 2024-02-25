import Link from "next/link";
import { urlFor } from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div
          className="relative w-full h-96 sm:m-10 sm:mx-auto bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${urlFor(value).url()})`,
            backgroundSize: "contain",
          }}
          aria-label="Blog Image"
        ></div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 pb-10 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-5 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl font-bold py-2">{children}</h5>
    ),
  },
  blockquote: ({ children }: any) => (
    <blockquote className="border-gray-100 border-l-4 pl-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary-100 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
