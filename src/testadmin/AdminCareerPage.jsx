// import { useState } from "react";
// import Modal from "../components/Modal"; // นำเข้า Modal ที่มีอยู่
// // import { toast } from "react-toastify";
// import AdminCareer from "../testadmin/AdminCareer";

// const initialJobs = [
//   { id: 1, name: "พนักงานฝ่ายการตลาด", quantity: 1 },
//   { id: 2, name: "ผู้จัดการแผนกคลินิก", quantity: 2 },
//   { id: 3, name: "พนักงานช่วยเหลือคนไข้", quantity: 3 },
//   { id: 4, name: "พยาบาลวิชาชีพ OPD", quantity: 2 },
// ];

// export default function AdminCareerPage() {
//   const [jobs, setJobs] = useState(initialJobs); // เก็บข้อมูลตำแหน่งงาน
//   const [selectedJob, setSelectedJob] = useState(null); // เก็บข้อมูลตำแหน่งงานที่ถูกเลือก
//   const [modalTitle, setModalTitle] = useState(""); // เก็บ title ของ modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const handleEditClick = (job) => {
//     setSelectedJob(job);
//     setModalTitle("แก้ไขตำแหน่งงาน");
//     setIsModalOpen(true);
//   };

//   const handleDeleteClick = (job) => {
//     setSelectedJob(job);
//     setIsDeleteModalOpen(true);
//   };

//   const confirmDelete = () => {
//     setJobs(jobs.filter((job) => job.id !== selectedJob.id));
//     setIsDeleteModalOpen(false);
//   };

//   const handleAddClick = () => {
//     setSelectedJob(null);
//     setModalTitle("เพิ่มตำแหน่งงาน");
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedJob(null);
//   };

//   const handleJobUpdate = (updatedJob) => {
//     setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
//     handleModalClose();
//   };

//   const handleJobAdd = (newJob) => {
//     setJobs([...jobs, newJob]);
//     handleModalClose();
//   };

//   return (
//     <div className="min-h-[75vh] flex flex-col items-center py-8">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full contents ">
//         <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
//           ร่วมงานกับเรา
//         </h1>
//         <div className="mb-6 w-[770px] max-w-full flex flex-col justify-start">
//           <h2 className="text-[#767676] text-xl font-normal mb-2">
//             ตำแหน่งที่รับสมัคร
//           </h2>
//           <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5">
//             {jobs.map((job, index) => (
//               <li key={job.id} className="flex justify-between">
//                 <span>
//                   {index + 1}. {job.name} {job.quantity} อัตรา
//                 </span>
//                 <span className="space-x-1">
//                   <button
//                     onClick={() => handleEditClick(job)}
//                     className="text-[#31A172] hover:text-yellow-500"
//                   >
//                     แก้ไข
//                   </button>

//                   <button className="text-[#767676]">/</button>

//                   <button
//                     onClick={() => handleDeleteClick(job)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     ลบ
//                   </button>
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={handleAddClick}
//             className="text-[#767676] hover:text-[#31A172] mt-4"
//           >
//             เพิ่มตำแหน่งงาน
//           </button>
//         </div>
//       </div>

//       <Modal
//         width={40}
//         title={modalTitle}
//         open={isModalOpen}
//         onClose={handleModalClose}
//       >
//         <AdminCareer
//           job={selectedJob}
//           onSave={selectedJob ? handleJobUpdate : handleJobAdd}
//           onClose={handleModalClose}
//         />
//       </Modal>

//       <Modal
//         width={35}
//         title="ยืนยันการลบ"
//         open={isDeleteModalOpen}
//         onClose={() => setIsDeleteModalOpen(false)}
//       >
//         <div className="p-4">
//           <p className="text-lg font-medium mb-4">
//             คุณต้องการลบตำแหน่งงานนี้หรือไม่?
//           </p>
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={confirmDelete}
//               className="font-th w-[100px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//             >
//               ยืนยัน
//             </button>
//             <button
//               onClick={() => setIsDeleteModalOpen(false)}
//               className="font-th w-[100px] h-[40px] bg-gray-300 rounded-full text-xl hover:bg-gray-400 transition duration-500"
//             >
//               ยกเลิก
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// **************
// import { useState } from "react";
// import Modal from "../components/Modal";
// import AdminCareer from "../testadmin/AdminCareer";

