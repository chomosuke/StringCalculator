export function add(str: string): number {
    if (str == '') {
        return 0;
    }

    let delimiters: string[] = [
        ',',
        '\n',
    ];
    
    if (str.length >= 2 && str.substring(0, 2) == '//') {
        const firstBreak = str.indexOf('\n');
        const delimiterStr = str.substring(2, firstBreak);
        str = str.substring(firstBreak + 1);
        if (delimiterStr.length > 1 && delimiterStr[0] == '[' && delimiterStr[delimiterStr.length - 1] == ']') {
            delimiters = delimiterStr.substring(1, delimiterStr.length - 1).split('][');
        } else {
            delimiters = [delimiterStr];
        }
    }

    const delimiter = delimiters[0];

    delimiters = delimiters.slice(1);
    for (const temp of delimiters) {
        str = str.split(temp).join(delimiter);
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
