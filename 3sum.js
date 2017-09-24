//Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

var deDupeArrays = (arrList) => {
    var uniqueCombos = [];
    let newCombo;
    let toBeSplice =[];
    
    for(let i = 0; i < arrList.length; i++){
        console.log("*******");
         newCombo = {};
        for(let k = 0; k < 3; k++){
            newCombo[arrList[i][k]] = arrList[i][k];
        }
          uniqueCombos.push(newCombo);
    }
    
    for(let i = 0; i < arrList.length; i++){
        for(let k = 0; k < uniqueCombos.length; k++){
            if(uniqueCombos[k][arrList[i][0]] === 0 &&uniqueCombos[k][arrList[i][1]] === 0&&uniqueCombos[k][arrList[i][2]] === 0){
                     toBeSplice.push(i);
               
            }
            console.log(uniqueCombos);
            if(uniqueCombos[k][arrList[i][0]] && uniqueCombos[k][arrList[i][1]] && uniqueCombos[k][arrList[i][2]]){
                
                console.log('here');
                toBeSplice.push(i);
            }
        }
            
    }
    
    for(let i = 0; i < toBeSplice.length; i++){
        if(arrList.length !== 1){
            arrList.splice(toBeSplice[i - 1], 1);  
        }
    }
    return arrList;
};
var threeSum = (nums) => {
    var allcombos = [];
   for(let i = 0; i < nums.length; i++){
       for(let k = i + 1; k < nums.length; k++){
           for(let j = k + 1; j < nums.length; j++) {
              if(nums[i] + nums[k] + nums[j] === 0) {
                  let zCombo = [nums[i], nums[k], nums[j]];
                  allcombos.push(zCombo);
              }
           }
       }

   }
  let deduped =  deDupeArrays(allcombos);
  console.log(deduped);
  console.log('overabove');
  
};
threeSum([-1,0,1,0]);