import { useContext, useState } from "react";
// import {TaskContext} from "../contexts/TaskContext";
// import {AuthContext} from "../contexts/AuthContext";
import styles from "./SideBar.module.css";
import GroupList from "./GroupList/GroupList";
// import TaskList from "./TaskList";
// import DropDown from "./UI/DropDown";
// import Logo from "./UI/Logo";

export default function SideBar() {
  // const [dropDown, setDropDown] = useState(false);
  // const { currentUser } = useContext(AuthContext);
  // const { tasks } = useContext(TaskContext);

  return (
    <div className={`${styles.container}`}>
      <header className={styles.header}>
        {/* <Logo/> */}
        <h1>Pocket Notes</h1>
      </header>
      <div className={styles.group_container}>
        <GroupList />
        {/* <h4>All tasks ({tasks.length})</h4> */}
        {/* <TaskList/> */}
        {/* {dropDown && <DropDown/>} */}
      </div>
      {/* <footer className={styles.footer}> */}
      {/*   <div className={styles.profile}> */}
      {/*     <i className="fa fa-user"></i> */}
      {/*     <p>{currentUser.displayName}</p> */}
      {/*   </div> */}
      {/*   <i className="fa fa-ellipsis-h" onClick={()=>{setDropDown(!dropDown)}}></i> */}
      {/* </footer> */}
    </div>
  );
}
