import { add } from './add';
import { read } from './readlinePromise';

async function main()  {
    console.log(add(await read('')));
    process.exit();
}

main();
