import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import styles from "./BlogCard.module.css";
import { RiArrowRightLine } from "react-icons/ri";

interface BlogCardProps {
  image: string;
  tag: string;
  title: string;
  content: string;
  link: string;
}

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const BlogCard = ({ image, tag, title, content, link }: BlogCardProps) => {
  return (
    <div className={`${noto.variable} ${styles.container}`}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={`/${image}`}
          alt="Blog Image"
          style={{ objectFit: "cover" }}
          width={640}
          height={640}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>{tag}</span>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{content}</p>
        <a href={link} className={styles.morelink}>
          Read more
          <RiArrowRightLine className={styles.arrow} size={"1.3rem"} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
