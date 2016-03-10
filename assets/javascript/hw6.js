
var random = ["cockatiel","ferrari","parrot","lion","tupac","grumpy cat","DMX"]



//for loop for generating preset buttons
for(i=0;i<random.length;i++){
appendNewButton(random[i])
}

//click event for dynamically adding new buttons to html.
$("#submit").click(function(){
var newTerm = $("#search-input").val().trim();
//console.log(newTerm);
$("#search-input").val("");
appendNewButton(newTerm);
return false;
});

//function for creating and appending buttons
function appendNewButton(gify) {
var a = $("<button>");
a.addClass("newTerm")
a.attr("data-name", gify)
a.text(gify)
$("#buttonsdiv").append(a);
}


//Function for AJAX call
function getInfo(){   
var search = $(this).text();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=10&rating=r&api_key=dc6zaTOxFJmzC"
//console.log($(this).text())
//console.log(search);

$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			var results = response.data;
			console.log(queryURL);

			for(i=0;i<results.length;i++){

				var imageLink = results[i].images.fixed_height.url
				var image = $("<img>")
				image.attr("src", imageLink)
				image.addClass("images")
				$(".giphydiv").prepend(image)
				$(".giphydiv").prepend("<p>rating: " +results[i].rating+ "</p>")

			}
			
		}); 
}


// function stillGiphy() {
// var search = 
// console.log(this);
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&limit=10&rating=r&api_key=dc6zaTOxFJmzC"

// $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
// 			var results = response.data;
// 			console.log(queryURL);
				
// 				var image = $("<img>")
// 				var imageLink = response.data[].images.fixed_height_still.url
// 				image.attr("src", imageLink)
// 				image.addClass("images")
// 				i
// 				$(".giphydiv").prepend(image)
// 				$(".giphydiv").prepend("<p>rating: " +results[i].rating+ "</p>")
			

// });

// } I can't get how to make the giphys still?

$(document).on("click", ".newTerm", getInfo);//Function for allowing us to get giphys from the dynamically created buttons.

$(document).on("click", ".images", stillGiphy)//Function for clicking on dynamically created giphys in order to make them still.











