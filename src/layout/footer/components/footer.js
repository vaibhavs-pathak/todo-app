import { Segment, Grid, Header, List, Container } from "semantic-ui-react";

export const Footer = (props) => {
  const styles = {
    footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
    },
  };
  
  return (
    <Segment placeholder inverted vertical style={styles.footer}>
      <Container>
        <Grid divided inverted>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h4" inverted>
                Quick Link
              </Header>
              <List inverted>
                <List.Item>Home</List.Item>
                <List.Item>Message</List.Item>
                <List.Item>Friend</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted>
                Action Link
              </Header>
              <List inverted>
                <List.Item>About Us</List.Item>
                <List.Item>Contact Us</List.Item>
                <List.Item>Our Team</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};