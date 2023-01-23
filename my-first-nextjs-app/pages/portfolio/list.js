const list = ["hello", "como", "estas", "somos", "la", "lista"];

const PortfolioList = () => {
  return (
    <div>
      {list.map((item) => {
        return <p key={Math.floor(Math.random() * 150000000)}>{item}</p>;
      })}
    </div>
  );
};

export default PortfolioList;
