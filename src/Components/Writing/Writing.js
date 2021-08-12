import React, { useState, useEffect } from "react"
import './Writing.css'
// import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
// import { AnimatePresence, motion} from "framer-motion";
import $ from "jquery"
import { FysPaper, Scholarship, Space, BrainScience, Religion, WorkLife } from "../Essays/essays"
import { Switch, Route, useLocation, useHistory, Redirect, Link, useParams, useRouteMatch } from "react-router-dom";

function Writing() {

    let location = useLocation();
    const pathname = location.pathname
    console.log(pathname)
    const [page, setPage] = useState("/Writing");

    // function expand () {
    //     document.querySelector('.select').classList.add('select--hidden');
    //     document.querySelector('.selectHeader').classList.add('selectHeader--hidden');
    //     document.querySelector('.writingContOverlay').classList.toggle('overlay--hidden');
    //     document.querySelector('.selectionContL1').classList.toggle('selectCont--hidden');
    // }

    // function hideOverlay () {
    //     document.querySelector('.writingContOverlay').classList.toggle('overlay--hidden');
    //     document.querySelector('.selectionContL1').classList.toggle('selectCont--hidden');
    //     document.querySelector('.select').classList.remove('select--hidden');
    //     document.querySelector('.selectHeader').classList.remove('selectHeader--hidden');
    // }


    // function Selection (props) {

    //     useEffect(() => {
    //         Essay(page)
    //       }, []);

    //     return(
    //         <div className="selectionContL2" onClick={ () => {titleClick(); setPage(props.name);}}>
    //             <img className="imgCont" src={props.img} width="40px" height="35px" ></img>
    //             <div className="titleCont">
    //                 <div className="selectionTitle"> {props.title} </div>
    //                 <div className="date"> {props.date} </div>
    //             </div>
    //         </div>
    //     )
    // }



    useEffect(() => {

        // console.log(page)
        // console.log(location.pathname, "hi")
        setPage("/Writing");
        Essay(page)
      }, [location]);

    const Map = {
        "/Writing/FYSPaper": <FysPaper />,
        "/Writing/Scholarship": <Scholarship />,
        "/Writing/Space": <Space />,
        "/Writing/BrainScience": <BrainScience />,
        "/Writing/Religion": <Religion />,
        "/Writing/WorkLife": <WorkLife />,
        "/Writing": " "
    } 


    function Essay (page) {  
        // console.log(page)

        console.log(location.pathname, "hi")
        console.log(page, "page")

        try {
            const TheEssay = () => { return(Map[location.pathname])};
            return (
                <TheEssay />
            )
        } catch (error) {
            const TheEssay = () => { return(Map[" "])};
            return (
                <TheEssay />
            )
        }    
    }


    // function titleClick () {
    //     document.querySelector('.select').classList.remove('select--hidden');
    //     document.querySelector('.selectHeader').classList.remove('selectHeader--hidden');
    //     document.querySelector('.writingCont').classList.remove('writingCont--hidden');
    //     document.querySelector('.selectionContL1').classList.toggle('selectCont--hidden');
    //     document.querySelector('.writingContOverlay').classList.toggle('overlay--hidden');
    //     document.querySelector('.writingContMain').classList.remove('writingContMain--hidden');
    // }


    return (
        <div className="megaContainer">
            <div className="writingContMain">
                <div className="writingCont">
                    <div className="writing">
                        <Essay />
                    </div>
                </div>
            </div>
            <div className="selectMenu" onClick= { menuCircle }>
                <img className="menuCircle" src="/images/menuCircle.png"></img> 
            </div>
        </div>

        // return (
        //     <div className="megaContainer">
        //         <div className="selectHeader">
        //             <div className="select">
        //                 <h3 id="selectTitle">Select</h3>
        //                 <div className="downArrow"></div>
        //             </div> 
        //         </div>  
        //         <div className="writingContOverlay overlay--hidden"></div>
        //         <div className="writingContMain">
        //             <div className="writingCont">
        //                 <div className="writing">
        //                     <Essay />
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <div className="selectionContL1">  
        //                 <Selection img="/images/logo.png" title="Research Paper for FYS @ uAlberta" date="September 11, 2020" name="FYSPaper"/>
        //                 <Selection img="/images/logo.png" title="Scholarship Essay on Initiative" date="June 18, 2020" name="Scholarship"/>
        //                 <Selection img="/images/logo.png" title="Space" date="November 18, 2019" name="Space"/>
        //                 <Selection img="/images/logo.png" title="Religion" date="September 8, 2019" name="Religion"/>
        //                 <Selection img="/images/logo.png" title="Brain Science" date="August 14, 2019" name="BrainScience"/>
        //                 <Selection img="/images/logo.png" title="Work and Life" date="August 6, 2019" name="WorkLife"/>
        //         </div> */}
        //     </div>
        // );
    );
}

function menuCircle () {
    var element = document.querySelector(".expandable")
    element.classList.remove("hide")
    document.querySelector(".blockContMain").style.height="100%"
}

// document.querySelector(".expandable").classList.add("hide")
// document.querySelector(".navCont").style.marginBottom="0px"


// let location = useLocation();
// if (location.pathname === "/Writing/rendering"){
//   return (
//     <div>
//       helooooo
//     </div>
//   )
// } else {
//   return 'Hi'
// }



export default Writing