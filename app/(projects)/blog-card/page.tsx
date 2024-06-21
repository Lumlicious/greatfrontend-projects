import BlogCard from "./BlogCard";
import styles from "./page.module.css";

const BlogCardPage = () => {
  const data = {
    image: "living-room.jpg",
    tag: "Interior",
    title: "Top 5 Living Room Inspirations",
    link: "#",
    content:
      "Curated vibrants colors for your living, make it pop & calm in the same time.",
  };

  return (
    <div className={styles.main}>
      <BlogCard {...data} />
    </div>
  );
};

export default BlogCardPage;
