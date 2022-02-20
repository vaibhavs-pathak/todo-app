import { inject, observer } from "mobx-react";
import { Header, Form, Button, Checkbox } from "semantic-ui-react";
import { MainLayout } from "../../../../layout";
import FormHOC from "../../../../helper/hoc/form-hoc";

const metaInfo = {
  store: "userStore",
  form: "LOGIN_FORM",
};

const Home = (props) => {
  const { smartElement } = props;
  const { currentTime } = props.userStore;
  console.log(currentTime);

  const handleSubmit = async () => {
    try {
      const { saveUser, resetForm } = props.userStore;
      await saveUser();
      resetForm('LOGIN_FORM');
    } catch (err) {
      console.log("Error :: UserStore :: saveUser", err);
    }
  };

  return (
    <>
      <MainLayout>
        <Header as="h2">Header</Header>
        <Form error onSubmit={() => handleSubmit()}>
          <Form.Field>{smartElement.Input("firstName")}</Form.Field>
          <Form.Field>{smartElement.Input("lastName")}</Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </MainLayout>
    </>
  );
};

export default inject("userStore")(FormHOC(observer(Home), metaInfo));
