import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const { id } = useRouter().query;

  //   console.log(router);
  return (
    <div>
      <h1>The Portfolio Project Page with dynamic data! id is {id}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
