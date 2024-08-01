import { useContext, useEffect, useState } from "react";
import styles from "./GroupList.module.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

export default function GroupList() {
  const [selected, setSelected] = useState("")

  const groups = [
    {
      id: 1,
      group_name: "MN",
      group_color: "orange",
      group_title: "My notes",
    },
    {
      id: 2,
      group_name: "MN",
      group_color: "pink",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
    {
      id: 3,
      group_name: "MN",
      group_color: "red",
      group_title: "My notes",
    },
  ]

  return (
    <ul className={styles.list_container}>
      {groups.map((group) => {
        return (
          <li key={group.id} onClick={() => { selectHandler(group.id) }} className={`${styles.list_items} ${selected === group.id ? styles.selected : ""}`}>
            <ProfileContainer intials={group.group_name} color={group.group_color} />
            {group.group_title}
          </li>
        );
      })}
    </ul>
  );
}
