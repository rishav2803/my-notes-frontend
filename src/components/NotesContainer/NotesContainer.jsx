import { useContext, useEffect, useState } from "react";
import styles from "./NotesContainer.module.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

export default function NotesContainer() {
  const [selected, setSelected] = useState("")

  const notes = [

    "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  ]

  return (
    <ul className={styles.notes_container}>
      {notes.map((note) => {
        return (
          <div className={styles.note}>
            <p style={{ lineHeight: 2 }}>{note}</p>
            <div className={styles.time_container}>
              <p >{"9 Mar 2023"}</p>
              <p >{"10:00 AM"}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
