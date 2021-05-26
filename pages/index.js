import Head from "next/head";
import Layout from "../components/layout/Layout";
const Index = () => {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Home </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>
          Home Page
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Index;
