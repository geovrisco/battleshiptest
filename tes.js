
//=================INI MAMA PAPAN=========================
function generateBoard(){
    let board = []
    for (let i = 0; i < 11; i++){
        board.push([])
        for (let j = 0; j < 11 ; j++){
            if(j===0 && i >0){
                switch(i){
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
                
            }else if (j>=0 && i==0){
                board[i].push(j)
            }
            
            else{
                board[i].push('~')
            }
        }
    }
    return board
}

//================================INI PAPAN====================
const papan = generateBoard()

//===============TES ADD CARIIER
const airCraftCarrier = {
    length:5,
    vertical:true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}
function cetakACC(){
    let orient = Math.floor(Math.random() * Math.floor(2)+1)
    if (orient===1){ // =====satu pengenny nyamping
        let startPrintbyI = Math.floor(Math.random() * 10) + 1 // mulai cetak I
        let startPrintbyJ = Math.floor(Math.random() * 6) + 1 // mulai cetak J
        papan[startPrintbyI][startPrintbyJ]='A'
        papan[startPrintbyI][startPrintbyJ+1]='A'
        papan[startPrintbyI][startPrintbyJ+2]='A'
        papan[startPrintbyI][startPrintbyJ+3]='A'
        papan[startPrintbyI][startPrintbyJ+4]='A'
    }else{   ///pengen kebawah
        let startPrintbyJ = Math.floor(Math.random() * 10) + 1 // mulai cetak I
        let startPrintbyI = Math.floor(Math.random() * 6) + 1 // mulai cet
        papan[startPrintbyI][startPrintbyJ]='A'
        papan[startPrintbyI+1][startPrintbyJ]='A'
        papan[startPrintbyI+2][startPrintbyJ]='A'
        papan[startPrintbyI+3][startPrintbyJ]='A'
        papan[startPrintbyI+4][startPrintbyJ]='A'
    }
}
cetakACC()

const battleship = {
    symbol:'B',
    length:4,
    
}

function cetakBS(){
    let orient = Math.floor(Math.random() * Math.floor(2)+1)
    let startPrintbyIhor = Math.floor(Math.random() * 10) + 1 
    let startPrintbyJhor= Math.floor(Math.random() * 6) + 1 


    let startPrintbyJVer = Math.floor(Math.random() * 10) + 1 // mulai cetak I
    let startPrintbyIVer = Math.floor(Math.random() * 6) + 1 // mulai cet
    if (papan[startPrintbyIhor][startPrintbyJhor]=='~' &&
        papan[startPrintbyIhor+1][startPrintbyJhor]=='~' &&
        papan[startPrintbyIhor+2][startPrintbyJhor]=='~' &&
        papan[startPrintbyIVer][startPrintbyJVer+1]=='~' &&
        papan[startPrintbyIVer][startPrintbyJVer+2]=='~'
            
    ){
        for (let i =0 ; i < battleship.length;i++){
            if (orient===1){ // =====satu pengenny nyamping
                papan[startPrintbyIhor][startPrintbyJhor+i]=battleship.symbol
            }else if (orient===2 ) {  ///pengen kebawah
                papan[startPrintbyIVer+i][startPrintbyJVer]=battleship.symbol
            }

        }
    }else{
        return cetakBS()
    }
    
}
cetakBS()

//=============

const cruiser = {
    length:3,
    vertical:false
}

const destroyer = {
    length:2,
    vertical:false
}



console.table(papan)
