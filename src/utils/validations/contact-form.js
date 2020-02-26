import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  website: yup
    .string()
    .url(),
  message: yup
    .string()
    .required(),
});