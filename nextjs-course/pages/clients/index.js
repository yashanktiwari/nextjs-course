import Link from "next/link";

const ClientPage = () => {
  const clients = [
    {
      id: "abcd",
      name: "ABCD",
    },
    {
      id: "pqrs",
      name: "PQRS",
    },
  ];

  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={{
                pathname: "/clients/[id]",
                query: {id: client.id}
              }}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ClientPage;
