
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAa3EB3WbRpVfsRDcPU0Y9dSnrondwOwpE",
    authDomain: "week7-3-f0ac9.firebaseapp.com",
    databaseURL: "https://week7-3-f0ac9.firebaseio.com",
    projectId: "week7-3-f0ac9",
    storageBucket: "week7-3-f0ac9.appspot.com",
    messagingSenderId: "1076171700414",
    appId: "1:1076171700414:web:fec2ad0f77d23344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();
// values for table 
  var trainName = "";
  var destination = "";
  var time = 0;
  var frequency = "";

// action for button click
$("#add-info").on("click", function(event){
  event.preventDefault();

  // Values from text boxes 
  trainName = $("#train-name-input").val().trim();
  destination = $("#destination-input").val().trim();
   time = $("#time-input").val().trim();
   frequency = $("#frequency-input").val().trim();

   // Setting values in the database

   var newTrain = {
     trainName: trainName,
     destination: destination,
     time: time,
     frequency: frequency,
    };
   


// watcher for firebase and inital loader
database.ref().push(newTrain)

// alert new train info
alert("Train successfully added");
  

// Clears the input of the text box
$("#train-name-input").val("");
$("#destination-input").val("");
$("#time-input").val("");
$("#frequency-input").val("");
  });

  // Firebase event adding trains to database and row in html for new entry
  database.ref().on("added_child", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;

    // declare varible
    var frequency;

    // time on the entry form
    var time = 0;

    var 

  })