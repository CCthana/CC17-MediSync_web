import { useState } from "react";
import { DetailIcon } from "../../../icons";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import { sendPdfReceipt } from "../../../utils/pdfRecipt";
import { sendPdfMedicalCertificate } from "../../../utils/pdfMedicalCertificate";

function AdminAccountCard({
  id,
  hn,
  vn,
  weight,
  height,
  bloodPressure,
  heartRate,
  symptoms,
  treatmentResult,
  diagnosis,
  medicineOrders,
  vnType,
  user,
  fetchPaymentVn,
  doctor,
  clinic,
}) {
  const initialInput = {
    id: id,
    totalPrice: "",
  };

  const [input, setInput] = useState(initialInput);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickConfirm = async () => {
    try {
      const data = {
        id,
        hn,
        vn,
        weight,
        height,
        bloodPressure,
        heartRate,
        symptoms,
        treatmentResult,
        diagnosis,
        medicineOrders,
        vnType,
        user,
        fetchPaymentVn,
        doctor,
        clinic,
      };

      const [pdfBlobMedicalCertificate, pdfBlobReceipt] = await Promise.all([
        sendPdfMedicalCertificate(data),
        sendPdfReceipt(data),
      ]);

      const formData = new FormData();
      formdata?.append(
        "medicalCertificate",
        pdfBlobMedicalCertificate,
        "MedicalCertificate.pdf"
      );
      formdata?.append("receipt", pdfBlobReceipt, "Receipt.pdf");
      formdata?.append("id", id);
      formdata?.append("totalPrice", input.totalPrice);

      await adminApi.updateTotalPriceVnByAccount(formData);

      toast.success("Payment updated");
      fetchPaymentVn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-card-bg rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] text-lg">
        <h1>
          no. <span className="text-ms-green font-semibold"> {id} </span>
        </h1>
        <h1>
          <span className="text-ms-green font-semibold"> {hn} </span>
        </h1>
        <h1>
          <span className="text-ms-green font-semibold"> {vn} </span>
        </h1>
        <h1>
          คุณ:
          <span className="text-ms-green font-semibold">
            {user?.firstName} {user?.lastName}
          </span>
        </h1>
        <h1>
          เพศ:
          <span className="text-ms-green font-semibold"> {user?.gender} </span>
        </h1>
        <h1>
          อายุ:
          <span className="text-ms-green m-2 font-semibold">
            {new Date().getUTCFullYear() - user?.birthDate?.split("-")[0] ||
              "-"}
          </span>
          ปี
        </h1>
        <button onClick={handleClick}>
          <DetailIcon className="h-8" />
        </button>
      </div>

      <div
        className={`h-fit px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 mb-10 ${
          open ? "block opacity-100" : "hidden "
        } animatedbox `}
      >
        <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

        <div className="flex gap-6 mt-6 justify-start text-ms-gray font-th">
          <h1>
            น้ำหนัก:
            <span className="mx-2 font-medium text-lg text-ms-green">
              {weight}
            </span>
            kg.
          </h1>
          <h1>
            ส่วนสูง:
            <span className="mx-2 font-medium text-lg text-ms-green">
              {height}
            </span>
            cm.
          </h1>
          <h1>
            ความดัน:
            <span className="mx-2 font-medium text-lg text-ms-green">
              {bloodPressure}
            </span>
          </h1>
          <h1>
            ชีพจร:
            <span className="mx-2 font-medium text-lg text-ms-green">
              {heartRate}
            </span>
            BPM.
          </h1>
        </div>

        <div className=" text-ms-gray mt-2 ">
          <h1>
            อาการเบื้องต้น:
            <span className="mx-2 font-semibold text-lg text-ms-green">
              {symptoms}
            </span>
          </h1>
        </div>

        <div className="flex items-start gap-20 text-ms-gray ml-6 ">
          <div className="flex flex-col">
            <div className="mt-8 ">
              <h1>การตรวจ</h1>
              <div className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray">
                <h1> {treatmentResult} </h1>
              </div>
            </div>

            <div className="mt-8 ">
              <h1>สรุปอาการ</h1>
              <div className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray">
                <h1> {diagnosis} </h1>
              </div>
            </div>

            <div className="mt-8 ">
              <h1>จ่ายยา</h1>
              <div className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray font-th">
                {medicineOrders.map((result) => (
                  <h1 key={result?.id}>
                    Medicine: {result?.medicine.name} quantity:
                    {result?.quantity} price:{result?.medicine.price}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-10 gap-10 mt-14">
            <div>
              <h1>นัดครั้งต่อไป</h1>
              <div className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-3 text-center border-ms-gold ">
                <h1>{user?.appointments[0]?.appointmentTime.split("T")[0]}</h1>
              </div>
            </div>

            <div>
              <h1>OPD / ADMIT</h1>
              <div
                name="type"
                id="type"
                className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-3 text-center border-ms-gold "
              >
                <h1> {vnType} </h1>
              </div>
            </div>

            <div>
              <h1>สรุปค่ารักษา</h1>

              <input
                name="totalPrice"
                id="totalPrice"
                value={input.totalPrice}
                onChange={handleChangeInput}
                className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold text-center"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end  gap-4">
          <button
            onClick={handleClickConfirm}
            className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"
          >
            ยืนยัน
          </button>
          <button
            onClick={() => {
              setInput(initialInput);
            }}
            className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "
          >
            แก้ไข
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminAccountCard;
