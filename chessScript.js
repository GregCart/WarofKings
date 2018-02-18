var playField, piecePlaces;
var srces = ["C:\Users\Flame03fire\Downloads\programming IMG\King-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\Queen-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\Rook-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\Knight-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\Bishop-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\Pawn-white.png", "C:\Users\Flame03fire\Downloads\programming IMG\King-black.png", "C:\Users\Flame03fire\Downloads\programming IMG\Queen-black.png", "C:\Users\Flame03fire\Downloads\programming IMG\Rook-black.png", "C:\Users\Flame03fire\Downloads\programming IMG\Knight-black.png", "C:\Users\Flame03fire\Downloads\programming IMG\Bishop-black.png", "C:\Users\Flame03fire\Downloads\programming IMG\Pawn-black.png"];
var pawns = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]; 
var peices = {"White": ["King", "Queen", "Rook1", "Rook2", "Knight1", "Knight2", "BishopW", "BishopB", pawns], "Black": ["King", "Queen", "Rook1", "Rook2", "Knight1", "Knight2", "BishopW", "BishopB", pawns]};

$(document).ready(function() {
    playField = document.getElementById("GameBoard");
    piecePlaces = document.getElementsByName("hLabels");
});


$('body').on('load', function setUpBoard() {
    for (var i = 0; i < playField.rows.cells.length; i++) {
        alert("In 1");
        for (pawns in peices[White]) {
            alert("in 2");
            var img = document.createElement("img");
            img.src = srces[5];
            var x = playField.rows[i].cells[2];
            $(piecePlaces).append(img);
        }
        for (pawns in peices[Black]) {
            alert("in 3");
            var img = document.createElement("img");
            img.src = srces[10];
            var x = playField.rows[i].cells[6];
            x.innerHTML = img;
            $(piecePlaces).append(img);
        }
    }
});