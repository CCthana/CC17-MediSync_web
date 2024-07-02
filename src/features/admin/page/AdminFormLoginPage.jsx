import { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import validateLogin from "../validate/validateAdmin-login";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useAdmin from "../../../hooks/useAdmin";

const initialInput = {
    userName: '',
    password: ''
}

const initialInputError = {
    userName: '',
    password: ''
}

export default function AdminFormLoginPage() {

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    const { login } = useAdmin()

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
            await login(input)
            navigate('/admin')
            toast.success('login success')

            setInput(initialInput)

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {

                setInputError((prev) => ({
                    ...prev,
                    password: err.response.data.message,
                    userName: ' '
                }))

                const message = err.response.status === 400
                ? 'username or password invalid'
                : 'internal erver error'
                return toast.error(message)
            }
        }
    }

  return (
    <form onSubmit={handleSubmitFrom} className="flex justify-center">
        <div className="flex flex-col gap-4 px-20 pt-6 pb-8 rounded-[36px] w-full">
            <div className="flex flex-col gap-1">
                <label>username</label>
                <Input
                    placeholder="email ใช้สำหรับ login"
                    value={input.userName}
                    name={'userName'}
                    onChange={handleChange}
                    error={inputError.userName}
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
                <Button btn='success'>เข้าสู่ระบบ</Button>
            </div>
        </div>
    </form>
  )
}
