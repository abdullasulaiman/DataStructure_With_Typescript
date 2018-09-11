import SortingAlgorithm from '../src/sortingalgorithm/SortingAlgorithm';
describe("Test Cases", () => {
    test(" Bubble Sort Algorithm Test", () => {
        const inputArray:number[] = [9, 8, 3, 7, 2];
        const sortedArray = SortingAlgorithm.bubbleSort(inputArray);
        expect([ 2, 3, 7, 8, 9 ]).toEqual(sortedArray);
    })

    test("Quick Sort Algorithm Test", () => {
        const inputArray:number[] = [9, 8, 3, 7, 2];
        const sortedArray = SortingAlgorithm.quickSort(inputArray);
        expect([ 2, 3, 7, 8, 9 ]).toEqual(sortedArray);
    })

    test("Radix Sort Algorithm Test", ()=> {
        var inputArray = [ 331, 454, 230, 34, 343, 45, 59, 453, 345, 231, 9 ];
        const sortedArray = SortingAlgorithm.radixSort(inputArray);
        expect([ 9, 34, 45, 59, 230, 231, 331, 343, 345, 453, 454 ]).toEqual(sortedArray);
    })
});