import styles from "./ProfileContainer.module.css"

export default function ProfileContainer({ intials, color }) {

  return (
    <div className={styles.profile_container} style={{ background: color }}>
      <p>{intials}</p>
    </div>
  );
}
