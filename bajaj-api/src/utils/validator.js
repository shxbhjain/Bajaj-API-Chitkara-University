export const validateSingleKey = (body) => {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    const error = new Error("Request body must be a valid JSON object");
    error.status = 400;
    throw error;
  }

  const allowedKeys = ["fibonacci", "prime", "lcm", "hcf", "AI"];

  const keys = Object.keys(body);
  const validKeys = keys.filter(key => allowedKeys.includes(key));

  if (validKeys.length === 0) {
    const error = new Error("No valid key provided");
    error.status = 400;
    throw error;
  }

  if (validKeys.length > 1) {
    const error = new Error("Multiple keys provided; only one allowed");
    error.status = 400;
    throw error;
  }

  return validKeys[0];
};
