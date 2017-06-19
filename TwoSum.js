//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

let nums = [2, 5, 5, 11]; //1,2
let target = 10;
let returnNum = [];

for(let first = 0; first < nums.length; first++){
    for(let second = 1; second < nums.length; second++){
        let tempSum = nums[first] + nums[second];
            if(tempSum === target){
                if(first === second){
                    continue;
                }
                returnNum.push(first);
                returnNum.push(second);

                return returnNum;
        } else {
            continue;
        }
    }
}
return returnNum;