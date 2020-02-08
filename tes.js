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
//===========================cetak BATTLESHIP======================================

function cetakBS(){
    let orient = Math.floor(Math.random() * Math.floor(2)+1)
    let startPrintbyIhor = Math.floor(Math.random() * 10) + 1 
    let startPrintbyJhor= Math.floor(Math.random() * 6) + 1 
    let startPrintbyJVer = Math.floor(Math.random() * 10) + 1 // mulai cetak I
    let startPrintbyIVer = Math.floor(Math.random() * 6) + 1 // mulai cet
    if (papan[startPrintbyIhor][startPrintbyJhor]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+1]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+2]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+3]=='~' &&
    papan[startPrintbyIVer+1][startPrintbyJVer]=='~' &&
    papan[startPrintbyIVer+2][startPrintbyJVer]=='~' &&
    papan[startPrintbyIVer+3][startPrintbyJVer]=='~'
    ){
        for (let i =0 ; i < battleship.length;i++){
            if (orient===1 && papan[startPrintbyIhor][startPrintbyJhor+i]!==undefined){ // =====satu pengenny nyamping
                papan[startPrintbyIhor][startPrintbyJhor+i]=battleship.symbol
            }else{  ///pengen kebawah
                papan[startPrintbyIVer+i][startPrintbyJVer]=battleship.symbol
            }

        }
    }else{
        return cetakBS()
    }
    
}

//============================CETAK CRUISER=============================================================

const cruiser = {
    length:3,
    symbol:'C',
    vertical:false
}


function cetakCr(){
    let orient = Math.floor(Math.random() * Math.floor(2)+1)
    let startPrintbyIhor = Math.floor(Math.random() * 10) + 1 
    let startPrintbyJhor= Math.floor(Math.random() * 6) + 1 
    let startPrintbyJVer = Math.floor(Math.random() * 10) + 1 // mulai cetak I
    let startPrintbyIVer = Math.floor(Math.random() * 6) + 1 // mulai cet
    if (papan[startPrintbyIhor][startPrintbyJhor]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+1]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+2]=='~' &&
    papan[startPrintbyIVer+1][startPrintbyJVer]=='~' &&
    papan[startPrintbyIVer+2][startPrintbyJVer]=='~' 
    ){
        for (let i =0 ; i < cruiser.length;i++){
            if (orient===1 && papan[startPrintbyIhor][startPrintbyJhor+i]!==undefined){ // =====satu pengenny nyamping
                papan[startPrintbyIhor][startPrintbyJhor+i]=cruiser.symbol
            }else{  ///pengen kebawah
                papan[startPrintbyIVer+i][startPrintbyJVer]=cruiser.symbol
            }

        }
    }else{
        return cetakCr()
    }
    
}

//============================CETAK DESTROYR================================================================================


const destroyer = {
    symbol:'D',
    length:2,
    vertical:false
}
function cetakDr(){
    let orient = Math.floor(Math.random() * Math.floor(2)+1)
    let startPrintbyIhor = Math.floor(Math.random() * 10) + 1 
    let startPrintbyJhor= Math.floor(Math.random() * 6) + 1 
    let startPrintbyJVer = Math.floor(Math.random() * 10) + 1 // mulai cetak I
    let startPrintbyIVer = Math.floor(Math.random() * 6) + 1 // mulai cet
    if (papan[startPrintbyIhor][startPrintbyJhor]=='~' &&
    papan[startPrintbyIhor][startPrintbyJhor+1]=='~' &&
    papan[startPrintbyIVer+1][startPrintbyJVer]=='~' 
    ){
        for (let i =0 ; i < destroyer.length;i++){
            if (orient===1 && papan[startPrintbyIhor][startPrintbyJhor+i]!==undefined){ // =====satu pengenny nyamping
                papan[startPrintbyIhor][startPrintbyJhor+i]=destroyer.symbol
            }else{  ///pengen kebawah
                papan[startPrintbyIVer+i][startPrintbyJVer]=destroyer.symbol
            }

        }
    }else{
        return cetakDr()
    }
    
}



cetakCr()
cetakBS()
cetakDr()
console.log(papan)

let input = process.argv.splice(2)
let coordinates=[]

function getCoordinate (input){
    let transAlpha =['0','A','B','C','D','E','F','G','H','I','J']
    let transCoord=[]
    for (let i = 0; i < input.length; i++){
        // console.log(input[i])
        for (let j =0; j<transAlpha.length;j++)
        if(input[i][0]===transAlpha[j]){
            transCoord.push([j+input[i][1]])
        }
    
    }
    // console.log(transCoord)
    return transCoord
}
let kordinat = getCoordinate(input)
console.log(kordinat)

function tembak(kordinat){
    let kenaKomandan=0
    let geserDikitKomandan=0
    for (let i = 0; i < kordinat.length ; i++){
        let tembakI = kordinat[i][0][0] 
        let tembakJ = kordinat[i][0][1]  
        // console.log(tembakI,'ini tembak i')
        if (papan[tembakI][tembakJ]==='A'){
            kenaKomandan+=1
            papan[tembakI][tembakJ]='X'
            console.log('Mantul! Air Craft Carrier Musuh Tenggelam')
        }else if (papan[tembakI][tembakJ]==='B'){
            kenaKomandan+=1
            papan[tembakI][tembakJ]='X'
            console.log('Mantul! Battleship Musuh Tenggelam')
        }else if (papan[tembakI][tembakJ]==='C'){
            kenaKomandan+=1
            papan[tembakI][tembakJ]='X'
            console.log('Mantul! Cruiser  Musuh Tenggelam')
        }else if (papan[tembakI][tembakJ]==='D'){
            kenaKomandan+=1
            papan[tembakI][tembakJ]='X'
            console.log('Mantul! Destroyer  Musuh Tenggelam')
        }else{
            geserDikitKomandan +=1
            papan[tembakI][tembakJ]='O'
        }
    }
    console.log('============================MAP REVEAL============================')
    console.log(papan)
    console.log('===========================LAPOR NDAN!============================')
    console.log(`kena Komandan!! : ${kenaKomandan}`)
    console.log(`Ga Kena Komandan!! : ${geserDikitKomandan}`)

}

tembak(kordinat)

