var LongestCommon = (strs) => {
    var master = strs[0];
    if(strs.length === 1){
        return strs[0];
    }
    let currLongest = "";
    for (let i = 1; i < strs.length; i++){
        let currentWord = strs[i];
        if(currentWord[0] === master[0]){
            console.log("checking....");
           let commonPrefix = checkForPrefix(currentWord, master);
           console.log("done and the common is" + commonPrefix);
           if(commonPrefix.length > currLongest.length & currLongest !== ""){
               continue;
           }else {
               currLongest = commonPrefix;
            }
                
        }
        else {
            return "";
        }
    }
    return currLongest;
};
var checkForPrefix = (currentWord, master) => {
    let i = 0;
    var prefixString = "";
    while(currentWord[i]!==undefined & master[i]!==undefined & currentWord[i] === master[i]){
        prefixString += currentWord[i];
        i++;
    } 
    return prefixString;  
};
console.log(LongestCommon(["aaa", "aa", "aaa"]));