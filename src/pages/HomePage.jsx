// import {useContext, useEffect, useState} from "react";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import SideBar from "../components/SideBar";
// import Task from "../components/Task";
import Container from "../ui/Container";
// import {AuthContext} from "../contexts/AuthContext";
// import {TaskContext} from "../contexts/TaskContext";
// import {fetchTask} from "../service/TaskService";

export default function HomePage() {
  // const [hamburger,setHamburger]=useState(false);
  // const {storeTask}=useContext(TaskContext);
  // const {currentUser}=useContext(AuthContext);
  //
  //
  // function hamburgerHandler(val){
  //   setHamburger(val);
  // }
  //
  // useEffect(()=>{
  //   async function getData(){
  //     const res=await fetchTask(currentUser.uid);
  //     storeTask(res);
  //   }
  //   getData();
  // },[]);

  return (
    <Container>
      <SideBar />
      <ContentContainer />
      {/* <Task hamburger={hamburger} onHamburger={hamburgerHandler}/> */}
    </Container>
  )
}
