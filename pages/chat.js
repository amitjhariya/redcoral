import Head from "next/head";
import Layout from "../components/layout/Layout";
import Chat from "../components/chat";
const Index = () => {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Chat </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>
          <Chat/>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Index;