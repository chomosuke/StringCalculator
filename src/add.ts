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
    const nums = str.split(delimiter).map(n => { 
        const num = parseInt(n);
        return num >= 1000 ? 0 : num;
    });
    const neg = nums.filter(n => n < 0);
    if (neg.length > 0) {
        throw new Error('Negatives not allowed: ' + neg.join(', '));
    }
    return nums.reduce((p, c) => p + c);
}
