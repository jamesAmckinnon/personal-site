import React, { useState, useEffect } from "react"
import './InfoBlock.css'
import About from "../About/About"
import $ from "jquery"
import { Switch, Route, useLocation, useHistory, Redirect, Link, useParams, useRouteMatch } from "react-router-dom";
// import firebase from 'firebase/app'
import 'firebase/database'
import config from '../Login/config.js'
import firebase from 'firebase';
import ReactDOM from "react-dom"

console.log(firebase.name);
console.log(firebase.database());

function InfoBlock() {

  

  const location = useLocation();
  const history = useHistory();

  var style = {   width: "17%",
                  height: "100%",
                  backgroundColor: "#ebf5fdff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px"}


  var style2 = {  width: "17%",
                  height: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px"}

  function changePage (page){
    history.push(page)
  }

  function writingDefault () {
    
    var element = document.querySelector(".expandable")

    if (element != null){
      element.classList.remove("hide")
      document.querySelector(".blockContMain").style.borderBottomLeftRadius="0px"
      document.querySelector(".blockContMain").style.borderBottomRightRadius="0px"
      document.querySelector(".blockContMain").style.height="100%"
    }   
  }

    return (
      <div className="blockContMain">
        <div className="infoBlockCont2">
          <div className="infoBlock">
            <div className = "navCont">
              <div className="navBackground">
                <div className = "nav">
                  <div className = "icons">
                    <div className="icon" id ="about" style={(location.pathname === "/About") ? style : style2} onClick={ () => {changePage("/About"); writingDefault();}} ><img className="logoPng" src="/images/aboutIcon.png" width="60%" height="80%"></img></div>
                    <div className="icon" id ="timeline" style={(location.pathname === "/Timeline") ? style : style2} onClick={ () => {changePage("/Timeline"); writingDefault();}}><img className="logoPng" src="/images/timelineIcon.png" width="60%" height="80%"></img></div>
                    <div className="icon" id ="writing" style={(location.pathname === "/Writing") ? style : style2} onClick={ () => {changePage("/Writing"); writingDefault();} }><img className="logoPng" src="/images/writingIcon.png" width="60%" height="80%"></img></div>
                    <div className="icon" id ="contact" style={(location.pathname === "/Contact") ? style : style2} onClick={ () => {changePage("/Contact"); writingDefault();}}><img className="logoPng" src="/images/contactIcon.png" width="60%" height="80%"></img></div>
                  </div>
                </div>
              </div>
            </div>
            { blockComponent (location) }
          </div>
        </div>
      </div>
    );
}



function blockComponent(location) {

  const components = () => {
    switch(location.pathname) {
      case "/About": return <AboutComponent />
      case "/Timeline": return <TimelineComponent />
      case "/Writing": return <WritingComponent />
      case "/Writing/FYSPaper": return <WritingComponent />
      case "/Writing/Scholarship": return <WritingComponent />
      case "/Writing/Space": return <WritingComponent />
      case "/Writing/Religion": return <WritingComponent />
      case "/Writing/BrainScience": return <WritingComponent />
      case "/Writing/WorkLife": return <WritingComponent />
      case "/Contact": return <ContactComponent />
    }
  }

  return (
  <div className="blockComponentCont"> { components() }</div>
  )
}
    
function AboutComponent() {
  

  function scheduleHover (){
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 760) {
      document.querySelector(".schedule").classList.add("scroll")
    }
  }

  function scheduleUnHover (){
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 760) {
      document.querySelector(".schedule").classList.remove("scroll")
    }
  }


  return (
    <div className="blockComponent">
      <div className = "aboutCardCont">
        < About/>
      </div>
      <div className = "schoolCont">
        <div className = "school">
          <div className = "schoolHeader">
            <div className = "schoolInfo">
              <div className = "schoolLogoCont">
                  <img className="logoPng" src="/images/uAlbertaLogo.png" width="120px"></img>
              </div>
              <div className = "schoolTitleCont">
                <div className = "schoolTitle">
                  <h3 className="schoolTitleClass">COMPUTING SCIENCE</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="semesterInfo">
            <div className="semester">
              <h3 className="noMarg">Fall 2021</h3>
            </div>              
          </div>
          <div className="courses">
            <div className="gpa">
              <span>Basics of Machine Learning</span><br></br>
              <span>Formal Systems and Logic in Computing</span><br></br>
              <span>Linear Algebra II</span><br></br>
              <span>Introduction to Applied Statistics I</span><br></br>
              <span>Introduction to Cell Biology</span><br></br>
              <span>Honors Seminar</span>
            </div>  
          </div>
        </div>
      </div>
      <div className = "missionCont">
        <div className = "mission">
          <div className = "missionHeader">
            <div className = "missionTitle">
              <span>MISSION</span>
            </div>
          </div>
          <div className = "missionText">
            <p>My mission is to make positive changes in the world using technology and science.</p>
          </div>
        </div>
      </div>
      {/* <div className = "scheduleCont">
        <div className = "schedule">
          <div className = "scheduleHeader">
            <div className = "scheduleTitle">
              <span>TODAY</span>
            </div>
            <div className="dateSelect">
              <div className ="leftArrow2Cont">
                <div className="leftArrow2"></div>
              </div>
              <div id="date">

              </div>
              <div className ="rightArrow2Cont">
                <div className="rightArrow2" ></div>                    
              </div>
            </div>
          </div>
          <div id = "scheduleItems" onMouseEnter= {scheduleHover} onMouseLeave = {scheduleUnHover}>
            < ScheduleItems/>
          </div>
        </div>
      </div> */}
    </div>
  )
}