// const initialJobs = [
//   { id: 1, name: "พนักงานฝ่ายการตลาด", quantity: 1 },
//   { id: 2, name: "ผู้จัดการแผนกคลินิก", quantity: 2 },
//   { id: 3, name: "พนักงานช่วยเหลือคนไข้", quantity: 3 },
//   { id: 4, name: "พยาบาลวิชาชีพ OPD", quantity: 2 },
// ];

// export default function AdminCareerPage() {
//   const [jobs, setJobs] = useState(initialJobs);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [modalTitle, setModalTitle] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   // const handleEditClick = (job) => {
//   //   setSelectedJob(job);
//   //   setModalTitle("แก้ไขตำแหน่งงาน");
//   //   setIsModalOpen(true);
//   // };

//   // const handleDeleteClick = (job) => {
//   //   setSelectedJob(job);
//   //   setIsDeleteModalOpen(true);
//   // };

//   const confirmDelete = () => {
//     setJobs(jobs.filter((job) => job.id !== selectedJob.id));
//     setIsDeleteModalOpen(false);
//   };

//   const handleAddClick = () => {
//     setSelectedJob({ id: Date.now(), name: "", quantity: 1 });
//     setModalTitle("เพิ่มตำแหน่งงาน");
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedJob(null);
//   };

//   const handleJobSave = (job) => {
//     if (job.id) {
//       setJobs(jobs.map((j) => (j.id === job.id ? job : j)));
//     } else {
//       job.id = Date.now();
//       setJobs([...jobs, job]);
//     }
//     handleModalClose();
//   };

//   return (
//     <div className="min-h-[75vh] flex flex-col items-center py-8">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full contents ">
//         <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
//           ร่วมงานกับเรา
//         </h1>
//         <div className="mb-6 w-[770px] max-w-full flex flex-col justify-start">
//           <h2 className="text-[#767676] text-xl font-normal mb-2">
//             ตำแหน่งที่รับสมัคร
//           </h2>
//           <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5">
//             {jobs.map((job, index) => (
//               <li key={job.id} className="flex justify-between">
//                 <span>
//                   {index + 1}. {job.name} {job.quantity} อัตรา
//                 </span>
//                 <span className="space-x-1">
//                   {/* <button
//                     onClick={() => handleEditClick(job)}
//                     className="text-[#31A172] hover:text-yellow-500"
//                   >
//                     แก้ไข
//                   </button>

//                   <button className="text-[#767676]">/</button>

//                   <button
//                     onClick={() => handleDeleteClick(job)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     ลบ
//                   </button> */}
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={handleAddClick}
//             className="text-[#767676] hover:text-[#31A172] mt-4"
//           >
//             แก้ไข
//           </button>
//           {/* <button className="text-[#31A172] hover:text-yellow-500">
//             แก้ไข
//           </button> */}
//         </div>
//       </div>

//       <Modal
//         width={40}
//         title={modalTitle}
//         open={isModalOpen}
//         onClose={handleModalClose}
//       >
//         <AdminCareer
//           job={selectedJob}
//           onSave={handleJobSave}
//           onClose={handleModalClose}
//         />
//       </Modal>

//       <Modal
//         width={35}
//         title="ยืนยันการลบ"
//         open={isDeleteModalOpen}
//         onClose={() => setIsDeleteModalOpen(false)}
//       >
//         <div className="p-4">
//           <p className="text-lg font-medium mb-4">
//             คุณต้องการลบตำแหน่งงานนี้หรือไม่?
//           </p>
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={confirmDelete}
//               className="font-th w-[100px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//             >
//               ยืนยัน
//             </button>
//             <button
//               onClick={() => setIsDeleteModalOpen(false)}
//               className="font-th w-[100px] h-[40px] bg-gray-300 rounded-full text-xl hover:bg-gray-400 transition duration-500"
//             >
//               ยกเลิก
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// ********************************
// import { useState } from "react";
// import Modal from "../components/Modal";
// import AdminCareer from "./AdminCareer";

