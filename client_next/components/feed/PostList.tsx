import PostCard from "./Postcard";

export default function PostList() {
  // mock data for now
  const posts = Array.from({ length: 15 });

  return (
    <div className="flex flex-col gap-7 md:gap-5">
      {posts.map((_, index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
