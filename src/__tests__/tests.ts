import { add } from "../main";

describe('add tests', () => {
    test('empty string returns 0', () => {
        expect(add('')).toStrictEqual(0);
    });

    test('num string return the number', () => {
        expect(add('1')).toStrictEqual(1);
        expect(add('3')).toStrictEqual(3);
    });
});