// const initialJobs = [
//   { id: 1, name: "พนักงานฝ่ายการตลาด", quantity: 1 },
//   { id: 2, name: "ผู้จัดการแผนกคลินิก", quantity: 2 },
//   { id: 3, name: "พนักงานช่วยเหลือคนไข้", quantity: 3 },
//   { id: 4, name: "พยาบาลวิชาชีพ OPD", quantity: 2 },
// ];

// export default function AdminCareerPage() {
//   const [jobs, setJobs] = useState(initialJobs);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
//   const [jobToDelete, setJobToDelete] = useState(null);
//   const [isAddOpen, setIsAddOpen] = useState(false);

//   const handleEditClick = () => {
//     setIsEditOpen(true);
//   };

//   const handleAddClick = () => {
//     setIsAddOpen(true);
//   };

//   const handleDeleteClick = (id) => {
//     setJobToDelete(id);
//     setIsEditOpen(false);
//     setTimeout(() => setIsDeleteOpen(true)); // เปิด Modal ยืนยันการลบหลังจาก Modal แก้ไขปิดแล้ว ไม่ต้องตั้งเวลาก็ได้
//   };

//   const confirmDelete = () => {
//     setJobs(jobs.filter((job) => job.id !== jobToDelete));
//     setIsDeleteOpen(false);
//     setJobToDelete(null);
//   };

//   const handleSave = (updatedJobs) => {
//     setJobs(updatedJobs);
//     setIsEditOpen(false);
//     setIsAddOpen(false);
//   };

//   const handleAddSave = (newJob) => {
//     setJobs([...jobs, newJob]);
//     setIsAddOpen(false);
//   };

//   // const handleSubmit = () => {}

//   return (
//     <div className="min-h-[75vh] flex justify-center items-center py-8">
//       <div className="bg-[#E3E7E0] shadow-md rounded-lg p-6 w-1/2 container ">
//         <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
//           แก้ไขหน้าร่วมงานกับเรา
//         </h1>

//         <div className="w-[770px] max-w-full flex flex-col justify-start">
//           <div className="flex justify-between">
//             <h2 className="text-[#767676] text-xl font-normal ">
//               ตำแหน่งที่รับสมัคร
//             </h2>
//             <div className=" space-x-4">
//               <button
//                 onClick={handleAddClick}
//                 className="text-[#767676] hover:text-[#31A172]"
//               >
//                 เพิ่มตำแหน่งงาน
//               </button>
//               <button
//                 onClick={handleEditClick}
//                 className="text-[#767676] hover:text-[#31A172]"
//               >
//                 แก้ไขตำแหน่งงาน
//               </button>
//             </div>
//           </div>
//           <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5 mt-2">
//             {jobs.map((job, index) => (
//               <li key={job.id} className="flex justify-between">
//                 <span>
//                   {index + 1}. {job.name} {job.quantity} อัตรา
//                 </span>
//                 <span className="space-x-2"></span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <Modal
//         width={40}
//         title="แก้ไขตำแหน่งงาน"
//         open={isEditOpen}
//         onClose={() => setIsEditOpen(false)}
//       >
//         <AdminCareer
//           jobs={jobs}
//           onSave={handleSave}
//           onDelete={handleDeleteClick}
//         />
//       </Modal>

//       <Modal
//         width={40}
//         title="เพิ่มตำแหน่งงาน"
//         open={isAddOpen}
//         onClose={() => setIsAddOpen(false)}
//       >
//         <AdminCareer
//           jobs={jobs}
//           onSave={handleAddSave}
//           onDelete={handleDeleteClick}
//           isAdding={true}
//         />
//       </Modal>

