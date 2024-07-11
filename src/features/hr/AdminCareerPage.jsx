import { useState } from "react";
import Modal from "../../components/Modal";
import AdminCareer from "./AdminCareer";
import HeaderTextAdmin from "../admin/component/HeaderTextAdmin";
import ButtonSmall from "../../components/BottonSmall";
import validateCareer from "./validate";
import useHr from "../../hooks/useHr";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { getAccessTokenAdmin } from "../../utils/local-storage";
import { toast } from "react-toastify";

// const initialJobs = [
//   { id: 1, name: "พนักงานฝ่ายการตลาด", quantity: 1 },
//   { id: 2, name: "ผู้จัดการแผนกคลินิก", quantity: 2 },
//   { id: 3, name: "พนักงานช่วยเหลือคนไข้", quantity: 3 },
//   { id: 4, name: "พยาบาลวิชาชีพ OPD", quantity: 2 },
// ];

// const initialInputError = {
//   name: "",
//   quantity: "",
// };

export default function AdminCareerPage() {
  const {
    addJobsApi,
    allPosition,
    fetchAllPosition,
    deleteJobsApi,
    updateJobsApi,
  } = useHr();

  const [isEditOpen, setIsEditOpen] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [inputError, setInputError] = useState([]);
  const [input, setInput] = useState([]);

  const handleChange = (e, index) => {
    setInput((prevInput) => {
      const newInput = [...prevInput];
      newInput[index][e.target.name] = e.target.value;
      return newInput;
    });

    // setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditClick = (id) => {
    setIsEditOpen((prev) => ({
      ...prev,
      [id]: { id: id, isEdit: true },
    }));
    setInput(allPosition);
  };

  const handleAddClick = () => {
    setIsAddOpen(true);
  };

  const handleDeleteClick = (id) => {
    setJobToDelete(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    try {
      if (getAccessTokenAdmin()) {
        await deleteJobsApi(jobToDelete);
      fetchAllPosition();
      setIsDeleteOpen(false);
      setJobToDelete(null);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleUpdateSave = async (dataUpdate) => {
    try {
      if (getAccessTokenAdmin()) {
        const datavalidate = {
          name: dataUpdate.name,
          quantity: dataUpdate.quantity,
        };
        const errors = validateCareer(datavalidate);
        console.log("errors", errors);
        if (errors) {
          setInputError(errors);
          return;
        }

        await updateJobsApi(dataUpdate);
        toast.success("update career success");
        setIsEditOpen((prev) => ({
          ...prev,
          [dataUpdate.id]: { id: dataUpdate.id, isEdit: false },
        }));
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleAddSave = async (newJob) => {
    try {
      if (getAccessTokenAdmin()) {
        console.log("newJob-----", newJob);
        const errors = validateCareer(newJob);
        console.log("errors", errors);
        if (errors) {
          setInputError(errors);
          return;
        }
        await addJobsApi(newJob);
        fetchAllPosition();
        setIsAddOpen(false);
        setInputError([]);
        toast.success("add career success");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleCancel = (id) => {
    setIsEditOpen((prev) => ({
      ...prev,
      [id]: { id: id, isEdit: false },
    }));
    fetchAllPosition();
  };

  // console.log("allPosition", allPosition);
  // console.log("input", input);
  // console.log("inputError", inputError);
  // console.log("isEditOpen", isEditOpen);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-8">
        <button className="invisible">เพิ่มตำแหน่งงาน</button>
        <HeaderTextAdmin>จัดการตำแหน่งรับสมัครงาน</HeaderTextAdmin>
        <button
          onClick={handleAddClick}
          className="text-ms-gray hover:underline"
        >
          เพิ่มตำแหน่งงาน
        </button>
      </div>

      <div className="w-8/12 mx-auto my-8">
        <h2 className="text-ms-gray text-xl font-light px-8">
          ตำแหน่งที่รับสมัคร
        </h2>
        <div>
          <ul className="list-disc text-ms-gray font-th font-light space-y-4 mt-3">
            {allPosition?.map((job, index) => (
              <li
                key={job.id}
                className="grid grid-cols-3 hover:shadow-md items-center px-8 py-4 bg-[#e8eae6] rounded-2xl"
              >
                {isEditOpen[job.id]?.isEdit ? (
                  <div>
                    <Input
                      value={job.name}
                      onChange={(e) => handleChange(e, index)}
                      name="name"
                      error={inputError.name}
                    />
                  </div>
                ) : (
                  <span className="font-normal">
                    {index + 1}. {job.name}
                  </span>
                )}

                <div className="flex justify-center">
                  {isEditOpen[job.id]?.isEdit ? (
                    <div className="w-[11rem]">
                      <Input
                        value={job.quantity}
                        onChange={(e) => handleChange(e, index)}
                        name="quantity"
                        typeInput="number"
                        error={inputError.quantity}
                      />
                    </div>
                  ) : (
                    <span>
                      <span className="font-normal">จำนวน: </span>
                      {job.quantity} อัตรา
                    </span>
                  )}
                </div>

                {isEditOpen[job.id]?.isEdit ? (
                  <div className="space-x-2 flex justify-end">
                    <ButtonSmall
                      onClick={() => handleUpdateSave(job)}
                      btn="active"
                    >
                      บันทึก
                    </ButtonSmall>
                    <ButtonSmall
                      onClick={() => handleCancel(job.id)}
                      btn="success"
                    >
                      ยกเลิก
                    </ButtonSmall>
                  </div>
                ) : (
                  <div className="space-x-2 flex justify-end">
                    <ButtonSmall
                      onClick={() => handleEditClick(job.id)}
                      btn="success"
                    >
                      แก้ไข
                    </ButtonSmall>
                    <ButtonSmall
                      onClick={() => handleDeleteClick(job.id)}
                      btn="success"
                    >
                      ลบ
                    </ButtonSmall>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        width={40}
        title="เพิ่มตำแหน่งงาน"
        open={isAddOpen}
        onClose={() => {
          setIsAddOpen(false);
          setInputError([]);
        }}
      >
        <AdminCareer
          onSave={handleAddSave}
          onDelete={handleDeleteClick}
          isAdding={true}
          inputError={inputError}
          setInputError={setInputError}
          setIsAddOpen={setIsAddOpen}
        />
      </Modal>

      <Modal
        width={35}
        title="ยืนยันการลบ"
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <div className="py-4 px-12">
          <div className="flex justify-center gap-4 mb-3">
            <Button btn="active" onClick={confirmDelete}>
              ยืนยัน
            </Button>
            <Button btn="success" onClick={() => setIsDeleteOpen(false)}>
              ยกเลิก
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
