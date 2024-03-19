// code your solution here
function saturdayFun(opt="roller-skate"){
  return `This Saturday, I want to ${opt}!`;
}
saturdayFun("bathe my dog");

function mondayWork(opt="go to the office"){
    return `This Monday, I will ${opt}.`;
}

function wrapAdjective(adjective="*"){
    const innerFunction= function (parameter="special"){
        return `You are ${adjective}${parameter}${adjective}!`;
    };
    return innerFunction
}
