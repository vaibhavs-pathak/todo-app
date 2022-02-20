export const prepareFormObject = (fields, isDirty = false, isValid = false) => ({
  fields: { ...fields },
  meta: {
    isDirty,
    error: "",
    isValid,
  },
});

export const evaluateFormData = (fields) => {
  const copyField = { ...fields };
  const fieldArr = Object.keys(copyField);
  let inputData = {};
  fieldArr.map((key) => {
    let objValue = (copyField[key] = copyField[key].value);
    return (inputData = { ...inputData, [key]: objValue });
  });
  return inputData;
};