import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-gray-100 mt-3 mb-10 w-5/6 mx-auto" />
      <div>
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
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-gray-20 py-5">
                <p>{post.title}</p>
                <p>
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
