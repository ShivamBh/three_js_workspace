(function() {

    var arr_slides = document.querySelectorAll(".slide");
    arr_length = arr_slides.length;
    //console.log(arr_length)
    first = arr_slides[0];

    console.log(classie.hasClass(first, "is-active"));

    window.addEventListener("wheel", function(e) {
        

        
        var dir = checkScrollDir(e)
        if (dir === -1) {
            console.log("Up");
        }

        else {
            console.log("Down");
            
        }


        return false
    });


    // #func check scroll direction
    function checkScrollDir(e) {
        if (e.deltaY > 0) {
            return 1;
        }

        if (e.deltaY < 0) {
            return -1;
        }
    }


})();