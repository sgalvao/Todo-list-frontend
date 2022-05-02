import Input from "components/Input";
import { useFormik } from "formik";
import * as S from "./styles";

import * as Yup from "yup";

interface Props {
  onSubmit: (values: FormProps) => void;
}

interface FormProps {
  name: string;
}

export const AddProject = ({ onSubmit }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(18, "Name must be less than 18 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <S.Container>
      <S.Title>Add New Project</S.Title>
      <S.Form onSubmit={formik.handleSubmit}>
        <Input
          type="name"
          name="name"
          placeholder="Project name"
          label="Project Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          maxLength={18}
        />
        <S.Button type="submit">Add Project</S.Button>
      </S.Form>
    </S.Container>
  );
};
