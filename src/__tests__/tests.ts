import { add } from "../main";

describe('add tests', () => {
    test('empty string returns 0', () => {
        expect(add('')).toStrictEqual(0);
    });

    test('num string return the number', () => {
        expect(add('1')).toStrictEqual(1);
        expect(add('3')).toStrictEqual(3);
    });

    test('add two numbers', () => {
        expect(add('1,2')).toStrictEqual(3);
        expect(add('3,5')).toStrictEqual(8);
    });

    test('add any numbers', () => {
        expect(add('1,2,3')).toStrictEqual(6);
        expect(add('3,5,3,9')).toStrictEqual(20);
    });

    test('line breaks and commas are the same', () => {
        expect(add('1,2\n3')).toStrictEqual(6);
        expect(add('3\n5\n3,9')).toStrictEqual(20);
    });
});