//       <Modal
//         width={35}
//         title="ยืนยันการลบ"
//         open={isDeleteOpen}
//         onClose={() => setIsDeleteOpen(false)}
//       >
//         <div className="p-4">
//           <p className="text-lg font-medium mb-4">
//             คุณต้องการลบตำแหน่งงานนี้หรือไม่?
//           </p>
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={confirmDelete}
//               className="font-th w-[100px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//             >
//               ยืนยัน
//             </button>
//             <button
//               onClick={() => setIsDeleteOpen(false)}
//               className="font-th w-[100px] h-[40px] bg-gray-300 rounded-full text-xl hover:bg-gray-400 transition duration-500"
//             >
//               ยกเลิก
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// *********************************************
import { useState } from "react";
import Modal from "../components/Modal";
import AdminCareer from "./AdminCareer";
import validateCareer from "./validate";

const initialJobs = [
  { id: 1, name: "พนักงานฝ่ายการตลาด", quantity: 1 },
  { id: 2, name: "ผู้จัดการแผนกคลินิก", quantity: 2 },
  { id: 3, name: "พนักงานช่วยเหลือคนไข้", quantity: 3 },
  { id: 4, name: "พยาบาลวิชาชีพ OPD", quantity: 2 },
];

export default function AdminCareerPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [inputError, setInputError] = useState({});

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleAddClick = () => {
    setIsAddOpen(true);
  };

  const handleDeleteClick = (id) => {
    setJobToDelete(id);
    setIsEditOpen(false);
    setTimeout(() => setIsDeleteOpen(true)); // เปิด Modal ยืนยันการลบหลังจาก Modal แก้ไขปิดแล้ว ไม่ต้องตั้งเวลาก็ได้
  };

  const confirmDelete = () => {
    setJobs(jobs.filter((job) => job.id !== jobToDelete));
    setIsDeleteOpen(false);
    setJobToDelete(null);
  };

  const handleSave = (updatedJobs) => {
    setJobs(updatedJobs);
    setIsEditOpen(false);
    setIsAddOpen(false);
  };

  const handleAddSave = (newJob) => {
    const errors = validateCareer(newJob);
    if (errors) {
      setInputError(errors);
      return;
    }
    setJobs([...jobs, newJob]);
    setIsAddOpen(false);
    setInputError({});
  };

  return (
    <div className="min-h-[75vh] flex justify-center items-center py-8">
      <div className="bg-[#E3E7E0] shadow-md rounded-lg p-6 w-1/2 container ">
        <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
          แก้ไขหน้าร่วมงานกับเรา
        </h1>

        <div className="w-[770px] max-w-full flex flex-col justify-start">
          <div className="flex justify-between">
            <h2 className="text-[#767676] text-xl font-normal ">
              ตำแหน่งที่รับสมัคร
            </h2>
            <div className=" space-x-4">
              <button
                onClick={handleAddClick}
                className="text-[#767676] hover:text-[#31A172]"
              >
                เพิ่มตำแหน่งงาน
              </button>
              <button
                onClick={handleEditClick}
                className="text-[#767676] hover:text-[#31A172]"
              >
                แก้ไขตำแหน่งงาน
              </button>
            </div>
          </div>
          <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5 mt-2">
            {jobs.map((job, index) => (
              <li key={job.id} className="flex justify-between">
                <span>
                  {index + 1}. {job.name} {job.quantity} อัตรา
                </span>
                <span className="space-x-2"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        width={40}
        title="แก้ไขตำแหน่งงาน"
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <AdminCareer
          jobs={jobs}
          onSave={handleSave}
          onDelete={handleDeleteClick}
        />
      </Modal>

      <Modal
        width={40}
        title="เพิ่มตำแหน่งงาน"
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      >
        <AdminCareer
          jobs={jobs}
          onSave={handleAddSave}
          onDelete={handleDeleteClick}
          isAdding={true}
          inputError={inputError}
        />
      </Modal>

      <Modal
        width={35}
        title="ยืนยันการลบ"
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <div className="p-4">
          <p className="text-lg font-medium mb-4">
            คุณต้องการลบตำแหน่งงานนี้หรือไม่?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={confirmDelete}
              className="font-th w-[100px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
            >
              ยืนยัน
            </button>
            <button
              onClick={() => setIsDeleteOpen(false)}
              className="font-th w-[100px] h-[40px] bg-gray-300 rounded-full text-xl hover:bg-gray-400 transition duration-500"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
