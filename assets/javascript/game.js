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
      <td>Math Stuff</td>
      <td>More Math Stuff</td>
    </tr>`)
  }

  //make function to calculate min away
  function calculateMinAway(hour , min) {
    var minAway;




    return minAway;
  }

  //make function to calculate min away
  function calculateNextArrival() {
    var nextArrival;






    return nextArrival;
  }


  // database.ref().set({
  //     newName: trainName
  //   });
  // database.ref().on("value", function(snapshot) {

  //     console.log(snapshot.val());


  //     trainName = snapshot.val();


  //   }

  //submit button on click function that send user input to html and the answer to both calculations 
  $("#addTrainButton").on("click", function () {
    var newTrain = getuserInput();
    
    var time = moment().format('h:mm');
    var splitTime = time.split(":");
    var hour = parseInt(splitTime[0]);
    var min = parseInt(splitTime[1]);
    console.log(hour , min);
    newTrain.minAway = calculateMinAway(hour , min);
    
    
    buildTrainRow(newTrain);
  })

})