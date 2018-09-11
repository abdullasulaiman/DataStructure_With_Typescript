class SortingAlgorithm {
    

 static bubbleSort = (input:number[]) => {
  for(let i =0; i< input.length - 1; i++) {
    let change = false;
    for(let j =0; j < input.length - (i + 1 ); j++) {
      if(input[j] > input[j+1]) {
        change = true;
        [input[j], input[j +1 ]] = [input[j+1], input[j]];
      }
    }
    if(!change) break;
  }
  return input;
}

static quickSort = (input:number[]): number[] => {
  if(input.length < 2 ) return input;
  let pivot = input[Math.floor(Math.random() * input.length)];
  let left = [];
  let equal = [];
  let right = [];
  for(let element of input) {
    if(element > pivot ) right.push( element);
    else if(element < pivot) left.push(element);
    else equal.push(element);
  }
  return SortingAlgorithm.quickSort(left).concat(equal).concat(SortingAlgorithm.quickSort(right));
}

static radixSort = (data:any) => {
    const base = 10;
    let divider = 1;
    let maxVal = Number.NEGATIVE_INFINITY;

    while (divider <= maxVal || divider < base) {
        let buckets:number[][] = [ [], [], [], [], [], [], [], [], [], [] ];
        for (let val of data) {
            const positiveVal = Math.abs(val);
            buckets[Math.floor((positiveVal / divider) % base)].push(val);
            maxVal = positiveVal > maxVal ? positiveVal : maxVal;
        }
        data = [].concat.apply([], buckets);
        divider *= base;
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 0) {
            data.unshift(data.splice(i, 1)[0]);
        }
    }
    return data;
}
}

export default SortingAlgorithm;