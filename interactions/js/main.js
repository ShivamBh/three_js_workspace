(function() {

    var arr_slides = document.querySelectorAll(".slide");
    arr_length = arr_slides.length;
    //console.log(arr_length)
    
    var curr = 0;
    var next = 1;
    var prev = -1;

    

    window.addEventListener("wheel", function(e) {
        
        var dir = checkScrollDir(e)
        if (dir === -1) {
            console.log("Up");
            var_prev_slide = get_prev_slide(curr);

        }

        else {
            console.log("Down");
            var next_slide = get_next_slide(curr);
            console.log(next_slide);
            console.log(classie.has(next_slide, "is-active"));
        }


        return false
    });

    //get previous elem from index param
    function get_previous_slide(curr_index) {
        classie.remove(arr_slides[curr_index], "is-active");
        classie.add(arr_slides[curr_index+1], "is-active");
        if (curr_index === 0) {
            return false
        }
        curr -= 1;
        next -= 1;
    }

    //func get current elem from index param
    function get_next_slide(curr_index) {
        if (curr_index === arr_length) {
            return false;
        }
        classie.remove(arr_slides[curr_index], "is-active");
        classie.add(arr_slides[curr_index+1], "is-active");

        curr += 1;
        next += 1; 
        return arr_slides[curr_index+1];
    }


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