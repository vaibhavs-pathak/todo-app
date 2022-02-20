import { Container } from "semantic-ui-react";
import { Layout, Header, Footer } from "../../index";

export const MainLayout = (props) => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container text className="mainContainer">
        {props.children}
      </Container>
    </Layout>
  );
};
