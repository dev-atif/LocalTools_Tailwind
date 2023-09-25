import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter First Name"),
  lastname: Yup.string().min(3).max(25).required("Please Enter last Name"),
  country_code: Yup.string()
    .min(3)
    .max(5)
    .required("Please Enter Country code"),
  number: Yup.string().min(10).max(12).required("Please Enter Number"),
  email: Yup.string().email().required("Please Enter Email"),
  pasword: Yup.string().min(6).required("Please Enter Pasword"),
  confirm_pasword: Yup.string()
    .required("Please Confirm your Pasword")
    .oneOf([Yup.ref("pasword"), null], "Pasword Does not Match"),
});

export const loginSchema =  Yup.object({
  email:Yup.string().email().required("Please Enter Email"),
  pasword:Yup.string().min(6).required("Please Enter Pasword")
})
