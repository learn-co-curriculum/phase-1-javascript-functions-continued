function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(huh = '*') {
    return function inner(adj = 'special') {
       return `You are ${huh}${adj}${huh}!`

    }
}
