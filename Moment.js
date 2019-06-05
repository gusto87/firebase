
 
  
  
  
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
   
  var database = firebase.database();

// values for table 
  
// action for button click
$("#add-info").on("click", function(childSnaphot){
childSnaphot.preventDefault();

  // Values from text boxes 
 var trainName = $("#train-name-input").val().trim();
 var destination = $("#destination-input").val().trim();
 var time = $("#time-input").val().trim();
 var frequency = $("#frequency-input").val().trim();

  
   // Setting values in the database

   var newTrain = {
     name: trainName,
     destination: destination,
     time: time,
     frequency: frequency,
    };
   
    // check values via if/else statements
    if (
      trainName != "" &&
      destination != "" &&
      frequency != "") {
        //uploads data to firebase
        database.ref().push(newTrain);
        alert ("New train added!")
      }else{
        alert("Invalid entry/format")
      }
    
      // stores data in the console
      console.log(newTrain.trainName)
      console.log(newTrain.destination)
      console.log(newTrain.frequency)
      console.log(newTrain.time)
     
      // Clear input boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#frequency-input").val("");

});


  // Firebase event adding trains to database and row in html for new entry
  database.ref().on("child_added", function(childSnapshot) {

    // stored into variables
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(frequency);
    console.log(time)
    
   
    // does math of trains arrival time
    var elaspedMinSinceArr = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");
    var lastArrivalMin = moment().diff(moment(elaspedMinSinceArr), "minutes");
    var minUntilArr = lastArrivalMin % childSnapshot.val().frequency;

    var timeUntilArr = childSnapshot.val().frequency - minUntilArr;

    var nextArrivalTemp = moment().add(timeUntilArr, "minutes");
    nextArrival = moment(nextArrivalTemp).format("HH:mm")
    // creates new info for table
    var newInfo = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(nextArrival),
      $("<td>").text(timeUntilArr),
    );

    $("#big-trains").append(newInfo);
    // function for the errors
  }, function (errorObject){
      console.log("The read failed" + errorObject.code);
   
    });
  
    
  
  
  