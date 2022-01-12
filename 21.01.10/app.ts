// Superset of JS

let x:number;
x = 156;
let nme:string;

nme = "gkfl";

let ner:string = "abca";

// i = 0 , a => 

function lengthOfLongestSubstring(str: string):number{
    let result: number = 0;
    for(let i:number = 0; i < str.length; i++){
        let subString:string = str[i];
        let maxLength:number = subString.length;
        for(let j:number = i + 1; j < str.length; j++){
            if(eval("/[" + str[j] + "]/").test(subString)){
                break;
            } else {
                subString = subString.concat(str[j]);
            }
        }
        maxLength = subString.length;
        result = Math.max(result , maxLength);
        if(result > str.slice(i + 1).length){
            break;
        }
    }
    return result;
}

// let arr: Array<number> = []

// kglfjopk;lsfd