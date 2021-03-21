// Your code here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun("walk the dog");

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}
mondayWork('work from home')

function result(symbol, emphatic, wrapAdjective) {
    if (symbol === ('*')) {
        emphatic = ("a hard worker");
    }
   else if (symbol === '||') {
        emphatic = "a dedicated programmer";
    }
    else {
       symbol = "going to need";
        emphatic = "try again";
    }    
    return(`You are ${symbol}${emphatic}${symbol}!`);
    }
console.log(result('||'))

function wrapAdjective(symbol) {
    function result() {
        if (symbol === '*') {
            return("You are *a hard worker*!")
        }
        else if (symbol === '||') {
            return("You are ||a dedicated programmer||!")
        }
        else {
            return("You are *a hard worker*!")
        }

    } 
    return(result)
}
