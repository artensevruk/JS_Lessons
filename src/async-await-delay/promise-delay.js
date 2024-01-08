import { delay } from "./delay.js";

export const promiseDelay = ms => {
  console.log('Use method .then');
  const startTime = Date.now();

  return delay(ms).then(() => {
    const passed = Date.now() - startTime;
    console.log(`Inside then. Time passed: ${passed}`);
  });
};
