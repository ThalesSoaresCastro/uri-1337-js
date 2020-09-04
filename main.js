let input = require('fs').readFileSync('./input.txt','utf8');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

const hand = (arr) =>{
    if(arr[0] === arr[1] && arr[1] === arr[2])
        return 0;
    else if (arr[0] === arr[1] || arr[1] === arr[2])
        return 1;
    else
        return -1;
};

lines.forEach(line => {
    let [ hand_set, hand_par ] = [false, false];

    //ordenando os valores para que o par, se caso houver, fique em 1 e 2 ou 2 e 3...
    line = line.split(' ').sort();
    if(line != '0 0 0' && parseInt(line[0]) > 0 && parseInt(line[2]) <= 13){
        const value = hand(line);

        if(value === -1){
            console.log('1 1 2');
        }
        else{
            value === 0 ? hand_set = true : hand_par  = true;
            if(hand_set){
                //set se for set de 13, não é derrotado...
                //se for menor que 13, o set que derrota são os valores do set atual +1.
                if(line[0] === '13'){
                    console.log('*');
                }else{
                    console.log(`${parseInt(line[0])+1} ${parseInt(line[0])+1} ${parseInt(line[0])+1}`);
                }
            }
            else if(hand_par){
                //se é par:
                //se p1 == p2....
                if(line[0] === line[1]){
                    if(line[2] === '13'){
                        console.log(`1 ${parseInt(line[0])+1} ${parseInt(line[0])+1}`);
                    }else{
                        console.log(`${line[0]} ${line[0]} ${parseInt(line[2])+1}`);
                    }
                }
                //se não p2 == p3...
                else{
                    //caso p2 = 13, então p3 ==13
                    //logo só um set derrota a mão com o par 13 13...
                    if(line[2] === '13'){
                        if(line[0] === '12'){
                            console.log('1 1 1');
                        }else{
                            console.log(`${parseInt(line[0])+1} ${line[1]} ${line[1]}`);
                        }
                    }else{
                        if(parseInt(line[0])+1 === parseInt(line[1])){
                            console.log(`${line[1]} ${line[1]} ${parseInt(line[0])+2}`);
                        }else{
                            //caso de empate
                            //retorna o par emparelhado e a não emparelhada+1
                            console.log(`${parseInt(line[0])+1} ${line[1]} ${line[1]}`);
                        }
                    }
                }
            }
        }
    }
});