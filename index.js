const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork("work from home")); 
console.log(mondayWork());

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog")); 

function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars("a hard worker")); 

const wrapWithPipes = wrapAdjective('||');
console.log(wrapWithPipes("a dedicated programmer")); 
