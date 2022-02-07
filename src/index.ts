import { add } from './add';
import { read } from './readlinePromise';

async function main()  {
    let input = await read('');
    if (input.substring(0, 2) == '//') {
        input += '\n' + await read('');
    }
    console.log(add(input));
    process.exit();
}

main();
