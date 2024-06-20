import Testimonial from "./Testimonial";
import styles from "./page.module.css";

const TestimonialCardPage = () => {
  const data = {
    name: "Sarah Dole",
    handle: "@sarahdole",
    content: `I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
    image: `profile-thumbnail.png`,
  };

  return (
    <div className={styles.main}>
      <Testimonial {...data} />
    </div>
  );
};

export default TestimonialCardPage;
