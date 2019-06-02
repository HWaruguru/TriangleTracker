var sides = function(a, b, c) {
    if (a === b === c) {
        return "equilateral";
    } else if (a === b || c === a || b === c) {
        return "isosceles";
    } else if (a !== b !== c) {
        return "scalene";
    } else {
        return "not a triangle";
    }


}