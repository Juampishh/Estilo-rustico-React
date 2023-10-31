import * as Yup from "yup";
import { regEmail } from "../utils/regExp";
export const registerValidationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .matches(regEmail, "El email no es válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "El email no es válido")
    .required("El email es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});
