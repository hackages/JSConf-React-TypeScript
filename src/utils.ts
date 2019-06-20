export const convertToMetric = (value, type) => {
  if (value && typeof value === "number" && type) {
    if (type === "speed") {
      return Math.floor(value * 1.61);
    }
    if (type === "weight") {
      return Math.floor(value * 0.454);
    }
  } else return "N/A";
};

export const convertToEuro = value => {
  return value ? Math.floor(value * 0.880698) : "N/A";
};
