import "./styles/tailwind.css";
import { Formik, Form, Field } from "formik";
import { useState, useCallback } from "react";
import Modal from "react-modal";
import { getFirestore, doc, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const docRef = await addDoc(collection(db, "achievements"), {
                summary: values.summary,
              });
              console.log("Document written with ID: ", docRef.id);
              achievements.push(values);
              updateAchievements(achievements);
            } catch (e) {
              console.error("Error adding document: ", e);
            } finally {
              closeModal();
            }
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

const firebaseConfig = {
  apiKey: "AIzaSyC3yGPsOtKfMNcBoJGWSAk2ZRjFBhtFc1M",
  authDomain: "activate-validate.firebaseapp.com",
  projectId: "activate-validate",
  storageBucket: "activate-validate.appspot.com",
  messagingSenderId: "305549924099",
  appId: "1:305549924099:web:e77c6ef018e8a5cd3bfb36",
  measurementId: "G-3ZVYX1K7G2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
