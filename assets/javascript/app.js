var quotes = ["Random Quote", "Small Quote", "Medium Quote", "Large Quote"];


            // displayRandomQuotefunction re-renders the HTML to display the appropriate content
            function displayRandomQuote() {
                
                document.getElementById("quotes-view").innerHTML="";

                var queryURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

                // Creating an AJAX call for the specific quote button being clicked
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var results = response;

                    console.log(results[0].split(" ").length)
                


                        // Creating a div for the gif
                        var quoteDiv = $("<div>");


                        // Storing the result as rating
                        var rating = results

                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Quote: " + rating);
                        var r = $("<p>").text("Average Rating: " + "placeholder");
                        var entry = $("<label>").text("Your Rating: ")
                        var input = $("<input>").attr("placeholder", "(1-5)");


                        // Appending vars to the "quotesDiv" div we created
                        quoteDiv.append(p);
                        quoteDiv.append(r);
                        quoteDiv.append(entry).append(input);

                        // Prepending the quoteDiv to the "#quotes-appear-here" div in the HTML
                        $("#quotes-view").prepend(quoteDiv);
                    
                
            });

            }

            function displaySmallQuote() {

                document.getElementById("quotes-view").innerHTML="";

                var movie = $(this).attr("data-name");
                var queryURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/60";

                // Creating an AJAX call for the specific quote button being clicked
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var results = response;
                    
                    // Looping over every result item
                    for (var i = 0; i < results.length; i++) {

                        console.log(results[0].split(" ").length)

                        if (results[i].split(" ").length <= 4)
                        {
                            // Creating a div for the quotes
                            var quoteDiv = $("<div>");

                            // Storing the result as rating
                            var rating = results[i];

                            // Creating a paragraph tag with the result item's rating
                            var p = $("<p>").text("Quote: " + rating);

                            // Appending vars to the "quoteDiv" div we created
                            quoteDiv.append(p);

                            // Prepending the quote Div to the "#quotes-appear-here" div in the HTML
                            $("#quotes-view").prepend(quoteDiv);
                        }

                        
                    }
                });

            }

            function displayMediumQuote() {

                document.getElementById("quotes-view").innerHTML="";

                var movie = $(this).attr("data-name");
                var queryURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/60";

                // Creating an AJAX call for the specific quote button being clicked
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var results = response;
                    
                    // Looping over every result item
                    for (var i = 0; i < results.length; i++) {

                        console.log(results[0].split(" ").length)

                        if (results[i].split(" ").length >= 5 && results[i].split(" ").length <= 12)
                        {
                            // Creating a div for the gif
                            var quoteDiv = $("<div>");

                            // Storing the result as rating
                            var rating = results[i];

                            // Creating a paragraph tag with the result item's rating
                            var p = $("<p>").text("Quote: " + rating);

                            // Appending vars to the "quoteDiv" div we created
                            quoteDiv.append(p);

                            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                            $("#quotes-view").prepend(quoteDiv);
                        }

                        
                    }
                });

            }

            function displayLargeQuote() {

                document.getElementById("quotes-view").innerHTML="";

                var movie = $(this).attr("data-name");
                var queryURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/60";

                // Creating an AJAX call for the specific quote button being clicked
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var results = response;
                    
                    // Looping over every result item
                    for (var i = 0; i < results.length; i++) {

                        console.log(results[0].split(" ").length)

                        if (results[i].split(" ").length >= 13)
                        {
                            // Creating a div for the gif
                            var quoteDiv = $("<div>");

                            // Storing the result as rating
                            var rating = results[i];

                            // Creating a paragraph tag with the result item's rating
                            var p = $("<p>").text("Quote: " + rating);

                            // Appending vars to the "quoteDiv" div we created
                            quoteDiv.append(p);

                            // Prepending the quoteDiv to the "#quotes-appear-here" div in the HTML
                            $("#quotes-view").prepend(quoteDiv);
                        }

                        
                    }
                });

            }


            // Function for displaying movie data
            function renderButtons() {

                // Deleting the movies prior to adding new movies
                // (this is necessary otherwise you will have repeat buttons)
                $("#buttons-view").empty();

                // Looping through the array of movies
                for (var i = 0; i < quotes.length; i++) {

                    // Then dynamicaly generating buttons for each movie in the array
                    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
                    var a = $("<button>");
                    // Adding a class of movie-btn to our button
                    a.addClass("quote-btn-" + i);
                    // Adding a data-attribute
                    a.attr("data-name", quotes[i]);
                    // Providing the initial button text
                    a.text(quotes[i]);
                    // Adding the button to the buttons-view div
                    $("#buttons-view").append(a);
                }
            }

            // Adding a click event listener to all buttons
            $(document).on("click", ".quote-btn-0", displayRandomQuote);

            $(document).on("click", ".quote-btn-1", displaySmallQuote);

            $(document).on("click", ".quote-btn-2", displayMediumQuote);

            $(document).on("click", ".quote-btn-3", displayLargeQuote);

            // Calling the renderButtons function to display the intial buttons
            renderButtons();
