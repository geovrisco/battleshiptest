

function generateBoard(){
    let board = []
    for (let i = 0; i < 11; i++){
        board.push([])
        for (let j = 0; j < 11 ; j++){
            if(j===0){
                switch(i){
                    case 0 :
                        board[i].push(' ')
                        break
                    case 1 :
                        board[i].push('A')
                        break
                    case 2 : 
                        board[i].push('B') 
                        break
                    case 3 :
                        board[i].push('C') 
                        break
                    case 4 :
                        board[i].push('D') 
                        break
                    case 5 :
                        board[i].push('E') 
                        break
                    case 6 : 
                    board[i].push('F') 
                        break
                    case 7 :
                        board[i].push('G') 
                        break
                    case 8 :
                        board[i].push('H') 
                        break
                    case 9:
                        board[i].push('I') 
                        break
                    case 10:
                        board[i].push('j') 
                        break


                }
                
            }else{
                board[i].push('*')
            }
        }
    }
    return board
}


console.table(generateBoard())