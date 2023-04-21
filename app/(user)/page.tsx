import { previewData } from "next/headers";
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=="post"]{
    ...
  } | order(_createdAt desc)`

export const revalidate = 60; // revalidate the pages every 60 seconds

export default async function Home() {
  if (previewData()) {
    return <div>PREVIEW MODE</div>;
  } 
  const posts = await client.fetch(query);
  return <div>
    <BlogList posts={posts}/>
  </div>;
  }

