import Image from "next/image";


import { urlFor } from "@/lib/urlFor";
type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="w-5/6 mx-auto">
      <hr className="border-gray-100 mt-3 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* BLOG POSTS */}
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="relative group-hover:scale-105 transition duration-300 w-full h-80 drop-shadow-xl ">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.coverImage).url()}
                alt={post.slug.current}
                fill
              />
              <div className="absolute bottom-0 w-full backdrop-blur-sm bg-black bg-opacity-50 text-gray-20 py-5">
                <p className="ml-2 text-lg">{post.title}</p>
                <p className="ml-3 text-sm">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
