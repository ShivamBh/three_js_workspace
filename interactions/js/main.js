(function() {

    window.addEventListener("wheel", function(e) {
        

        
        var dir = checkScrollDir(e)
        if (dir === -1) {
            console.log("Up");
        }

        if (dir === 1) {
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