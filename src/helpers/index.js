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
/* old versions without loadash 
export const deepCopy = (state) => {
  return Array.isArray(state) || (typeof state === "object" && state !== null)
    ? JSON.parse(JSON.stringify(state))
    : state;
};
// use this when you want to make a shallow copy of a state :
export const shallowCopy = (state) => {
  return Array.isArray(state)
    ? [...state]
    : typeof state === "object" && state != null
    ? { ...state }
    : state;
};
# problem solved after updating ?
functions, undefined values, special objects and keys that use symbols are going to be ignored using JSON.stringify()
*/
