export function isNull(value) {
  return value === null;
}

export function isUndefined(value) {
  return value === undefined;
}

export function isEmpty(value) {
  return value === "";
}

export function isNUE(value) {
  return isNull(value) || isUndefined(value) || isEmpty(value);
}

export default {
  isNull,
  isUndefined,
  isEmpty,
  isNUE,
};
