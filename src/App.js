import "./styles/tailwind.css";
import { Formik, Form, Field } from "formik";
import { useState, useCallback } from "react";
import Modal from "react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  console.log(isOpen);
  return (
    <div>
      <Modal isOpen={isOpen}>
        <h1>Validate it!</h1>
        <Formik
          initialValues={{ summary: "" }}
          onSubmit={(values, { setSubmitting }) => {
            closeModal();
            console.log("submitting");
            console.log({ values });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="summary" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
      <button onClick={openModal}>Accomplishment</button>
    </div>
  );
}

export default App;
