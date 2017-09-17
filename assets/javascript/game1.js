$(document).ready(function() {

    var currentScore = 0;
    var winnings = 0;
    var losses = 0;

    var rand = Math.floor((Math.random() * 75) + 25);

    $("#guess").html(rand);

    var crystal = {

        red: {
            value: 0
        },


        blue: {
            value: 0
        },


        yellow: {
            value: 0
        },


        green: {
            value: 0
        }
    }

    crystal.red.value = Math.floor((Math.random() * 11) + 1);
    crystal.blue.value = Math.floor((Math.random() * 11) + 1);
    crystal.yellow.value = Math.floor((Math.random() * 11) + 1);
    crystal.green.value = Math.floor((Math.random() * 11) + 1);


    var addValues = function(clickCyrstal) {
        currentScore += clickCyrstal.value;
    }

    $("#red").on("click", function() {
        addValues(crystal.red);
        $("#score").html(currentScore);

        if (currentScore === rand) {
            winnings++;
            reset();

        } else if (currentScore > rand) {
            losses++;
            reset();
        }
    })
    $("#blue").on("click", function() {
        addValues(crystal.blue);
        $("#score").html(currentScore);
        if (currentScore === rand) {
            winnings++;
            reset();

        } else if (currentScore > rand) {
            losses++;
            reset();
        }

    })
    $("#yellow").on("click", function() {
        addValues(crystal.yellow);
        $("#score").html(currentScore);
        if (currentScore === rand) {
            winnings++;
            reset();

        } else if (currentScore > rand) {
            losses++;
            reset();
        }

    })
    $("#green").on("click", function() {
        addValues(crystal.green);
        $("#score").html(currentScore);
        if (currentScore === rand) {
            winnings++;
            reset();

        } else if (currentScore > rand) {
            losses++;
            reset();
        }
    })


    function reset() {
        $("#results").html("<p> Wins: " + winnings + "</p>" +
            " <p> losses: " + losses + "</p>");
        rand = Math.floor((Math.random() * 75) + 25);
        currentScore = 0;
        crystal.red.value = Math.floor((Math.random() * 11) +1 );
        crystal.blue.value = Math.floor((Math.random() * 11) +1 );
        crystal.yellow.value = Math.floor((Math.random() * 11) +1 );
        crystal.green.value = Math.floor((Math.random() * 11) +1 );
        $("#guess").html(rand);
        $("#score").html(currentScore);

    }




});