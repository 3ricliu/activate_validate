import "./styles/tailwind.css";
import { Formik, Form, Field } from "formik";
import { useState, useCallback } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";

function App() {
  const [achievements, updateAchievements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div>
      <Modal isOpen={isOpen} ariaHideApp={false}>
        <h1>Validate it!</h1>
        <Formik
          initialValues={{ summary: "" }}
          onSubmit={(values, { setSubmitting }) => {
            closeModal();
            achievements.push(values);
            updateAchievements(achievements);
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
      <ul>
        {achievements.map((achievement, index) => {
          return <li key={index}>{achievement.summary}</li>;
        })}
      </ul>
      <button onClick={openModal}>Add Accomplishment</button>
    </div>
  );
}

export default App;
