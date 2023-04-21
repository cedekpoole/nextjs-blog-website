import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
import { MotionDiv } from "@/components/MotionDiv";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
      ...
    }`;
  const post = await client.fetch(query, { slug });

  return (
    <article className="w-5/6 mx-auto">
      <hr className="mb-10 mt-3 border-gray-100" />
      <section className="pb-28">
        <MotionDiv duration={0.8} x={-50} className="relative h-80">
          <Image
            className="object-cover object-center mx-auto opacity-30"
            src={urlFor(post.coverImage).url()}
            alt={post.slug.current}
            fill
          />
          <div className="absolute bottom-0 p-5">
            <p className="font-bold text-4xl md:text-6xl mb-3">{post.title}</p>
            <p className="ml-2 mb-2">
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-xs xs:text-sm ml-2">{post.description}</p>
          </div>
        </MotionDiv>
      </section>
      
    </article>
  );
};

export default Post;
