const chars = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
};
var isValid = (s) => {
    let i, j;
    let currOpen = [];
        for (i = 0; i < s.length; i++){
            //This means if it's NOT an opening Paren.
            if(!chars[s[i]]){
               let current = s[i];
               let lastPos = currOpen[currOpen.length -1];
               if(current === chars[lastPos]){
                   currOpen.pop();
               } else {
                   return false;
               }
            } else {
                currOpen.push(s[i]);
            }
    }
    if(currOpen.length > 0) {
        return false;
    } else {
        return true;
    }
};
isValid("()");