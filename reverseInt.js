//Reverse int, return the int reversed. Return 0 if > 32 bit. 

var reverse = function(x) {
    var reversed = "",
    isNegative;
    if(x < 0) {
        isNegative = true;
    }
    x = x.toString();
    let lastElement = x.length -1;
    for(var i = lastElement; i >= 0; i--){
        if(x[i] === "-"){
            continue;
        }
        if(x[i]){
            reversed += x[i];
        }
    }
    reversed = parseInt(reversed);

    if(isNegative){
        reversed = reversed * -1;
    }
    if(reversed > 2147483647){
        return 0;
    }else {
      return reversed;  
    }
    
};
reverse(-987654321);