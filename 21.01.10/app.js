// Superset of JS
var x;
x = 156;
var nme;
nme = "gkfl";
var ner = "abca";
// i = 0 , a => 
function lengthOfLongestSubstring(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        var subString = str[i];
        var maxLength = subString.length;
        for (var j = i + 1; j < str.length; j++) {
            if (eval("/[" + str[j] + "]/").test(subString)) {
                break;
            }
            else {
                subString = subString.concat(str[j]);
            }
        }
        maxLength = subString.length;
        result = Math.max(result, maxLength);
    }
    return result;
}
// let arr: Array<number> = []
