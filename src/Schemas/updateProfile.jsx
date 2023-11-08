import * as Yup from "yup";

 const updateSchema = Yup.object().shape({
    username: Yup.string().min(3).max(25).required("Please Enter Valid UserName"),
    name: Yup.string().min(3).max(25).required("Please Enter Name"),
    city: Yup.string()
    .min(5)
    .max(20)
    .required("Please Enter City"),
    number: Yup.string().min(10).max(15).required("Please Enter Number"),
    zip_code: Yup.string()
    .min(4)
    .max(20)
    .required("Please Enter Zip Code"),
    state: Yup.string()
    .min(5)
    .max(20)
    .required("Please Enter State"),
    country: Yup.string()
    .min(3)
    .max(20)
    .required("Please Enter Country"),

});
export default updateSchema;

