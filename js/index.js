var forms = [
	"<img src=../assets/rock.jpg>",
	"<img src=../assets/paper.jpg>",
	"<img src=../assets/scissors.jpg>"
]


var show = function() {
	getElementById("player1").inner.HTML=forms[count];
	document.getElementById('player1').src = "assets";
}