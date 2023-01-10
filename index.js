function saturdayFun(value){
    if (value == undefined){
        return "This Saturday, I want to roller-skate!";
    } else {
        return `This Saturday, I want to ${value}!`
    }
}


function mondayWork(value){
    if (value == undefined){
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${value}.`
    }
}

function wrapAdjective(value){
    return function (emphatic){
        return `You are ${value}${emphatic}${value}!`
    }
}

console.log(wrapAdjective("%")("a dedicated programmer"));