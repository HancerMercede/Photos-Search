import PropTypes from "prop-types";
import styles from "./PhotoCard.module.css";
const open = (url) => window.open(url);

export const PhotoCard = ({ photo }) => {
  console.log({ photo });
  return (
    <article
      className={styles.article}
      key={photo.id}
      onClick={() => open(photo.links.html)}
    >
      <img src={photo.urls.regular} />
      <p>{[photo.description, photo.alt_description].join(" - ")}</p>
    </article>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
};
