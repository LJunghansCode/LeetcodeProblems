//Given a string, find the length of the longest substring without repeating characters.
 var s = "abcabcbb"
 var max = 0;
    var str = '';
    var i = 0;
    var cache = [];
    
    while (i < s.length) {
        if (cache[s[i]]) {
            if (str.length > max) {
                max = str.length;
            }

            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }

        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
        }
    }
    
    if (str.length > max) {
        max = str.length;
    }
    
  return max;