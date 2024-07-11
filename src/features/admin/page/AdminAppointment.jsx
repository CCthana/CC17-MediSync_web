import { useEffect, useState } from "react";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HeaderTextAdmin from "../component/HeaderTextAdmin";
import InputSearch from "../../../components/InputSearch";
import validateSearch from "../validate/validate-search";
import logo2 from "../../../assets/logos/MediSync-2.svg";

function AdminAppointment() {
  const [input, setInput] = useState("");
  const [searchAppoint, setSearchAppoint] = useState(null);
  const [searchType, setSearchType] = useState("hn");
  const [inputError, setInputError] = useState({
    input: "",
    notFound: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
    setInputError({ ...inputError, input: "" });
  };

  const handleClickSearch = async () => {
    try {
      const error = validateSearch({ input });

      if (error) {
        setInputError(error);
        return;
      }

      if (searchType === "hn") {
        const result = await adminApi.getAppointmentByHn(input);
        setSearchAppoint(result.data);
        console.log("result.data", result.data.length);

        if (result.data.length === 0) {
          setInputError({ ...inputError, notFound: "ไม่พบข้อมูล" });
        } else {
          setInputError({ ...inputError, notFound: "" });
        }
      } else if (searchType === "name") {
        const result = await adminApi.getAppointmentByName(input);
        setSearchAppoint(result.data);

        if (result.data.length === 0) {
          setInputError({ ...inputError, notFound: "ไม่พบข้อมูล" });
        } else {
          setInputError({ ...inputError, notFound: "" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickConfirm = async (id, hn) => {
    try {
      const status = "COMPELETED";

      await adminApi.setAppointment(id, status);

      const navigationState = {
        state: {
          hn: hn,
          searchAppoint: searchAppoint,
        },
      };

      toast.success("Appointment updated");
      navigate("/admin/createvn", navigationState);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 13) {
        handleClickSearch();
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => document.removeEventListener("keydown", handleEscPress);
  }, [handleClickSearch]);

  return (
    <div className="flex items-center flex-col text-center text-ms-gray space-y-4">
      <div className="flex items-center justify-center">
        <HeaderTextAdmin>ค้นหาใบนัด</HeaderTextAdmin>
      </div>

      <div className="items-center space-y-2 w-10/12">
        <div className="flex items-center justify-start text-ms-gray gap-6 px-4">
          <button
            className={`font-th font-light hover:underline text-lg ${
              searchType == "hn"
                ? "text-ms-green font-normal hover:no-underline"
                : null
            } `}
            onClick={() => {
              setSearchType("hn");
              setInput("");
            }}
          >
            ค้นหาด้วย HN
          </button>
          <button
            className={`font-th font-light hover:underline text-lg ${
              searchType == "name"
                ? "text-ms-green font-normal hover:no-underline"
                : null
            } `}
            onClick={() => {
              setSearchType("name");
              setInput("");
            }}
          >
            ค้นหาด้วยชื่อ
          </button>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div className="relative flex items-center w-full rounded-3xl">
            <InputSearch
              value={input}
              onChange={handleChangeInput}
              placeholder={searchType === "hn" ? "เลข HN" : "ซื่อคนไข้"}
            />
            <i
              role="button"
              className="fa-solid fa-magnifying-glass transition duration-300
               absolute right-2 p-3 text-gray-300 text-2xl hover:text-gray-400"
            ></i>
          </div>
          <button
            className="font-th px-12 py-4 bg-ms-green font-light outline-none rounded-full text-[#f3f5f2] text-xl hover:bg-[#257956]"
            onClick={handleClickSearch}
          >
            ค้นหา
          </button>
        </div>

        {inputError.input ? (
          <small className="text-red-500 px-4 text-start block">
            {inputError.input}
          </small>
        ) : null}

        {inputError.notFound ? (
          <div className="pt-4">
            <h1 className="text-gray-400 bg-[#e8eae6] rounded-3xl p-32 text-3xl font-light">
              {inputError.notFound}
            </h1>
          </div>
        ) : null}
      </div>

      {searchAppoint?.length > 0 ? (
        <div className="py-6 w-10/12 space-y-4">
          {searchAppoint?.map((result) => (
            <div
              key={result?.hn}
              className="w-full hover:shadow-[2px_2px_8px_rgba(0,0,0,0.2)] px-8 py-4 rounded-3xl text-xl bg-card-bg flex items-center justify-between gap-10 font-th text-ms-gray hover:cursor-pointer "
            >
              <h1 className="w-1/4">
                <span className=" font-normal text-ms-green">{result?.hn}</span>
              </h1>
              <h1 className="w-full font-normal text-ms-gray">
                คุณ: &#32;
                <span className=" font-normal text-ms-green">
                  {result?.user.firstName} {result?.user.lastName}
                </span>
              </h1>
              <h1 className="w-2/4 text-ms-gray">
                ใบนัดที่: &#32;
                <span className=" font-normal text-ms-green">{result?.id}</span>
              </h1>
              <h1 className="w-full">
                วันที่นัด: &#32;
                <span className=" text-md text-ms-green">
                  {(result?.appointmentTime &&
                    result?.appointmentTime.split("T")[0]) ||
                    ""}
                </span>
              </h1>
              <button
                onClick={() => handleClickConfirm(result?.id, result?.hn)}
                className="text-base w-2/5 font-th hover:underline bg-ms-green rounded-full text-white py-3 hover:bg-[#257956]"
              >
                ออกใบ VN
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[32rem] p-[6rem] opacity-10">
          <img className="w-full h-full" src={logo2} alt="logo MediSync" />
        </div>
      )}
    </div>
  );
}

export default AdminAppointment;
