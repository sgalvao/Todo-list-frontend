import Input from "components/Input";
import TextArea from "components/TextArea";
import { useFormik } from "formik";
import { BsXCircle } from "react-icons/bs";
import * as S from "./styles";

import * as Yup from "yup";

interface FormValues {
  name: string;
  description: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: ({ name, description }: FormValues) => void;
}

export const AddTaskModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const initialValues = {
    name: "",
    description: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <S.Container isOpen={isOpen}>
      <S.CloseButton onClick={onClose}>
        <BsXCircle size={24} />
      </S.CloseButton>
      <S.Form onSubmit={formik.handleSubmit}>
        <Input
          type="name"
          name="name"
          label="Task Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
          onBlur={formik.handleBlur}
        />
        <TextArea
          name="description"
          label="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <S.Button>Create Task</S.Button>
      </S.Form>
    </S.Container>
  );
};
