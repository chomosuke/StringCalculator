
export function add(str: string): number {
    if (str == '') {
        return 0;
    }
    return str.split(/[,\n]/i).map(n => parseInt(n)).reduce((p, c) => p + c);
}
