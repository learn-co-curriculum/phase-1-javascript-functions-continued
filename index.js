saturdayFun();
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adj='special') {
    let result = '*'
    return function () {
    let emphatic = "a hard worker"
    return (`You are ${result}${emphatic}${result}!`);
    };
};

function wrapAdjective(adj='special') {
    let result = '||'
    return function () {
    let emphatic = "a dedicated programmer"
    return (`You are ${result}${emphatic}${result}!`);
    };
};

