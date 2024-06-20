"use client";

import { Noto_Sans } from "next/font/google";
import styles from "./Testimonial.module.css";
import Image from "next/image";

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

interface TestimonialProps {
  image: string;
  handle: string;
  content: string;
  name: string;
}

const Testimonial = ({ image, handle, content, name }: TestimonialProps) => {
  return (
    <div className={`${noto.variable} ${styles.container}`}>
      <div className={styles.heading}>
        <Image
          className={styles.image}
          src={`/${image}`}
          alt="Image of the author."
          width="48"
          height="48"
        />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.handle}>{handle}</div>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Testimonial;
