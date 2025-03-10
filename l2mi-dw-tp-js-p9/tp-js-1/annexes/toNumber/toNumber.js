function toNumber(s) {
    if (typeof s !== "string" || s.length === 0) {
        return NaN; 
    }

    let isNegative = false;
    let startIndex = 0;
    let result = 0;

    if (s.charAt(0) === '-') {
        isNegative = true;
        startIndex = 1;
    } else if (s.charAt(0) === '+') {
        startIndex = 1;
    }

    for (let i = startIndex; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (charCode < 48 || charCode > 57) {
            return NaN; 
        }

        result = result * 10 + (charCode - 48); 
    }

    return isNegative ? -result : result; 
}
