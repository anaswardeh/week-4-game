$(document).ready(function() {


    var random = 0;

    //Creating four different variables with a value of 0

    var red = 0;
    var blue = 0;
    var yellow = 0;
    var green = 0;

    var winnings = 0;
    var losses = 0;



    var total = red + blue + yellow + green;

    //On loading the page, a random number between 1 and 50 should appear on the third box.



    $("#guess").html(random = Math.floor((Math.random() * 76) + 25));
    $("#score").html(total);


    //printResults();

    //Each variable is assigned to a different image

    $("#red").one("click", function() {
        red = Math.floor((Math.random() * 10) + 1);
        total += red;
        $("#score").html(total);




        if (total === random) {
            winnings++;
            printResults();
        } else if (total > random) {
            losses++
            printResults();
        }



        $("#red").on("click", function() {
            total += red;
            $("#score").html(total);




            if (total === random) {
                winnings++;
                printResults();
            } else if (total > random) {
                losses++
                printResults();
            }

        });


    });


    $("#blue").one("click", function() {
        blue = Math.floor((Math.random() * 10) + 1);
        total += blue;
        $("#score").html(total);


        if (total === random) {
            winnings++;
            printResults();
        } else if (total > random) {
            losses++
            printResults();
        }




        $("#blue").on("click", function() {
            total += blue;
            $("#score").html(total);


            if (total === random) {
                winnings++;
                printResults();
            } else if (total > random) {
                losses++
                printResults();
            }


        });



    });


    $("#yellow").one("click", function() {
        yellow = Math.floor((Math.random() * 10) + 1);
        total += yellow;
        $("#score").html(total);

        if (total === random) {
            winnings++;
            printResults();
        } else if (total > random) {
            losses++
            printResults();
        }



        $("#yellow").on("click", function() {
            total += yellow;
            $("#score").html(total);


            if (total === random) {
                winnings++;
                printResults();
            } else if (total > random) {
                losses++
                printResults();
            }

        });


    });

    $("#green").one("click", function() {
        green = Math.floor((Math.random() * 10) + 1);
        total += green;
        $("#score").html(total);

        if (total === random) {
            winnings++;
            printResults();
        } else if (total > random) {
            losses++
            printResults();
        }


        $("#green").on("click", function() {
            total += green;
            $("#score").html(total);


            if (total === random) {
                winnings++;
                printResults();
            } else if (total > random) {
                losses++
                printResults();
            }


        });




    });

    //Reset and print value

    function printResults() {

        $("#results").html("<p> Wins: " + winnings + "</p>" +
            " <p> losses: " + losses + "</p>");

        random = Math.floor((Math.random() * 76) + 25);
        red = Math.floor((Math.random() * 10) + 1);
        blue = Math.floor((Math.random() * 10) + 1);
        yellow = Math.floor((Math.random() * 10) + 1);
        green = Math.floor((Math.random() * 10) + 1);
        total = 0;
        $("#guess").html(random);
        $("#score").html(total);


    };


});