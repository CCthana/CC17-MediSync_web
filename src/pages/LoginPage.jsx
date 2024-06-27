import { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Input from "../components/Input.jsx";
import validateLogin from "../validate/validate-login.js";
import Button from "../components/Button.jsx";

const initialInput = {
    email: '',
    password: ''
}

const initialInputError = {
    email: '',
    password: ''
}

export default function LoginPage() {

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()
            const error = validateLogin(input)

            if(error) {
                return setInputError(error)
            }

            setInputError(initialInputError)
            // await login(input)
            navigate('/user')
            toast.success('login success')

            setInput(initialInput)

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {

                setInputError((prev) => ({
                    ...prev,
                    password: err.response.data.message,
                    email: ' '
                }))

                const message = err.response.status === 400
                ? 'email or password invalid'
                : 'internal erver error'
                return toast.error(message)
            }
        }
    }

  return (
    <div className="min-h-[75vh] flex items-center justify-center">
        <form onSubmit={handleSubmitFrom} className="w-1/2">
            <div className="flex flex-col gap-3 px-20 py-16 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]
            rounded-[36px] border border-ms-gold">
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <Input
                        placeholder="email ใช้สำหรับ login"
                        value={input.email}
                        name={'email'}
                        onChange={handleChange}
                        error={inputError.email}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <Input
                        placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                        value={input.password}
                        name={'password'}
                        onChange={handleChange}
                        error={inputError.password}
                        typeInput="password"
                    />
                </div>

                <div className="mt-3 w-[13rem] mx-auto">
                    <Button btn='active'>เข้าสู่ระบบ</Button>
                </div>
            </div>
        </form>
    </div>
  )
}
