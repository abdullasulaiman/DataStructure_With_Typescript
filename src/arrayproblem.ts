class ArrayProblem {
    // Find the minimum distance between two numbers
    // [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3]
    // x - 3, y = 6 
    // distance is 4
    // do a outer loop and inner loop and check
    // outloop i and j value with x and y and vice and versa
    // and check the previous min_dist is greater than i - j to set 
    // the minimum distance again
    minDist (arr, n, x, y ) {
        var i, j;
        var min_dist = Number.MAX_VALUE;
        for(i = 0 ; i < n; i++ ) {
            for(j = i; j <n ; j++) {
                if(( x === arr[i] && y === arr[j] ||
                   y === arr[i] && x === arr[j] ) && min_dist > Math.abs(i-j)) {
                    min_dist = Math.abs(i - j );
                }
                
            }
        }
        return min_dist;
    }
}