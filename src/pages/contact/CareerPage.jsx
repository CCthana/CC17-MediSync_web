import { useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import validateFormCareer from "./validate/validate-form";
import { toast } from "react-toastify";

const initialInput = {
    firstname: '',
    lastname: '',
    age: '',
    phone: '',
    email: '',
    position: '',
    detail: ''
}

const initialInputError = {
    firstname: '',
    lastname: '',
    age: '',
    phone: '',
    email: '',
    position: '',
    detail: ''
}


export default function CareerPage() {

    const [ applyData, setApplyData ] = useState(initialInput)
    const [ inputError, setInputError ] = useState( initialInputError)
    const [ file, setFile ] = useState(null)

    const fileInput = useRef(null);

    const handleFileUploadClick = () => {
        fileInput.current.click();
    };

    const handleChangeInput = (e) => {
        setApplyData({ ...applyData, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    const handleSubmitFrom = (e) => {
        try {
            e.preventDefault()

            const err = validateFormCareer(applyData)

            if (err) {
                return setInputError(err)
            }

            setInputError({...initialInput})

            console.log('applyData', applyData)

            const formData = new FormData();
              formData.append('cv', file);
              formData.append('firstname' , applyData.firstname)
              formData.append('lastname' , applyData.lastname)
              formData.append('age' , applyData.age)
              formData.append('phone' , applyData.phone)
              formData.append('email' , applyData.email)
              formData.append('position' , applyData.position)
              formData.append('detail' , applyData.detail)

              // await storeApi.addStore(formData)
              toast.success('add store successfully.')
              setApplyData({...initialInput})

        } catch (err) {
            console.log('err contact', err)
        }
    }

    console.log('file', file)

  return (
    <div className=" min-h-[75vh] flex flex-col items-center py-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full contents ">

        <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
          ร่วมงานกับเรา
        </h1>

        {/* <div className="bg-red-500 w-96"> */}
        {/* <div className="mb-6 w-[770px]"> */}
        <div className="mb-6 w-[770px] max-w-full flex flex-col justify-start">
          <h2 className="text-ms-gray text-xl font-normal mb-2">
            ตำแหน่งที่รับสมัคร
          </h2>
          <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5">
            <li>พนักงานฝ่ายการตลาด 1 อัตรา</li>
            <li>ผู้จัดการแผนกคลินิก 2 อัตรา</li>
            <li>พนักงานช่วยเหลือคนไข้ 3 อัตรา</li>
            <li>พยาบาลวิชาชีพ OPD 2 อัตรา</li>
          </ul>
        </div>
        {/* </div> */}

        <form className="space-y-4 w-2/3 py-10 px-12 rounded-[32px] shadow-[0px_0px_6px_rgba(174,143,78,0.4)]" onSubmit={handleSubmitFrom}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-0.5">
              <label className="font-light">ชื่อจริง</label>
              <Input
                type="text"
                placeholder="ชื่อของผุ้สมัคร"
                className=""
                name="firstname"
                onChange={handleChangeInput}
                error={inputError.firstname}
              />
            </div>

            <div className="space-y-0.5">
              <label className="font-light">นามสกุล</label>
              <Input
                type="text"
                placeholder="นามสกุล"
                className=""
                name="lastname"
                onChange={handleChangeInput}
                error={inputError.lastname}
              />
            </div>

            <div className="space-y-0.5">
              <label className="font-light">อายุ</label>
              <Input
                type="text"
                placeholder="อายุของผุ้สมัคร"
                className=""
                name="age"
                onChange={handleChangeInput}
                error={inputError.age}
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-0.5">
              <label className="font-light">เบอร์ติดต่อ</label>
              <Input
                type="text"
                placeholder="เบอร์ติดต่อ"
                className=""
                name="phone"
                onChange={handleChangeInput}
                error={inputError.phone}
              />
            </div>
            
            <div className="space-y-0.5">
              <label className="font-light">email</label>
              <Input
                type="email"
                placeholder="email"
                className=""
                name="email"
                onChange={handleChangeInput}
                error={inputError.email}
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-0.5">
              <label className="font-light">เลือกตำแหน่งที่ต้องการสมัคร</label>
              <select onChange={handleChangeInput} name="position" className="border border-ms-gold
              text-[0.9rem] font-light bg-[#f3f5f1] rounded-3xl px-4 py-2 w-full text-[#b0afad] outline-none
              hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] h-11">
                <option value="">กรุณาเลือกตำแหน่ง</option>
                <option value="abc">abc</option>
                <option value="def">def</option>
                <option value="zxc">zxc</option>
              </select>
              <small className="text-red-500">{inputError.position}</small>
            </div>

            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
            }}
            />

            <div className="space-y-0.5">
              <label className="font-light">แนบ CV</label>
              <button
                type="button"
                onClick={handleFileUploadClick}
                className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full text-[#b0afad] bg-[#f3f5f1]
                flex outline-none items-center h-[44px] hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] text-[0.85rem] font-light"
              >
                เลือกไฟล์ {file && file.name}
              </button>
            </div>
          </div>

          <div className="space-y-0.5">
            <label className="font-light">รายละเอียดเพิ่มเติม</label>
            <textarea
              name="detail"
              placeholder="รายละเอียดเพิ่มเติม"
              className="border bg-[#f3f5f1] border-[#AE8F4E] rounded-3xl px-4 py-2 w-full h-32 placeholder:text-[#b0afad] font-light
              focus:outline-none focus:border focus:border-ms-green hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)]
              focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] text-[0.9rem]"
              onChange={handleChangeInput}
            ></textarea>
          </div>

          <div role="button" className="flex justify-center">
            <Button btn='active' width="w-[15rem]">
              สมัครงาน
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}