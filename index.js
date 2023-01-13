function saturdayFun(value){
   return value == undefined ? "This Saturday, I want to roller-skate!" : `This Saturday, I want to ${value}!`
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

console.log(saturdayFun());