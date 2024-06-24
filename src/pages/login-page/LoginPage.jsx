// import { useState } from "react";
// import { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Input from "../../components/Input.jsx";
// import validateLogin from "../../validate/validate-login.js";
// import Button from "../../components/Button.jsx";
// import OtpReceived from "./component/OtpRecived.jsx";
// import CleanModal from "../../components/CleanModal.jsx";

// const initialInput = {
//   email: "",
//   password: "",
// };

// const initialInputError = {
//   email: "",
//   password: "",
// };

// export default function LoginPage() {
//   const [input, setInput] = useState(initialInput);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [inputError, setInputError] = useState(initialInputError);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//     setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
//   };

//   const handleSubmitFrom = async (e) => {
//     try {
//       e.preventDefault();
//       const error = validateLogin(input);

//       if (error) {
//         return setInputError(error);
//       }

//       setInputError(initialInputError);
//       // await login(input)
//       navigate("/user");
//       toast.success("login success");

//       setInput(initialInput);
//     } catch (err) {
//       console.log(err);
//       if (err instanceof AxiosError) {
//         setInputError((prev) => ({
//           ...prev,
//           password: err.response.data.message,
//           email: " ",
//         }));

//         const message =
//           err.response.status === 400
//             ? "email or password invalid"
//             : "internal erver error";
//         return toast.error(message);
//       }
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmitFrom} className="flex justify-center ">
//         <div className="flex mx-10 flex-col gap-3 p-16 rounded-[36px] border border-[#AF9763] w-1/2 mt-48 mb-64">
//           <div>
//             <label>Email</label>
//             <Input
//               placeholder="email ใช้สำหรับ login"
//               value={input.email}
//               name={"email"}
//               onChange={handleChange}
//               error={inputError.email}
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <Input
//               placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
//               value={input.password}
//               name={"password"}
//               onChange={handleChange}
//               error={inputError.password}
//               typeInput="password"
//             />
//           </div>

//           <div className="mt-3">
//             <Button btn="success">เข้าสู่ระบบ</Button>
//           </div>
//         </div>
//       </form>
//       <button onClick={() => setOpenEdit(true)}>test</button>
//       <CleanModal
//         width={50}
//         open={openEdit}
//         setOpen={setOpenEdit}
//         onClose={() => setOpenEdit(false)}
//       >
//         <OtpReceived />
//       </CleanModal>
//     </>
//   );
// }

import { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input.jsx";
import validateLogin from "../../validate/validate-login.js";
import Button from "../../components/Button.jsx";

import CleanModal from "../../components/CleanModal.jsx";
import OtpReceived from "./component/OtpRecived.jsx";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [openEdit, setOpenEdit] = useState(false);
  const [inputError, setInputError] = useState(initialInputError);
  const [emailForOtp, setEmailForOtp] = useState("");

  const navigate = useNavigate();

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

      setInputError(initialInputError);

    //   // Send login request
    //   await axios.post('http://localhost:3000/login', { email: input.email, password: input.password });
      setEmailForOtp(input.email);
      setOpenEdit(true);

      toast.success("OTP sent to your email");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setInputError((prev) => ({
          ...prev,
          password: err.response.data.message,
          email: " ",
        }));

        const message =
          err.response.status === 400
            ? "email or password invalid"
            : "internal server error";
        return toast.error(message);
      }
    }
  };

  const handleOtpVerified = (token) => {
    setOpenEdit(false);
    toast.success("Login successful");
    // Handle post-login actions, e.g., storing token and navigating to a different page
    navigate("/user");
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="flex justify-center ">
        <div className="flex mx-10 flex-col gap-3 p-16 rounded-[36px] border border-[#AF9763] w-1/2 mt-48 mb-64">
          <div>
            <label>Email</label>
            <Input
              placeholder="email ใช้สำหรับ login"
              value={input.email}
              name={"email"}
              onChange={handleChange}
              error={inputError.email}
            />
          </div>

          <div>
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

          <div className="mt-3">
            <Button btn="success">เข้าสู่ระบบ</Button>
          </div>
        </div>
      </form>

      <CleanModal
        width={50}
        open={openEdit}
        setOpen={setOpenEdit}
        onClose={() => setOpenEdit(false)}
      >
        <OtpReceived email={emailForOtp} onVerified={handleOtpVerified} />
      </CleanModal>
    </>
  );
}
