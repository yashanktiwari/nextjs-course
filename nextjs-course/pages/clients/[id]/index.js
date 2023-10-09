import { useRouter } from "next/router";

const ClientIDPage = () => {
  const router = useRouter();

  console.log(router.query);
  const loadProjectHandler = () => {
    // load data..
    router.push(`/clients/${router.query.id}/projectA`);
  }
  return (
    <>
      <h1>Client ID Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  )
}

export default ClientIDPage;