var forms = [
	"<img src=assets/rock.jpg>",
	"<img src=assets/paper.jpg>",
	"<img src=assets/download.jpeg>"
]


// var show = function() {
// 	getElementById("player1").inner.HTML= forms[count];
// 	document.getElementById('player1').src = "assets";
// }

function leftclick() {
	var player1choice = Math.floor(Math.random()* forms.length);
	document.getElementById('player1').innerHTML = forms[player1choice];



}
function rightclick() {
	var player2choice = Math.floor(Math.random()* forms.length);
	document.getElementById('player2').innerHTML = forms[player2choice];



}