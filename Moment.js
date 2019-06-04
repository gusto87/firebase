
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
  var trainName = "";
  var destination = "";
  var time = "";
  var frequency = 0;

// action for button click
$("#add-info").on("click", function(event){
  event.preventDefault();

  // Values from text boxes 
 var trainName = $("#train-name-input").val().trim();
 var destination = $("#destination-input").val().trim();
 var time = $("#time-input").val().trim();
 var frequency = $("#frequency-input").val().trim();

   console.log(trainName);
   console.log(destination);
   console.log(time);
   console.log(frequency);
   // Setting values in the database

   var newTrain = {
     traiName: trainName,
     destination: destination,
     time: time,
     frequency: frequency,
    };
   


// watcher for firebase and inital loader
database.ref().push({
newTrain
});

return false;

  });

  // Firebase event adding trains to database and row in html for new entry
  database.ref().on("child_added", function(snaphot){
    console.log(snapshot.val());

    // stored into variables
    var trainName = snapshot.val().trainName;
    var destination = snapshot.val().destination
    var time = snapshot.val().time;
    var frequency = snapshot.val().frequency;


    var intialArrival = moment(time, "HH:mm")
    // creates object of the present date and time and storing it in varible until called by submit button
    var newMoment = moment();
    // does math of trains arrival in minutes
    var elaspedMinSinceArr = newMoment.diff(intialArrival, 'minutes');
    var lastArrivalMin = elaspedMinSinceArr % frequency;
    var minUntilArr = frequency - lastArrivalMin;

    var nextTrain = newMoment.add(minUntilArr, 'minutes');
     formatNextTrain = nextTrain.format("HH:mm");

    // creates new info for table
    var tr = $('<tr>');
    var a = $('<td>');
    var b = $('<td>');
    var c = $('<td>');
    var d = $('<td>');
    var e = $('<td>');
    a.append(trainName);
    b.append(destination);
    c.append(frequency);
    d.append(formatNextTrain);
    e.append(minUntilArr);
    tr.append(a).append(b).append(c).append(d).append(e);
    $('#newTrainInfo').append(tr);
    // function for the errors
    }, function (errorObject){
      console.log("The read failed" + errorObject.code);
   
    });
  
    
  
  
  