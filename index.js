// code your solution here
// js

function saturdayFun(activity = "roller-skate") {
    // done by 'ear' testing
    return `This Saturday, I want to ${activity}!`;
}

// function mondayWork(activity = "go to the office") {
//     return `This Monday, I will ${activity}.`;
// }

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function innerFunction(quality = "special") {
        return `You are ${flair}${quality}${flair}!`;
    }
}
