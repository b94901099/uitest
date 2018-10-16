(function move() {
    var secondLine = document.getElementById("secondLine");
	var thirdLine = document.getElementById("thirdLine");
    if(secondLine.style.display === "none") {
        secondLine.style.display = "";
		thirdLine.style.display = "";
    } else {
		secondLine.style.display = "none";
		thirdLine.style.display = "none";
	}
	setTimeout(move, 1000);
})();

(function() {
	var d = new Date();
	var dArry = d.toString().split(" ");
	var str = dArry[1] + " " + dArry[2] + ", " + dArry[3];
	var timeArry = dArry[4].split(":");
	hour = parseInt(timeArry[0])
	str = str + " " + (hour <= 12 ? 11 : 07) + ":" + timeArry[1] + " " + (hour <= 12 ? "AM" : "PM")
	document.getElementById("thirdLine").innerHTML = str;
	document.getElementById("zone").innerHTML = hour <= 12 ? "4 - 1" : "1 - 4";
})();


var modal = document.getElementById('myModal');
function pops() {
	modal.style.display = "block";
};

/* hide url bar*/
window.onload = function(){
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 100);
}

/*prevent slide webpage*/
document.addEventListener("touchmove", function(event){
    event.preventDefault();
}, false);