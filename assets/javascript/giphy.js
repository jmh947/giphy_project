console.log("javascript")
//html with an array of buttons

//every button has 
var apiKey = "rRAmDlmmTQ1ZaYGLJK5AVtGHtend41UG"
var animals = ["dog", "cat", "bird"]


// show buttons for every element inside of the array

// for loop animals array // build buttons element // append the element to the div

function showbuttons(){
    console.log("show")
    $("#animal").empty()
    for(var i = 0; i < animals.length; i++){

        $("#animal").append("<button class='butAnimals'>" + animals[i] +"</button>")

    }

    $(".butAnimals").on("click", function(){
        $("#gif").empty();
        console.log(this)
        var topic = $(this).text()
        console.log("topic:", topic)
        // API call to giphy and show the images
        var url ="https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + topic + "&limit=10&offset=0&rating=PG&lang=en"
    
        $.get(url, function(results){
            console.log(results)

            //$("#gif").append();
            //loop over results and for every result add some html to the page

            for( var i = 0; i < results.data.length; i++) {
               $("#gif").append("<img src='" + results.data[i].images.original.url + "'>"); 
            }

            //loop and build the img and append the img to the div

        })
    })


}

showbuttons()

//Create text box to input new buttons
$("#newTopic").enterKey(function() {   //needs a new event that works with enter just havent found one
    var newTopic = $(this).text()
    console.log("topic:", newTopic)
    animals.push(newTopic)
});
// onclick add new  animal
// get info from the form 
// this is a test
//var newTopic = "zebra"
//animals.push(newTopic)
//showbuttons()



// on click any of the buttons 
        // when this happens nned to go to giphy and get 20 images
        // show the images ---> means need other html div


//  form add more topics (buttons)
// html a input form to get the info
var animation = function (){
    $("#gif").on("click").function= $("#gif").pause()
    $("#gif").pause() 
 console.log(this);
};




// submit get the info
// push the new topi into the animals array
// show the buttons 