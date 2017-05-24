//Global

var size = 100;

var board=[];

function makeBoard(){
   for(var i=0;i<size;i++){
	  board[i]= [];
  }   
}
function fillBoard(){
   for(var i =0;i<size;i++){
   	 for(var j=0;j<size;j++){
   	 	if(Math.random() >=0.8 )
   	 		board[i][j]=1;
   	 	else
   	 		board[i][j]=0;
   	 }
   }
}
function canvasBoard(){
	var canvas= document.getElementById("myCanvas");
	var context= canvas.getContext("2d");
	context.clearRect(0, 0, 400, 400);
    for(var i =0;i<size;i++){
   	   for(var j=0;j<size;j++){
         if (board[i][j]===1){
         	context.fillStyle= "#000000";
            context.fillRect(4*i,4*j,4,4);
            console.log(i,j);
         }
   	   }
   	}

}
// Run Functions
makeBoard();
fillBoard();
canvasBoard();
// function cell (board){

// 	this.x=board.x;
// 	this.y=board.y;
// 	this.state= false;

// }