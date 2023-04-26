import { previewData } from "next/headers";
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import BlogList from "@/components/BlogList";
import { MotionDiv } from "@/components/MotionDiv";
const query = groq`
  *[_type=="post"]{
    ...
  } | order(publishedAt desc)`

export const revalidate = 60; // revalidate the pages every 60 seconds

export default async function Home() {
  if (previewData()) {
    return <div>PREVIEW MODE</div>;
  } 
  const posts = await client.fetch(query);
  return <MotionDiv duration={0.5} x={20}>
    <BlogList posts={posts}/>
  </MotionDiv>;
  }

