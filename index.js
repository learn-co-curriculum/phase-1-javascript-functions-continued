// code your solution here
function saturdayFun(x='roller-skate')
{
    let str=`This Saturday, I want to ${x}!`
    return str;
}



function mondayWork(activity='go to the office')
{
    let str=`This Monday, I will ${activity}.`;
    return str;
}


function wrapAdjective( style='*')
{
    
      return function one(job="hard worker") 
      {
          return `You are ${style}${job}${style}!`;
      } 
        
}

