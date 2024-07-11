import { useEffect, useState } from "react";
import AdminAccountCard from "../component/AdminAccountCard";
import useAdmin from "../../../hooks/useAdmin";
import adminApi from "../../../apis/admin";
import HeaderTextAdmin from "../component/HeaderTextAdmin";

function AdminAccountPage() {
  const [paymentVn, setPaymentVn] = useState();

  const { authAdmin } = useAdmin();

  const fetchPaymentVn = async () => {
    try {
      const result = await adminApi.getAllVnByStatusPayment();
      setPaymentVn(result.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPaymentVn();
  }, [authAdmin]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
        <button className="bg-ms-green text-[#f3f5f2] px-5 py-2 font-light rounded-3xl  hover:bg-[#257956] invisible">
          {" "}
          <i className="fa-solid fa-rotate text-[#f3f5f2]"></i>
          &#32;เรียกข้อมูลใหม่{" "}
        </button>
        <HeaderTextAdmin>การเงิน</HeaderTextAdmin>
        <button
          onClick={() => fetchPaymentVn()}
          className="bg-ms-green text-[#f3f5f2] px-5 py-2 font-light rounded-3xl  hover:bg-[#257956]"
        >
          {" "}
          <i className="fa-solid fa-rotate text-[#f3f5f2]"></i>
          &#32;เรียกข้อมูลใหม่{" "}
        </button>
      </div>

      <div className="flex flex-col gap-4 p-8">
        {paymentVn?.map((result) => (
          <AdminAccountCard
            key={result?.id}
            id={result?.id}
            hn={result?.hn}
            vn={result?.vn}
            weight={result?.weight}
            height={result?.height}
            bloodPressure={result?.bloodPressure}
            heartRate={result?.heartRate}
            symptoms={result?.symptoms}
            treatmentResult={result?.treatmentResult}
            diagnosis={result?.diagnosis}
            medicine={result?.medicine}
            vnType={result?.vnType}
            user={result?.user}
            doctor={result?.doctor}
            clinic={result?.clinic}
            medicineOrders={result?.medicineOrders}
            fetchPaymentVn={fetchPaymentVn}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminAccountPage;
