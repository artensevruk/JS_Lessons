import { asyncDelay } from "./async-delay.js";
import { asyncGet } from "./async-get.js";
import { promiseDelay } from "./promise-delay.js";
import { promiseGet } from "./promise-get.js";

const MS = 3500;

await asyncDelay(MS);
await promiseDelay(MS);

asyncGet(MS).then(value => {
  console.log(`Value inside then: '${value}'`);
});

const value = await promiseGet(MS);
console.log(`Value after await: '${value}'`);