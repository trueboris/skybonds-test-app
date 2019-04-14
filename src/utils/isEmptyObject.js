const isEmptyObject = object => {
  if (object instanceof Array) {
    return false;
  }

  return !object || !Object.keys(object).length;
};

export default isEmptyObject;
