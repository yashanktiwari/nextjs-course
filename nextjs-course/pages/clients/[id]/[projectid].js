import { useRouter } from "next/router";

const ClientProjectIDPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <>
      <h1>Client Project ID Page</h1>
    </>
  )
}

export default ClientProjectIDPage;