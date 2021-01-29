function getSum (a, b) {
    if (a === b) {
        return a;
    }
    else {
        function range(start, end) {
            return Array(end - start + 1). fill(). map((_, idx) => start + idx)
        }
        var arrayRanged = range(a, b);

        var sum = arrayRanged.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum;
    }
}