function TimelineComponent() {
  function timelineHover (){
    document.querySelector(".blockComponentCont").classList.add("scroll")
  }

  function timelineUnHover (){
    document.querySelector(".blockComponentCont").classList.remove("scroll")
  }

  return (
    <div className="scrollCont" onMouseEnter= {timelineHover} onMouseLeave = {timelineUnHover}>
      <h3 className="sectionTitle">Timeline</h3>
      <div>
        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">HIGH SCHOOL GRAD</h3>
          </div>
          <h4 className="timelineDate">June 23, 2013</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">DRAFTING/DESIGN PROGRAM START</h3>
          </div>
          <h4 className="timelineDate">Sep 1, 2013</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">DRAFTING/DESIGN PROGRAM END</h3>
          </div>
          <h4 className="timelineDate">June 5, 2015</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">POWER ENGINEERING PROGRAM START</h3>
          </div>
          <h4 className="timelineDate">Aug 24, 2015</h4>
        </div>
      
        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">POWER ENGINEERING PROGRAM END</h3>
          </div>
          <h4 className="timelineDate">May 17, 2017</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">STARTED LEARNING GUITAR</h3>              
          </div>
          <h4 className="timelineDate">Oct 5, 2017</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">FIRST POWER ENGINEERING JOB</h3>
          </div>
          <h4 className="timelineDate">Feb 13, 2018</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">QUIT POWER ENGINEERING JOB</h3>
          </div>
          <h4 className="timelineDate">Aug 28, 2018</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">START OF TRAVELS - DUBLIN</h3>
          </div>
          <h4 className="timelineDate">Aug 30, 2018</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">END OF TRAVELS - ATHENS</h3>
          </div>
          <h4 className="timelineDate">Nov 5, 2018</h4>
        </div>
      
        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">FINISHED FIRST WEBSITE</h3>
          </div>
          <h4 className="timelineDate">Nov 25, 2018</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">MOVED TO VANCOUVER ISLAND</h3>              
          </div>
          <h4 className="timelineDate">Dec 9, 2018</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">MOVED TO KELOWNA</h3>
          </div>
          <h4 className="timelineDate">Feb 3, 2019</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">STARTED JOB AT ARCHITECTURE FIRM</h3>
          </div>
          <h4 className="timelineDate">Feb 4, 2019</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">LAST DAY AT ARCHITECTURE FIRM</h3>
          </div>
          <h4 className="timelineDate">May 2, 2019</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">STARTED BARTENDING AT BOSTON PIZZA</h3>
          </div>
          <h4 className="timelineDate">July 25, 2019</h4>
        </div>
      
        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">APPLIED TO uALBERTA - CS</h3>
          </div>
          <h4 className="timelineDate">Nov 28, 2019</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">ACCEPTED TO uALBERTA - CS</h3>              
          </div>
          <h4 className="timelineDate">Jan 16, 2020</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">LAST DAY AT BOSTON PIZZA</h3>              
          </div>
          <h4 className="timelineDate">Feb 23, 2020</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">MOVED TO ALBERTA</h3>
          </div>
          <h4 className="timelineDate">Feb 29, 2020</h4>
        </div>
        
        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">FIRST DAY @ uALBERTA</h3>
          </div>
          <h4 className="timelineDate">Aug 17, 2020</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">APPLIED TO HONORS PROGRAM</h3>
          </div>
          <h4 className="timelineDate">Oct 10, 2020</h4>
        </div>

        <div className="timelineContainer">
          <div className="timelineTitleCont">
            <h3 className="timelineTitle">ACCEPTED TO HONORS PROGRAM</h3>
          </div>
          <h4 className="timelineDate">Feb 10, 2021</h4>
        </div>
      </div>
    </div>
  )
}



