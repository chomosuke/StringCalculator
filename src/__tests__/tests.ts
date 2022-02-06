import { add } from "../main";

describe('add tests', () => {
    test('empty string returns 0', () => {
        expect(add('')).toStrictEqual(0);
    })
});