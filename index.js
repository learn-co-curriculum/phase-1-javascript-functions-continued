function saturdayFun(activity="roller-skate") {
    return`This Saturday, I want to ${activity}!`
  }
  
  mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
  }
  
  function wrapAdjective(format="*") {
    return function(adjective="special") {
      return `You are ${format}${adjective}${format}!`
    }
  }