function WritingComponent() {

  let { path, url } = useRouteMatch();
  let location = useLocation();

  // console.log(url)
  // console.log(path)
  let { id } = useParams();
  // console.log({id})


  return (
    <div>
      <h3 className="sectionTitle">Writing</h3>
      <div class="expandable" id="essayTitles">
        <Link to={`/Writing/FYSPaper`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink1" id="writingLinks">
          <div className="essayContainer">
            <div className="essayTitleCont">
              <h3 className="essayTitle">FYS BRAIN DEVELOPMENT PAPER</h3>
            </div>
            <h4 className="essayDate">Sept 11, 2020</h4>
          </div>
        </Link>

        <Link to={`/Writing/Scholarship`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink2" id="writingLinks">
          <div className="essayContainer">
            <div className="essayTitleCont">
              <h3 className="essayTitle">SCHOLARSHIP ESSAY ON INITIATIVE</h3>
            </div>
            <h4 className="essayDate">June 18, 2020</h4>
          </div>
        </Link>

        <Link to={`/Writing/Space`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink3" id="writingLinks">
          <div className="essayContainer">
            <div className="essayTitleCont">
              <h3 className="essayTitle">SPACE</h3>
            </div>
            <h4 className="essayDate">Nov 18, 2019</h4>
          </div>
        </Link>

        <Link to={`/Writing/Religion`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink4" id="writingLinks">
          <div className="essayContainer">
            <div className="essayTitleCont">
              <h3 className="essayTitle">RELIGION</h3>
            </div>
            <h4 className="essayDate">Sept 08, 2019</h4>
          </div>
        </Link>
        
        <Link to={`/Writing/BrainScience`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink5" id="writingLinks">
          <div className="essayContainer">
            <div className="essayTitleCont">
              <h3 className="essayTitle">BRAIN SCIENCE</h3>
            </div>
            <h4 className="essayDate">Aug 14, 2019</h4>
          </div>
        </Link>

        <Link to={`/Writing/WorkLife`} style={{ textDecoration: 'none' }} onClick= { doubleOnClick } className="writingLink6" id="writingLinks">
          <div className="essayContainer" id="workLife">
            <div className="essayTitleCont">
              <h3 className="essayTitle">WORK LIFE</h3>              
            </div>
            <h4 className="essayDate">Aug 6, 2019</h4>
          </div>
        </Link>
        <div>
          <Switch>
              {/* <Route exact path={path}>
              <h3>Please select a topic.</h3>
              </Route> */}
              <Route exact path={`:topicId`}>
              </Route>
          </Switch>
        </div>
      </div>
      <div className="writingContOverlay overlay--hidden"></div>
    </div>
  )
}

function doubleOnClick () {
  hideEssays()
  top()
}

function top (){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

function hideEssays () {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width < 760) {
    document.querySelector(".expandable").classList.add("hide")
    document.querySelector(".navCont").style.marginBottom="0px"
    document.querySelector(".blockContMain").style.height="90px"
    // document.querySelector(".blockContMain").style.borderBottomLeftRadius="0px"
    // document.querySelector(".blockContMain").style.borderBottomRightRadius="0px"
    document.querySelector(".writingContMain").style.marginTop="50px"
    document.querySelector(".blockContMain").style.top="0px"
  }
}


function ContactComponent() {
  return (
    <div className="blockComponent">
      <h3 className="sectionTitle">Contact</h3>
      <div className="contactCard">
        <div className="emailCont1">
          <div className="emailCont">
            <a id="anchorText" href = "mailto: jamesamckinnon1@gmail.com">JAMESAMCKINNON1@GMAIL.COM</a>
          </div>
        </div>
        <div className="phoneCont1">
          <div className="phoneCont">
              <h3 className="myPhone">(780) 806-9461</h3>
          </div>
        </div>
      </div>
    </div>
  )
}


function ScheduleItems () {
  var dict = { "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "June", "07": "July", "08": "Aug", "09": "Sept", "10": "Oct", "11": "Nov", "12": "Dec"};
  var today = new Date();
  var dd = String(today.getDate());
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
  var yyyy = today.getFullYear();
  today = mm + '-' + dd.padStart(2, '0') + '-' + yyyy;
  var date = dict[String(mm)] + ' ' + dd.padStart(1, '0') + ', ' + yyyy;

  var ref = firebase.database().ref(today);
  
  var tasks = []
  var times = []
  ref.once('value') 
  .then(function(data) { try {
      var entries = data.val();
      var keys = Object.keys(entries);

      //Reads database values and insert into elements
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        tasks.push(entries[k].Task)
        times.push(entries[k].Time)
      }
  
      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var time = times[i];
        console.log(tasks)
        var cont = document.getElementById('scheduleItems');
        var scheduleSlotDiv = document.createElement('div');
        scheduleSlotDiv.setAttribute("id", "scheduleSlotDiv");
        cont.appendChild(scheduleSlotDiv);

        var itemCont = document.createElement('div');
        itemCont.setAttribute("id", "scheduleItemCont");
        scheduleSlotDiv.appendChild(itemCont);

        var cont2 = document.createElement('div');
        cont2.setAttribute("id", "scheduleItem");
        var t = document.createTextNode(task);
        cont2.appendChild(t);
        itemCont.appendChild(cont2);

        var timeCont = document.createElement('div');
        timeCont.setAttribute("id", "scheduleTimeCont");
        scheduleSlotDiv.appendChild(timeCont);

        var timeSlot = document.createElement('div');
        timeSlot.setAttribute("id", "scheduleTime");
        var s = document.createTextNode(time);
        timeSlot.appendChild(s);
        timeCont.appendChild(timeSlot);
          
      }
    } catch(err) {
      console.log('hi')
    }

    if(document.getElementById('date').innerHTML.trim().length == 0) {
      var cont = document.getElementById('date');
      var cont2 = document.createElement('div');
      cont2.setAttribute("id", "scheduleDate");
      var t = document.createTextNode(date);
      cont2.appendChild(t);
      cont.appendChild(cont2);
   }
  })

  return (
    <div>

    </div>
  )
}

export default InfoBlock