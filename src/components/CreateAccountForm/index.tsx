import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as S from "./styles";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "graphql/mutations/user";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Input from "components/Input";

interface FormValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  avatarId: number;
}

const CreateAccount = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    avatarId: 1,
  };

  const route = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
    email: Yup.string()
      .email("Email Inválido")
      .required("Este campo é obrigatório"),
    password: Yup.string().required("Este campo é obrigatório"),
    confirmPassword: Yup.string()
      .when("password", {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "As senhas precisam ser iguais"
        ),
      })
      .required("Este campo é obrigatório"),
  });

  const [createAccount, { loading }] = useMutation(CREATE_USER);

  const handleCreateAccount = async (data: FormValues) => {
    try {
      const userInput = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await createAccount({
        variables: {
          user: userInput,
        },
      });

      await signIn<"credentials">("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "",
      });

      toast.success("Conta criada com sucesso!", {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return route.push("/");
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore figure how to properly type this

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore figure how to properly type this
      toast.error(error.message, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleCreateAccount,
  });

  return (
    <S.Container>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title> ==== Create account ====</S.Title>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          touched={formik.touched.email}
          onBlur={formik.handleBlur}
        />
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
          touched={formik.touched.name}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          onBlur={formik.handleBlur}
        />
        <S.Button type="submit" disabled={loading}>
          Create Account
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default CreateAccount;
