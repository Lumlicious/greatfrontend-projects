import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import styles from "./ProfileCard.module.css";
import {
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiQuestionMark,
} from "react-icons/ri";

export interface IProfileCard {
  image: string;
  name: string;
  role: string;
  description: string;
  links: ISocialMedia[];
}

export interface ISocialMedia {
  icon: string;
  label: string;
  link: string;
}

interface ProfileCardProps {
  data: IProfileCard;
}

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const supportedSocial: any = {
  instagram: <RiInstagramFill className={styles.socialicon} size={20} />,
  github: <RiGithubFill className={styles.socialicon} size={20} />,
  linkedin: <RiLinkedinBoxFill className={styles.socialicon} size={20} />,
  x: <RiTwitterXFill className={styles.socialicon} size={20} />,
};

const ProfileCard = ({ data }: ProfileCardProps) => {
  const { image, name, role, description, links } = data;
  return (
    <div className={`${noto.variable} ${styles.container}`}>
      <div className={styles.details}>
        <Image
          className={styles.image}
          src={`/${image}`}
          alt="Image of the author"
          width="64"
          height="64"
        />
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>{role}</div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>Contact me</button>
        <div className={styles["link-container"]}>
          {links.map((link) => (
            <a
              className={styles["social-link"]}
              href={link.link}
              aria-label={link.label}
              key={link.label}
            >
              {supportedSocial[link.icon] || (
                <RiQuestionMark className={styles["social-icon"]} size={20} />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
