// higher order function to attach to asyncawait functions and handle errors
const handleError = (fn) => {
  return function (...params) {
    return fn(...params).catch((err) => {
      const thisName = fn.name;

      if (err instanceof TypeError) {
        console.error(
          `TypeError caught by handleError in '${thisName}': ${err}`,
        );
      } else if (err instanceof SyntaxError) {
        // big assumption.. more than likely a query syntax error
        console.log("Bad query request: " + err);
      } else {
        throw err;
      }
    });
  };
};

export { handleError };
