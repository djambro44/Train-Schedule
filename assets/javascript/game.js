$("document").ready(function(){




    
    //Define Variables - make this local inside of a function
    //Train Name
    //Destination
    //Frequency
    //next arrival
    //min away
    
    //function for getting user input to add a new train
    function getuserInput(){
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
    function calculateMinAway(){

    }

    function calculateNextArrival(){

    }
    
    //submit button on click function
    $("#addTrainButton").on("click", function(trainName){
        getuserInput();
        $('tbody').html('<tr>', trainName, '</tr>');


    })
    //send user inputs for name, destination, and frequency to table
    //calculate next arrival time by 
})