import { Field, Form, Formik } from "formik";
import styles from "./header.module.css";
import { useState } from "react";
import { PhotoCard } from "./components/PhotoCard";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  return (
    <>
      <header className={styles.header}>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization: `Client-ID ${
                    import.meta.env.VITE_UNSPLASH_ACCESS_KEY
                  }`,
                },
              }
            );

            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" placeholder="Search your photos.." />
          </Form>
        </Formik>
      </header>
      <div className={styles.container}>
        <div className={styles.center}>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
