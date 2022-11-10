# Project-1
Tic Tack Toe Game

1. First, a 3x3 boxes is presented

let 3x3 box = 

0 | 1 | 2
3 | 4 | 5
6 | 7 | 8

2. To start, need to have 2 player
3. Each player will be represented with a symbol
4. Use math random to determine who starts first
5. One player will choose which box to put their symbol
6. The other player will choose another box to put their symbol

document.querySelector.box.addEventListener('click', function () {
		add symbol to box
	}


7. If player has boxNum combination of:
> (column.length <=3, row.length <=3, diagonal.length <=3)

- 0,3,6
- 1,4,7
- 2,5,8
> let column = [boxNum && boxNum+3 && boxNum+6]

- 0,1,2
- 3,4,5
- 6,7,8
> let row = [boxNum && boxNum+1 && boxNum+2]

- 0,4,8
- 2,4,6
> let diagonal = [boxNum % 2 = 0]

then they win. showResult( Win! ); and 
Else they lose. showResult( Lose! );

8. If all cells are filled and no winner, showResult( Draw ! );


9. Update score board
playerScore () {
	if win, then player score +=1;
	if lose, then -=1 , Math.abs()
	}

10. To quit, click button to restartGame ();

![image](https://media.git.generalassemb.ly/user/44944/files/686239ef-29fc-4819-98f7-c0588b6cf0c1)

