//your code here
let expression = "";

let ansBox = document.getElementById("input");

function solve(e){
    

    if(e === 'answer'){

        let res = eval(expression);
        console.log(res);
        ansBox.value = res;

    }else if(e === 'clear'){

        expression = "";
        ansBox.value = "";

    }else{
        expression += e;
        console.log(e);
        // console.log(expression);
        ansBox.value = expression;
    }

}