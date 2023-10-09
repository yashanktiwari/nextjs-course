import { useRouter } from "next/router";

const PortfolioIDPage = () => {
  const router = useRouter();

  console.log(router.query);
  // If we have a backend, then we can make a DB request
  // to fetch the data with the given id: router.query.id
  return (
    <>
      <h1>Portfolio ID Page</h1>
    </>
  )
}

export default PortfolioIDPage;