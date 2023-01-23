import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  const goBackHomeFunc = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>The Specific project you've just selected!</h1>
      <button onClick={goBackHomeFunc}>Go Back Home</button>
    </div>
  );
};

export default SelectedClientProjectPage;
