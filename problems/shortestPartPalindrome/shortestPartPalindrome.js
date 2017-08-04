const checkPalindrome = (str) => {
    console.log(str === str.split('').reverse().join(''))
    return str === str.split('').reverse().join('');
}
var minCut = function(s) {
    if(!s){
        return '';
    }

    if(s.length === 1){
        return 0;
    }
    const getPaliPerms = (lastInd, currPalis = [], flag = 'curr') => {
        if((lastInd <= 0 || lastInd >= s.length) && currPalis.length){
            return [currPalis.length - 1, currPalis, s];
        }
        
        for(let i = 0; i <= lastInd; i++){
            let x = lastInd;
            let currSubstring = s.slice(i, lastInd)
            console.log(flag)
            if(checkPalindrome(currSubstring) && flag === 'curr'){
                return getPaliPerms(i, currPalis.concat(currSubstring), 'curr')
            } else {
                let secondString = s.slice(s.length - lastInd, s.length - i)
                if(checkPalindrome(secondString)){
                return getPaliPerms(i, currPalis.concat(secondString), 'sec')
                }
            }
        }
        return;
    }
    return getPaliPerms(s.length - 1)
};

