import React from "react"
import './Login.css'
import firebase from 'firebase/app'
import 'firebase/database'
import config from './config'


function Login() {
    return (
      <div className="LoginContMain">
        <div class="homeButtonCont">
          <a href="http://morning-scrubland-57504.herokuapp.com/About" class="homeButton">HOME</a>
        </div>
        <div class="form">
            <form id="nomliForm" name="nomliForm" action="">

                <h1 id="app-form">SCHEDULE ENTRY</h1>
                <h2 id= "form-description">
                   
                </h2>
            
                <div class="tab">
                    <div class="input2">
                        <p><input id="time" placeholder="Time" oninput="this.className = ''"/></p>
                    </div>
                    <div class="input2">
                        <p><input id="task" placeholder="Schedule Item" oninput="this.className = ''"/></p>
                    </div>
                    <div className="buttonDiv">
                        <button id="buttonSubmit" type='submit' onClick= { submitForm }>ENTER</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
}
    

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   var dataRef = "";
//   var database = firebase.initializeApp(config)

  // Get Current Date
  var dict = { "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "June", "07": "July", "08": "Aug", "09": "Sept", "10": "Oct", "11": "Nov", "12": "Dec"};
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var date = dict[String(mm)] + ' ' + dd + ', ' + yyyy;
  today = mm + '-' + dd + '-' + yyyy;


  console.log(today)
  function submitForm(e){
      e.preventDefault();
      // Get Values
      var task = getInputVal('task');
      var time = getInputVal('time');

      saveData(task, time, date)
  }
  
  
  //Function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }
  
  
  //save message to firebase
  function saveData(task, time, date) {
    var path = today
    var dataRef = firebase.database().ref(path);
    var newDataRef = dataRef.push();
    newDataRef.set( { 
      Task: task,
      Time: time,
      Date: date,
      });
    document.getElementById("nomliForm").reset();
  }

export default Login