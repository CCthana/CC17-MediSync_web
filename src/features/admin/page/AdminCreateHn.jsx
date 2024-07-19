import { useState } from "react";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HeaderTextAdmin from "../component/HeaderTextAdmin";
import validateCreateHn from "../validate/validate-hn";
import { AxiosError } from "axios";
import RegisterForm from "../component/RegisterForm";

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

function AdminCreateHn() {
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

      await adminApi.createHn(input);

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

      <div className="flex items-center flex-col justify-center text-center text-ms-gray">
        <div className="flex items-center justify-center px-8 w-full">
          <HeaderTextAdmin>Create Hospital Number</HeaderTextAdmin>
        </div>
        <RegisterForm text="สร้าง HN" initialInput={initialInput} input={input} inputError={inputError} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} setInput={setInput} />
        
      </div>

  );
}

export default AdminCreateHn;
