import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import Input from "../../components/Input.jsx";
import validateLogin from "./validate/validate-login.js";
import Button from "../../components/Button.jsx";
import CleanModal from "../../components/CleanModal.jsx";
import OtpReceived from "./component/OtpRecived.jsx";
import useAuth from "../../hooks/useAuth.js";
import Spinner from "../../components/Spinner.jsx";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const { login } = useAuth();
  const [input, setInput] = useState(initialInput);
  const [openEdit, setOpenEdit] = useState(false);
  const [inputError, setInputError] = useState(initialInputError);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);

      if (error) {
        return setInputError(error);
      }
      setIsLoading(true);

      setInputError(initialInputError);
      console.log(input);
      // ส่งคำขอล็อกอิน
      await login({ email: input.email, password: input.password });
      setOpenEdit(true);

      setEmailForOtp(input.email);
      // navigate('/user')
      toast.success("OTP sent to your email");
      setInput(initialInput);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setInputError((prev) => ({
          ...prev,
          password: err.response.data?.message,
          email: " ",
        }));

        const message =
          err.response.status === 400
            ? "email or password invalid"
            : "internal server error";
            setIsLoading(false);
        return toast.error(message);
      }
      
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div>
        <div className="min-h-[75vh] flex items-center justify-center">
          <form onSubmit={handleSubmitForm} className="w-1/2">
            <div
              className="flex flex-col gap-3 px-20 py-16 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]
            rounded-[36px] border border-ms-gold"
            >
              <div className="flex flex-col gap-1">
                <label>Email</label>
                <Input
                  placeholder="email ใช้สำหรับ login"
                  value={input.email}
                  name={"email"}
                  onChange={handleChange}
                  error={inputError.email}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Password</label>
                <Input
                  placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                  value={input.password}
                  name={"password"}
                  onChange={handleChange}
                  error={inputError.password}
                  typeInput="password"
                />
              </div>

              <div className="mt-3 w-[13rem] mx-auto">
                <Button btn="active">เข้าสู่ระบบ</Button>
              </div>
            </div>
          </form>
        </div>

        <CleanModal
          width={50}
          open={openEdit}
          setOpen={setOpenEdit}
          onClose={() => setOpenEdit(false)}
        >
          <OtpReceived email={emailForOtp} setOpen={setOpenEdit} />
        </CleanModal>
      </div>
    </>
  );
}
