function saturdayFun(activity= 'roller-skate') {
    return 'This Saturday, I want to ' + activity + '!'
}// code your solution here
saturdayFun();

function mondayWork(activity= 'go to the office') {
    return 'This Monday, I will ' + activity + '.'
}
mondayWork
();

function wrapAdjective(flair = "*"){
     return function (parameter = "special"){
        return 'You are ' + flair + parameter + flair + '!';
    };
    //return innerFunction();
}
