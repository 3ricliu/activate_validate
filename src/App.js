import "./styles/tailwind.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  return (
    <div>
      <h1>Validate it!</h1>
      <Formik
        initialValues={{ summary: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submitting");
          console.log({ values });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="summary" />
            <button type="submit" disable={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <button onClick={() => console.log("hello")}>Accomplishment</button>
    </div>
  );
}

export default App;
