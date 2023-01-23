import { useRouter } from "next/router";

const AllBlogPosts = () => {
  const router = useRouter();

  console.log(router.query.scattered);
  return (
    <div>
      <h1>these are the filtered blogs posts</h1>
    </div>
  );
};

export default AllBlogPosts;
