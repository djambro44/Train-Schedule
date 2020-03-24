$("document").ready(function () {

  var firebaseConfig = {
      apiKey: "AIzaSyAMaruBdafi8L6tealfJUeWeOMqCagVc2E",
      authDomain: "da-bootcamp-trainschedule.firebaseapp.com",
      databaseURL: "https://da-bootcamp-trainschedule.firebaseio.com",
      projectId: "da-bootcamp-trainschedule",
      storageBucket: "da-bootcamp-trainschedule.appspot.com",
      messagingSenderId: "169963651588",
      appId: "1:169963651588:web:fcaad259df50baf536ab51"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    var database = firebase.database();

  //Define Variables - make this local inside of a function
  //Train Name
  //Destination
  //Frequency
  //next arrival
  //min away


  //function for getting user input to add a new train
  function getuserInput() {
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTime = $("#firstTrainTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);
    database.ref().set({
      name: trainName,
      destination: destination,
      time: trainTime,
      frequency: frequency
    });
  
    return {
      name: trainName,
      destination: destination,
      time: trainTime,
      frequency: frequency
    };
  }

  function buildTrainRow(train) {
    // console.log("this exists in buildTrainRow: ", train)
    $("#timeTable").append(`<tr>
      <td>${train.name}</td>
      <td>${train.destination}</td>
      <td>${train.frequency}</td>
      <td>${train.time}</td>
      <td>${train.minAway}</td>
    </tr>`)
  }

  //make function to calculate min away
  function calculateMinAway(militarynow, firstTrainTime, frequency) {
    var minAway = "";
    var numAway;
    var minNow = (militarynow.hour*60) + militarynow.minute;
    var minFTT = (firstTrainTime.hour*60) + firstTrainTime.minute;

    if (minNow < minFTT){
     numAway = minFTT - minNow;
     minAway = `${numAway} minutes`
    } else if (minFTT < minNow){
      numAway = minNow - minFTT
      minAway = `${numAway} minutes`
    } else if (minNow === minAway) {
      minAway = "The train is here."
    }

    return minAway;
  }

  //make function to calculate min away
  function calculateNextArrival() {
    var nextArrival;
    






    return nextArrival;
  }

  function hourMin(stringTime){
    var splitTime = stringTime.split(":");
    var hour = parseInt(splitTime[0]);
    var minute = parseInt(splitTime[1]);
    return {
      hour: hour,
      minute: minute
    }
  }
  
  $("#addTrainButton").on("click", function () {
    var newTrain = getuserInput();
    
    var time = moment().format('H:mm');
    var militarynow = hourMin(time);
    var firstTrainTime = hourMin(newTrain.time);
    var frequency = parseInt(newTrain.frequency);
    newTrain.minAway = calculateMinAway(militarynow, firstTrainTime, frequency);
    
    
    buildTrainRow(newTrain);
  })

})