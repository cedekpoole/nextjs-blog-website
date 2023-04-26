import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
import { MotionDiv } from "@/components/MotionDiv";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate the pages every 60 seconds

export async function generateStaticParams({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post"]
    {
      slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
    }
    `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="w-5/6 mx-auto pb-28">
      <hr className="mb-10 mt-3 border-gray-100" />
      <section className="mb-10">
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
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-xs xs:text-sm ml-2">{post.description}</p>
          </div>
        </MotionDiv>
      </section>
      <MotionDiv duration={0.5} x={20}>
        <PortableText value={post.body} components={RichTextComponents}/>
      </MotionDiv>
    </article>
  );
};

export default Post;
