const validateRequest = (requestBody) => {
  for (const [key, value] of Object.entries(requestBody)) {
    if (value === undefined || value === null || value === "") {
      return {
        result: false,
        message: `Please provide the ${key} form field in the request`,
      };
    }
  }
  return {
    result: true,
    message: "All fields valid.",
  };
};

export { validateRequest };
