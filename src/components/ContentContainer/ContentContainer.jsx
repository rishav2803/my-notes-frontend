import styles from "./ContentContainer.module.css"

import Header from "../Header/Header";
import NotesContainer from "../NotesContainer/NotesContainer";

export default function ContentContainer() {

  return (
    <div className={styles.container}>
      <Header />
      <NotesContainer />
    </div>
  );
}
