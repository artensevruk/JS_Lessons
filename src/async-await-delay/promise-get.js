import { delay } from "./delay.js";

export const promiseGet = ms =>
  delay(ms).then(() => 'value returned from then');
