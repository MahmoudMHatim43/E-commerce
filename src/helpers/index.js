import { cloneDeep, clone } from "lodash";
// use this when you want to make a deep copy of a state :
export const deepCopy = (state) => {
  return Array.isArray(state) || (typeof state === "object" && state !== null)
    ? cloneDeep(state)
    : state;
};
// use this when you want to make a shallow copy of a state :
export const shallowCopy = (state) => {
  return Array.isArray(state) || (typeof state === "object" && state !== null)
    ? clone(state)
    : state;
};
