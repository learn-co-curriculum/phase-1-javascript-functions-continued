// code your solution here
function saturdayFun(activity){
        if (activity == undefined) {
            return `This Saturday, I want to roller-skate!` 
        }
        else {
        return `This Saturday, I want to ${activity}!`
}
}

const mondayWork = function(activity2){
    if (activity2 == undefined) {
        return "This Monday, I will go to the office.";
    }
    else {
        return `This Monday, I will ${activity2}.`;
    }
}

function wrapAdjective(Flair='*'){
    return function inner(adjective="special"){
        return (`You are ${Flair}${adjective}${Flair}!`)
    }
}