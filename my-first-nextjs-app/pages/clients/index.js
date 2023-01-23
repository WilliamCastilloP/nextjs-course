import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    {
      id: "je",
      name: "jesus",
    },
    {
      id: "wi",
      name: "William",
    },
  ];
  return (
    <div>
      <h1>The clients page</h1>

      <h2>All the clients:</h2>
      <ul>
        {clients.map((client) => (
          <li>
            {/* <Link key={client.id} href={`/clients/${client.name}`}>
              {client.name}
            </Link> */}
            <Link
              key={client.id}
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
