import ButtonAdmin from "../../../components/ButtonAdmin";
import Input from "../../../components/Input";

export default function RegisterForm({text, input, inputError, handleChangeInput, handleSubmitForm, setInput, initialInput}) {
  return (
    <>
    <div className="w-8/12 p-8 justify-center flex flex-col gap-6">
          <div className="font-normal w-full flex gap-8">
            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
                ชื่อ
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <Input
                value={input.firstName}
                name="firstName"
                onChange={handleChangeInput}
                placeholder="ชื่อจริง"
                error={inputError.firstName}
              />
            </div>

            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
                นามสกุล
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <Input
                value={input.lastName}
                name="lastName"
                onChange={handleChangeInput}
                placeholder="นามสกุล"
                error={inputError.lastName}
              />
            </div>
          </div>

          <div className="font-normal w-full flex gap-8">
            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
                วันเกิด
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <input
                value={input.birthDate}
                name="birthDate"
                onChange={handleChangeInput}
                type="date"
                className={`h-[44px] hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] focus:border-ms-green outline-none w-full bg-[#f3f5f2] appearance-none rounded-full
                border px-4 py-2 ${inputError.birthDate ? "border-[#E84A4A] focus:ring-red-200'" : "border-ms-gold"}`}
              />
              {inputError.birthDate && (
                <small className="text-red-500 text-start block">
                  {inputError.birthDate}
                </small>
              )}
            </div>

            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
      
                สัญชาติ
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <Input
                value={input.nationality}
                name="nationality"
                onChange={handleChangeInput}
                error={inputError.nationality}
                placeholder="nationality"
              />
            </div>
          </div>

          <div className="font-normal w-full flex gap-8">
            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative text-lg">
                เพศ
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <div className="relative w-full flex items-center gap-8">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="MALE"
                    name="gender"
                    value="MALE"
                    onChange={handleChangeInput}
                    className="w-5 h-5 cursor-pointer appearance-none bg-gray-300 
                    border rounded-full checked:bg-ms-green hover:bg-ms-green"
                  />
                  <label htmlFor="MALE">ชาย</label>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="FEMALE"
                    name="gender"
                    value="FEMALE"
                    onChange={handleChangeInput}
                    className="w-5 h-5 cursor-pointer appearance-none bg-gray-300 
                    border rounded-full checked:bg-ms-green hover:bg-ms-green"
                  />
                  <label htmlFor="FEMALE">หญิง</label>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="OTHER"
                    name="gender"
                    value="OTHER"
                    onChange={handleChangeInput}
                    className="w-5 h-5 cursor-pointer appearance-none bg-gray-300 
                    border rounded-full checked:bg-ms-green hover:bg-ms-green"
                  />
                  <label htmlFor="OTHER">อื่นๆ</label>
                </div>
              </div>
              {inputError.gender && (
                <small className="text-red-500 text-start block">
                  {inputError.gender}
                </small>
              )}
            </div>
          </div>

          <div className="font-normal w-full flex gap-8">
            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
                เบอร์โทร
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <Input
                value={input.phone}
                name="phone"
                onChange={handleChangeInput}
                typeInput="number"
                placeholder="เบอร์โทร"
                error={inputError.phone}
              />
            </div>

            <div className="flex items-start w-full flex-col gap-1">
              <h1 className="relative">
                Email
                <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i>
              </h1>
              <Input
                value={input.email}
                name="email"
                onChange={handleChangeInput}
                placeholder="Email"
                error={inputError.email}
              />
            </div>
          </div>

          <div className="flex items-start w-full flex-col gap-1">
            <h1 className="relative"> ที่อยู่ <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <textarea
              value={input.address}
              name="address"
              onChange={handleChangeInput}
              className={`max-h-[90px] min-h-[90px] resize-none w-full bg-[#f3f5f2] ${inputError.address ? "border-[#E84A4A] focus:ring-red-200'" : "border-ms-gold"}
                border rounded-3xl p-4 outline-none focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] text-lg text-ms-gray`}
            />
            {inputError.address && (
              <small className="text-red-500 text-start block">
                {inputError.address}
              </small>
            )}
          </div>

          <div className="flex items-start w-full flex-col gap-1">
            <h1 className="relative"> ประวัติการแพ้ยา </h1>
            <textarea
              value={input.drugAllergies}
              name="drugAllergies"
              onChange={handleChangeInput}
              className={`max-h-[90px] min-h-[90px] resize-none w-full bg-[#f3f5f2] ${inputError.drugAllergies ? "border-[#E84A4A] focus:ring-red-200'" : "border-ms-gold"}
                border rounded-3xl p-4 outline-none focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] text-lg text-ms-gray`}
            />
            {inputError.drugAllergies && (
              <small className="text-red-500 text-start block">
                {inputError.drugAllergies}
              </small>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-8 w-1/3">
          <ButtonAdmin btn="active" onClick={handleSubmitForm}>
            {text}
          </ButtonAdmin>
          <ButtonAdmin
            btn="success"
            onClick={() => {
              setInput(initialInput);
            }}
          >
            
            ยกเลิก
          </ButtonAdmin>
        </div></>
  )
}
