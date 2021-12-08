import { v4 as uuidv4 } from "uuid";

function objectToFormData(obj) {
  const formData = new FormData();

  const data = JSON.stringify(obj, function (key, value) {
    if (value instanceof File || value instanceof Blob) {
      const uuid = "file-" + uuidv4();
      files[uuid] = value;
      return uuid;
    }
    return value;
  });

  formData.append("data", data);

  Object.keys(files).forEach((k) => {
    formData.append(`files[${k}]`, files[k]);
  });
  return formData;
