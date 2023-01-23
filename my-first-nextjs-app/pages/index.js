import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <p>Hi, Im the HomePage Component! yeiii</p>

      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
