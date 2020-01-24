$(document).ready(function() {
    let catCounter = 0;
    let dogCounter = 0;


    $('button#catOne').click(function(){
        urlLink = "";
        if (catCounter == 0) {
            urlLink = "https://cdn.pixabay.com/photo/2014/04/29/13/19/cat-334383_1280.jpg"      
        } else if (catCounter == 1) {
            urlLink = "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg"
        } else if (catCounter == 2) {
            urlLink="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg"
        }
        $('#catImage').append(`<img src='${urlLink}'>`);
        catCounter = catCounter + 1;
        console.log(catCounter);
    });

    $("button#dogOne").click(function() {
        urlLink = "";
        if (dogCounter == 0) {
            urlLink="https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg"
        } else if (dogCounter == 1) {
            urlLink="https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398_1280.jpg"
        } else if (dogCounter === 2) {
            urlLink="https://cdn.pixabay.com/photo/2017/04/03/17/35/animals-2198994_1280.jpg"
        }
        $("#dogImage").append(`<img src='${urlLink}'>`);
        dogCounter += 1;

    });

    $("div#catImage").on("click", "img", function() { 
        $(this).remove();
        catCounter = catCounter - 1;
        console.log(catCounter);
    });
    
    $("div#dogImage").on("click", "img", function() {
        $(this).remove();
        dogCounter = dogCounter - 1;
        console.log(dogCounter);
    })




});