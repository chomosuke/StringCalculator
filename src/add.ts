export function add(str: string): number {
    if (str == '') {
        return 0;
    }

    let delimiter: RegExp | string = /[,\n]/i;
    
    if (str.length >= 2 && str.substring(0, 2) == '//') {
        const firstBreak = str.indexOf('\n');
        delimiter = str.substring(2, firstBreak);
        str = str.substring(firstBreak + 1);
    }
    return str.split(delimiter).map(n => parseInt(n)).reduce((p, c) => p + c);
}
