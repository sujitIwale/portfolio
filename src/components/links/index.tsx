import Link from "next/link";
import styles from "./Links.module.css";

const list = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/sujitIwale",
    icon: <i className="fa-brands fa-github fa-xl"></i>,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com",
    icon: <i className="fa-brands fa-linkedin fa-xl"></i>,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://twitter.com",
    icon: <i className="fa-brands fa-twitter fa-xl"></i>,
  },
  {
    id: 4,
    title: "email",
    url: "sujit.iwale5115@gmail.com",
    icon: <i className="fa-solid fa-envelope fa-xl"></i>,
    type: "email",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {list.map((link) => (
        <Link
          key={link.id}
          href={`${link.type === "email" ? "mailto:" : ""}${link.url}`}
          target="_blank"
          type="email"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Links;
