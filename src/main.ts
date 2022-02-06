
export function add(str: string): number {
    if (str == '') {
        return 0;
    }
    return str.split(',').map(n => parseInt(n)).reduce((p, c) => p + c);
}