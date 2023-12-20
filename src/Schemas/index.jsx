import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(3).max(25).required("Please Enter First Name"),
  lastname: Yup.string().min(3).max(25).required("Please Enter last Name"),
  country_code: Yup.string()
    .min(3)
    .max(5)
    .required("Please Enter Country code"),
  number: Yup.string().min(10).max(12).required("Please Enter Number"),
  email: Yup.string().email().required("Please Enter Email"),

  pasword: Yup.string().required("Please enter your Password"),
  confirm_pasword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Does not Match")
    .required("Please confirm your Password"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  pasword: Yup.string().min(6).required("Please Enter Pasword"),
});
