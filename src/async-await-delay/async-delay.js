import { delay } from "./delay.js";

export const asyncDelay = async ms => {
  console.log('Use await keyword');

  const startTime = Date.now();

  await delay(ms);
  const passed = Date.now() - startTime;
  console.log(`After await. Time passed: ${passed}`);
};
