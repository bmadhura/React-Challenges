import { useState } from "react"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Styles from "./App.module.scss"

const App = () =>{
  const[tab,setTab]=useState<'home'|'about'|''>('');

  const changeTab=(tab:any)=>{
    setTab(tab);
  }
  return(
    <div className={Styles.page}>
      <div className={Styles.nav}>
        <button className={Styles.button} onClick={()=>changeTab('home')}>Home</button>
        <button className={Styles.button} onClick={()=>changeTab('about')}>About</button>
      </div>
      <div className={Styles.main}>
       { tab==='home' && <Home />}
       { tab==='about' && <About />}
      </div>
    </div>
  )
}

export default App