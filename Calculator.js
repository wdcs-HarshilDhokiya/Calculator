// Calculator  

const readline = require("readline");

const calculate=(data)=>{
    var regexNum=/\d{1,}/g;
    var regexOp=/[/*+-]/g;
    var Num=data.match(regexNum);
    var operand = data.match(regexOp);
    // console.log(Num);
    // console.log(operand);
    
    for(let j=0;j<operand.length;j++){
        if("/"==operand[j]){
            var sum=Num[j]/Num[j+1];
            // console.log(Num[j]+'/'+Num[j+1])
            // console.log(sum);
            Num.splice(j,2,`${sum}`);
            operand.splice(j,1);
            // console.log(Num);
            // console.log(operand);
            j=-1;
        }
    }
    for(let j=0;j<Num.length;j++){
        if("*"==operand[j]){
            sum=Num[j]*Num[j+1];
            // console.log(Num[j]+'*'+Num[j+1])
            // console.log(sum);
            Num.splice(j,2,`${sum}`);
            operand.splice(j,1);
            // console.log(Num);
            // console.log(operand);
            j=-1;
        }
    } 
    for(let j=0;j<Num.length;j++){
        if("+"==operand[j]){
            sum=parseInt(Num[j])+parseInt(Num[j+1]);
            // console.log(Num[j]+'+'+Num[j+1])
            // console.log(sum);
            Num.splice(j,2,`${sum}`);
            operand.splice(j,1);
            // console.log(Num);  
            // console.log(operand);
            j=-1;
        }
    }
    for(let j=0;j<Num.length;j++){
        if("-"==operand[j]){
            sum=Num[j]-Num[j+1];
            // console.log(Num[j]+'-'+Num[j+1])
            // console.log(sum);
            Num.splice(j,2,`${sum}`);
            operand.splice(j,1);
            // console.log(Num);
            // console.log(operand);
            j=-1;
        }
    }
    console.log(`result : ${sum}`);      
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter input : ", function (answer) {
    calculate(`${answer}`);
    rl.close();
});

// calculate("2655*63546/4685*546+541+2455*4545/258+564-265*54654-25544-254545");






/* Notes :- 
1. For replace element from string : Str.replace('e','')
2. For convert string into intiger : parseInt(string[i]);
3. For get substracted string : Num=Num.substring(0,3)+"1"+Num.substring(4,Num.length)
4. For remove element from array : Num.splice(j,2,`${sum}`);
5. Regular Expression :
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    expected output: Array ["T", "I"]
*/