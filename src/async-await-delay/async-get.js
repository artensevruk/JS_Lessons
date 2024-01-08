import { delay } from "./delay.js";

export const asyncGet = async ms => {
  await delay(ms);
  return 'value returned after await';
};
