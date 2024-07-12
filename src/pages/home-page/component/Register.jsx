import { useState } from "react";
import RegisterForm from "../../../features/admin/component/RegisterForm";
import HeardText from "../../../components/HeardText";
import validateCreateHn from "../../../features/admin/validate/validate-hn";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import userApi from "../../../apis/user";
import { useNavigate } from "react-router-dom";

const initialInput = {
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    nationality: "",
    drugAllergies: "",
    address: "",
    phone: "",
    email: "",
  };
  
  const initialErrorInput = {
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    nationality: "",
    drugAllergies: "",
    address: "",
    phone: "",
    email: "",
  };

export default function Register() {

    const [input, setInput] = useState(initialInput);
    const [inputError, setInputError] = useState(initialErrorInput);

    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setInputError({ ...inputError, [e.target.name]: "" });
      };

      const handleSubmitForm = async (e) => {
        try {
          e.preventDefault();
    
          const errors = validateCreateHn(input);
          console.log("errors", errors);
          if (errors) {
            return setInputError(errors);
          }
    
          await userApi.createHn(input);
    
          toast.success("HN created");
          setInput(initialInput);

          navigate("/admin/createvn");
        } catch (err) {
          if (err instanceof AxiosError) {
            return toast.error(err.response.data?.message);
          }
        }
      };

  return (
    <div className="flex flex-col items-center mt-8 mb-20">
        <HeardText text="ลงทะเบียนล่วงหน้า" />
        <RegisterForm text="ลงทะเบียนล่วงหน้า" input={input} inputError={inputError} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} setInput={setInput} />
    </div>
  )
}
