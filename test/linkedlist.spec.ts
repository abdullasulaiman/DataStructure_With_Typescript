import LinkedList from "../src/datastructure/linked-list/LinkedList";

describe(('LinkedList class Test'), () => {
    let linkedList:LinkedList<number>;
    beforeEach(() => {
        linkedList = new LinkedList();
    })
    test('Test append', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.size()).toEqual(2);
    })
    test('Test removeAt', () => {
        linkedList.append(1);
        linkedList.append(2);
        const result = linkedList.removeAt(1);
        expect(result).toEqual(2);
    })
    test('Test insert', () => {
        linkedList.append(1);
        const head = linkedList.getHead();
        console.log('head ', head);
    })
})