import React from "react"
import './App.css'
import About from "../About/About"
import Timeline from "../Timeline/Timeline"
import Writing from "../Writing/Writing"
import InfoBlock from "../InfoBlock/InfoBlock"
import Contact from "../Contact/Contact"
import Login from "../Login/Login"
import { Switch, Route, useLocation, useHistory, Redirect, Link, useParams, useRouteMatch } from "react-router-dom";

 

function App (){

  return (
    <div className="appCont">
      {/* <Footer /> */}
      <InfoBlock />
      <div className="app">
          <Switch>
            <Route exact path="/">
                <Redirect to="/About" />
            </Route>
            <Route path="/About" component={AboutPage} />
            <Route path="/Timeline" component={TimelinePage} />
            <Route path="/Writing" component={WritingPage} />
            <Route path="/Contact" component={ContactPage} />   
            <Route path="/Login" component={LoginPage} />
          </Switch>
      </div>
    </div>
  )    
}

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
function AboutPage() {
  return (
      <About />
  );
}


function TimelinePage() {
  return (
      <Timeline />
  );
}

function WritingPage() {
    return (
      <Writing />
    )
}

function ContactPage() {
  return (
      <Contact />
  );
}

function LoginPage() {
  return (
      <Login />
  );
}

// function Footer() {

//   let location = useLocation();
//   let history = useHistory();

//   function increment () {
//     if (location.pathname === "/About") {
//       history.push("/Timeline");
//     } else if (location.pathname === "/Timeline"){
//       history.push("/Writing")
//     } else if (location.pathname === "/Writing"){
//       history.push("/Contact")
//     } else {
//       history.push("/About")
//     }

//   }

//   function decrement () {
//     if (location.pathname === "/About") {
//       history.push("/Contact");
//     } else if (location.pathname === "/Contact"){
//       history.push("/Writing")
//     } else if (location.pathname === "/Writing"){
//       history.push("/Timeline")
//     } else {
//       history.push("/About")
//     }
// }
  
//   return (
//       <div className="footer">
//           <div className="nav-cont">
//             <div className="leftArrowCont" onClick={decrement}>
//               <div className="leftArrow"></div>
//             </div>
//             <div className="pageName"><h2 className="pageTitle"><a className="navLink">{( location.pathname.indexOf("Writing") !== -1) ? "WRITING" : location.pathname.substring(1).toUpperCase()}</a></h2></div>
//             <div className="rightArrowCont" onClick={increment}>
//               <div className="rightArrow"></div>                  
//             </div>
//           </div>
//       </div>
//   )

// }


export default App
