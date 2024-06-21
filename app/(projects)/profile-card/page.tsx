import ProfileCard, { IProfileCard } from "./ProfileCard";
import styles from "./page.module.css";

const ProfileCardPage = () => {
  const data: IProfileCard = {
    image: `profile-thumbnail.png`,
    name: "Sarah Dole",
    role: "Front End Engineer @ Microsoft",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
    links: [
      {
        icon: "github",
        label: "Github",
        link: "#",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        link: "#",
      },
      {
        icon: "instagram",
        label: "Instagram",
        link: "#",
      },
      {
        icon: "x",
        label: "X",
        link: "#",
      },
    ],
  };
  return (
    <div className={styles.main}>
      <ProfileCard data={data} />
    </div>
  );
};

export default ProfileCardPage;
