import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import * as S from "./styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Input from "../Input";

interface FormValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Usuário Inválido")
    .required("Este campo é obrigatório"),
  password: Yup.string().required("Este campo é obrigatório"),
});

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async ({ email, password }: FormValues) => {
    setIsLoading(true);

    const result = await signIn<"credentials">("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: `${window.location.origin}${
        router.query?.callbackUrl || "/"
      }`,
    });

    if (result?.error) {
      setIsLoading(false);
      return setLoginError(result?.error);
    }

    if (result?.url) {
      setIsLoading(false);
      return router.push(result.url);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <S.Container>
      <S.Form onSubmit={formik.handleSubmit} autoComplete="">
        <Input
          name="email"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
        />
        {loginError && <S.Error>{loginError}</S.Error>}
        <S.Button type="submit" disabled={!formik.validateForm}>
          {!isLoading ? "Entrar" : <S.Spinner />}
        </S.Button>
      </S.Form>
      <S.CreateAccountButton
        onClick={() => router.push("/auth/create-account")}
      >
        Create Account
      </S.CreateAccountButton>
    </S.Container>
  );
};

export default LoginForm;
