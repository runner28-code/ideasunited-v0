import { v4 as uuidv4 } from "uuid";

function objectToFormData(obj) {
  const formData = new FormData();

  const files = {};
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
}

export default (axios) => {
  const Datasources = {
    get: (params) => axios.get("/datasources", { params, jwt: true }),
  };

  const Page = {
    get: (params) => axios.get("/pages", { params, jwt: true }),
  };

  const Service = {
    zoomSignature: (params) =>
      axios.post("/services/zoom_signature", params, { jwt: true }),
  };

  const Submission = {
    get: (params) => axios.get("/submissions", { params, jwt: true }),
    create: (params) =>
      axios.post("/submissions", objectToFormData(params), {
        jwt: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent, additional) => {
          const loaded = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (additional?.onUploadProgress) {
            return additional.onUploadProgress(loaded);
          }
        },
      }),
  };

  const Support = {
    getForm: (params) => axios.get("/support/get_form", { params, jwt: true }),
    create: (params) =>
      axios.post("/support/create", objectToFormData(params), {
        jwt: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent, additional) => {
          const loaded = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (additional?.onUploadProgress) {
            return additional.onUploadProgress(loaded);
          }
        },
      }),
  };

  const User = {
    current: () => axios.get("/users/current", { jwt: true }),
    update: (params) => axios.put("/users", params, { jwt: true }),
  };

  const Project = {
    current: (params) => axios.get("/projects/current", { params, jwt: true }),
  };

  const Auth = {
    login: (params) => axios.post("/auth/login", params),
    register: (params) => axios.post("/auth/register", params),
    confirm: (params) => axios.post("/auth/confirm", params, { jwt: true }),
    tokenLogin: (params = {}) =>
      axios.post("/auth/token_login", params, { jwt: true }),
    sendConfirmationEmail: (params = {}) =>
      axios.post("/auth/send_confirmation_email", params, { jwt: true }),
    resetPassword: (params) => axios.post("/auth/reset_password", params),
    setPassword: (params) => axios.post("/auth/set_password", params),
    checkPasswordToken: (params) =>
      axios.post("/auth/check_password_token", params),
  };

  const Message = {
    query: (params) => axios.get("/messages", { params }),
    destroy: (id) => axios.delete(`/messages/${id}`, { jwt: true }),
    destroyAll: (params) => axios.delete(`/messages`, { params, jwt: true }),
    blockUser: (params) =>
      axios.delete(`/messages/block_user`, { params, jwt: true }),
  };

  const RegistrationForm = {
    submit: (params) =>
      axios.post("/registration_forms/submit", objectToFormData(params), {
        jwt: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent, additional) => {
          const loaded = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (additional?.onUploadProgress) {
            return additional.onUploadProgress(loaded);
          }
        },
      }),
    root: () => axios.get("registration_forms/root", {}),
  };

  const SubmissionForm = {
    get: (params) => axios.get("/submission_forms", { params, jwt: true }),
  };
  
  return {
    Datasources,
    User,
    Project,
    Auth,
    Page,
    Message,
    Submission,
    Support,
    Service,
    RegistrationForm,
    SubmissionForm,
  };
};
