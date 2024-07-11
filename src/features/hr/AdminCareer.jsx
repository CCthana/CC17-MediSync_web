import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import validateCareer from "./validate";
import useHr from "../../hooks/useHr";

export default function AdminCareer({ setIsAddOpen }) {
  const {
    addJobsApi,
    fetchAllPosition,
  } = useHr();

  const [addJob, setAddJob] = useState([{ name: "", quantity: 0 }]);
  const [inputError, setInputError] = useState([{ name: "", quantity: "" }]);

  // const handleAddJob = () => {
  //   onSave([newJob, ...addJob]);
  // };

  const handleAddSave = async (newJob) => {
    try {
      // console.log("newJob-----", newJob);
      const errors = validateCareer(newJob);
      // console.log("errors", errors);
      if (errors) {
        console.log('errors=======', errors)
        setInputError(errors);
        return;
      }
      await addJobsApi(newJob);
      fetchAllPosition();
      setIsAddOpen(false);
      setInputError([]);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleCountAddJob = () => {
    setAddJob((prev) => [...prev, { name: "", quantity: 0 }]);
    setInputError((prev) => [...prev, { name: "", quantity: "" }]);
  };

  const handleAddJobNameChange = (value, index) => {
    console.log('index', index)
    console.log('value', value)
    const updatedAddJob = [...addJob];
    updatedAddJob[index][value.name] = value.value;
    setAddJob(updatedAddJob);

    const errorJob = [...inputError]
    console.log('errorJob', errorJob)
    

    errorJob[index][value.name] = ""
    setInputError(errorJob)
  };

  const handleAddJobQuantityChange = (value, index) => {
    const updatedAddJob = [...addJob];
    updatedAddJob[index][value.name] = +value.value;
    setAddJob(updatedAddJob);

    const errorJob = [...inputError]
    errorJob[index][value.name] = ""
    setInputError(errorJob)
  };

  console.log('addJob', addJob)
  console.log('inputError----', inputError.error)
  console.log('inputError----gggggg', inputError)

  return (
    <div className="w-full py-4 px-8 space-y-4">

      {addJob.map((el, i) => (
        <div key={i} className="font-th flex gap-5">
          <div className="flex flex-col flex-1 space-y-2">
            <label className="font-light relative w-fit">ชื่อตำแหน่ง<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <Input
              value={addJob[i].name}
              onChange={(e) => handleAddJobNameChange(e.target, i)}
              error={inputError[i]?.name || ""}
              name="name"
            />
          </div>

          <div className="flex flex-col space-y-2 w-[11rem] items-center">
          <label className="font-light relative w-fit">จำนวน<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <Input
              text="center"
              typeInput="number"
              value={addJob[i].quantity}
              onChange={(e) => handleAddJobQuantityChange(e.target, i)}
              error={inputError[i]?.quantity || ""}
              name="quantity"
            />
          </div>
        </div>
      ))}

      <div className="flex justify-center gap-3 items-center pt-4">
        <button
          onClick={handleCountAddJob}
          className="bg-gray-200 rounded-full w-[10rem] py-1 px-5 h-11 hover:bg-gray-300 duration-200"
        >
          <i className="fa-solid fa-plus text-2xl text-gray-400 flex justify-center"></i>
        </button>
        <Button btn="active" width="w-[10rem]" onClick={() => handleAddSave(addJob)}>
          ยืนยัน
        </Button>
      </div>
    </div>
  );
}
