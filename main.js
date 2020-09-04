var input = require('fs').readFileSync('./input.txt','utf8')
var lines = input.split('\n');

const hand = (arr) =>{
    if(arr[0] === arr[1] && arr[1] === arr[2])
        return 0;
    else if (arr[0] === arr[1] || arr[1] === arr[2])
        return 1;
    else
        return -1;

}

lines.forEach(line => {
    let [ set, par ] = [false, false];

    line = line.split(' ').sort();
    if(line != '0 0 0' && parseInt(line) != 0){
        const value = hand(line)

        if(value === -1){
            console.log('1 1 2');
            return 
        }
        else{
            value === 0 ? set = true : par = true;
            if(set){
                if(line[0] === '13'){
                    console.log('*');
                }else{
                    console.log(`${parseInt(line[0])+1} ${parseInt(line[0])+1} ${parseInt(line[0])+1}`);
                }
            }
            else if(par){
                if(line[0] === line[1]){
                    if(line[2] === '13'){
                        console.log(`1 ${parseInt(line[0])+1} ${parseInt(line[0])+1}`);
                        return
                    }else{
                        console.log(`${line[0]} ${line[0]} ${parseInt(line[2])+1}`);
                    }
                }
                else{
                    if(line[2] === '13'){
                        if(line[0] === '12'){
                            console.log('1 1 1');
                        }else{
                            console.log("#")
                            console.log(`${parseInt(line[0])+1} ${line[1]} ${line[1]}`);
                        }
                    }else{
                        if(parseInt(line[0])+1 === parseInt(line[1])){
                            console.log(`${line[1]} ${line[1]} ${parseInt(line[0])+2}`);
                        }else{
                            console.log(`${parseInt(line[0])+1} ${line[1]} ${line[1]}`);
                        }
                    }
                }
            }
        }
    }


})