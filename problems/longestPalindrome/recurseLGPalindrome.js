const checkPalindrome = (str) => {
    let letterSet = new Set();
    
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        if(str.charAt(i) !== str.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
var partition = function(s) {
    if(!s){
        return '';
    }
    let longest = 0;
    let lgPali = '';
    const getPaliPerms = (startInd = 0) => {
        if(startInd >= s.length){
            return;
        }
        
        for(let i = startInd + 1; i <= s.length; i++){
            let currSubstring = s.slice(startInd, i)
            if(currSubstring.length + (s.length - i) < longest){
                return;
            }
            if(checkPalindrome(currSubstring)){
                if(currSubstring.length > longest){
                    longest = currSubstring.length;
                    lgPali = currSubstring;
                }
                getPaliPerms(i)
            } 
        }
        return;
    }
    getPaliPerms(0)
    return [lgPali, longest];
};
