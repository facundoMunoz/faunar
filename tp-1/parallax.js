document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".layer").forEach(function (move) {

        var moving_value = move.getAttribute("speed");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        //move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        move.style.transform = "translateX(" + x + "px)";
    });
}