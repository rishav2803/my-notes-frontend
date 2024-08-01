import ProfileContainer from "../ProfileContainer/ProfileContainer";
import styles from "./Header.module.css"

export default function Header() {

  return (
    <div className={styles.header}>
      <ProfileContainer intials={"MN"} color={"orange"} />
      <p>My notes</p>
    </div>
  );
}
