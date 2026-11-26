// higher order function to attach to asyncawait functions and handle errors
const handleError = (fn) => {
  return function (...params) {
    return fn(...params).catch((err) => {
      console.error("error caught!", err);
    });
  };
};

export { handleError };
