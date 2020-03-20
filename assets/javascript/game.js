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
    }

    //make function to calculate min away
    function calculateMinAway() {

    }

    //make function to calculate min away
    function calculateNextArrival() {

    }

    database.ref().set({
        newName: trainName
      });
    database.ref().on("value", function(snapshot) {

        // Then we console.log the value of snapshot
        console.log(snapshot.val());
  
        // Update the clickCounter variable with data from the database.
        trainName = snapshot.val();
  
        // Then we change the html associated with the number.
  
        // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
        // Again we could have named errorObject anything we wanted.
      }

    //submit button on click function that send user input to html and the answer to both calculations 
    $("#addTrainButton").on("click", function (trainName) {
        getuserInput();
        $('#timeTable > tbody:last-child').append('<tr>trainName</tr><tr>...</tr>');


    })
   
})