// import { useState } from "react";

// export default function AdminCareer() {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 space-y-4">
//       <h1>ทดสอบการแก้ไข</h1>
//       <div>
//         <div className="container rounded-3xl h-[70vh] border border-ms-gold bg-[#E3E7E0]">
//           {/* <div className=" space-x-9"> */}
//           <div className="font-th h-16 flex items-center justify-around rounded-3xl mx-96 bg-white">
//             <h1> 1. </h1>
//             <h1> ชื่อ </h1>
//             <h1> จำนวน </h1>

//             <button onClick={handleClick}> แก้ไข </button>
//           </div>

//           <div
//             className={`h-96 px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 mx-96 ${
//               open ? "block opacity-100" : "hidden "
//             } animatedbox `}
//           >
//             {/* <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div> */}

//             <div className="font-th h-16 flex items-center justify-between rounded-3xl">
//               <div>
//                 <h1>ชื่อ</h1>
//                 <input className="h-12  border border-ms-gold rounded-full p-4 text-center focus:outline-ms-green" />
//               </div>

//               <div>
//                 <h1>จำนวน</h1>
//                 <input className="h-12 border border-ms-gold rounded-full p-4 text-center  focus:outline-ms-green" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// }

// import { useState } from "react";

// export default function AdminCareer() {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 space-y-4 bg-gray-100">
//       <h1 className="text-2xl font-bold text-gray-700">แก้ไขหน้า Career</h1>
//       <div className="rounded-3xl h-[75vh] border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-auto ">
//         <div className="font-th h-16 flex items-center justify-around rounded-3xl bg-white shadow-md px-6">
//           <h1 className="text-lg font-semibold">1.</h1>
//           <h1 className="text-lg font-semibold">ชื่อ: แผนกศัลยกรรม</h1>
//           <h1 className="text-lg font-semibold">จำนวน: 20</h1>

//           <div className=" space-x-2">
//             <button
//               onClick={handleClick}
//               className="bg-ms-gold text-white px-4 py-2 rounded-full hover:bg-ms-gold-dark transition duration-300"
//             >
//               แก้ไข
//             </button>
//             <button className="bg-ms-gold text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
//               ลบ
//             </button>
//           </div>
//         </div>

//         <div
//           className={` duration-500 ease-in-out mx-6 mt-4 ${
//             open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
//           }`}
//         >
//           <div className="bg-white rounded-3xl shadow-md p-6">
//             <div className="font-th h-16 flex items-center justify-around space-x-6">
//               <div className="flex flex-col">
//                 <label className="text-lg font-semibold">แก้ไขชื่อ</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full p-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="text"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="text-lg font-semibold">แก้ไขจำนวน</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full p-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="number"
//                 />
//               </div>
//             </div>

//             <div className=" flex justify-end gap-2 mt-6">
//               <div>
//                 <button className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500">
//                   ยืนยัน
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ***************** 01-07-67
// import { useState, useEffect } from "react";

// export default function AdminCareer({ job, onSave, onDelete, onClose }) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (job) {
//       setName(job.name);
//       setQuantity(job.quantity);
//     }
//   }, [job]);

//   const handleSave = () => {
//     onSave({ ...job, name, quantity });
//     onClose();
//   };

//   const handleDelete = () => {
//     onDelete(job.id);
//     onClose();
//   };

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className=" min-h-[350px] flex flex-col items-center bg-gray-100">
//       {/* <h1 className="text-2xl font-bold text-gray-700 mb-6">
//         แก้ไขหน้า Career
//       </h1> */}
//       <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
//         <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4">
//           <h1 className="text-lg font-semibold">1.</h1>
//           <h1 className="text-lg font-semibold">ชื่อ: {name}</h1>
//           <h1 className="text-lg font-semibold">จำนวน: {quantity}</h1>

//           <div className="space-x-2">
//             <button
//               onClick={handleClick}
//               className="bg-yellow-500 text-white hover:bg-ms-gold px-4 py-2 rounded-full hover:bg-ms-gold-dark transition duration-300"
//             >
//               แก้ไข
//             </button>
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
//             >
//               ลบ
//             </button>
//           </div>
//         </div>

//         <div
//           className={`duration-500 ease-in-out mt-4 ${
//             open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
//           }`}
//         >
//           <div className="bg-white rounded-3xl shadow-md p-6">
//             <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">ชื่อแผนก</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>

//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">จำนวน</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-4 mt-6">
//               <button
//                 onClick={handleSave}
//                 className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//               >
//                 ยืนยัน
//               </button>
//               <button
//                 onClick={handleClick}
//                 className="font-th w-[150px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//               >
//                 ยกเลิก
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ------------------------------------------
// import { useState, useEffect } from "react";
// import Modal from "../components/Modal";

// export default function AdminCareer({ job, onSave, onDelete, onClose }) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [open, setOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   useEffect(() => {
//     if (job) {
//       setName(job.name);
//       setQuantity(job.quantity);
//     }
//   }, [job]);

//   const handleSave = () => {
//     onSave({ ...job, name, quantity });
//     onClose();
//   };

//   const handleDelete = () => {
//     onDelete(job.id);
//     onClose();
//   };

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const openDeleteModal = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//   };

//   return (
//     <div className="min-h-[350px] flex flex-col items-center bg-gray-100">
//       <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
//         <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4">
//           <h1 className="text-lg font-semibold">1.</h1>
//           <h1 className="text-lg font-semibold">ชื่อ: {name}</h1>
//           <h1 className="text-lg font-semibold">จำนวน: {quantity}</h1>

//           <div className="space-x-2">
//             <button
//               onClick={handleClick}
//               className="bg-yellow-500 text-white hover:bg-ms-gold px-4 py-2 rounded-full hover:bg-ms-gold-dark transition duration-300"
//             >
//               แก้ไข
//             </button>
//             <button
//               onClick={openDeleteModal}
//               className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
//             >
//               ลบ
//             </button>
//           </div>
//         </div>

//         <div
//           className={`duration-500 ease-in-out mt-4 ${
//             open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
//           }`}
//         >
//           <div className="bg-white rounded-3xl shadow-md p-6">
//             <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">ชื่อแผนก</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>

//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">จำนวน</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-4 mt-6">
//               <button
//                 onClick={handleSave}
//                 className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//               >
//                 ยืนยัน
//               </button>
//               <button
//                 onClick={handleClick}
//                 className="font-th w-[150px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//               >
//                 ยกเลิก
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Modal
//         width={35}
//         title="ยืนยันการลบ"
//         open={isDeleteModalOpen}
//         onClose={closeDeleteModal}
//       >
//         <div className="p-4">
//           <p className="text-lg font-semibold mb-4">
//             คุณต้องการลบตำแหน่งงานนี้หรือไม่?
//           </p>
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={handleDelete}
//               className="font-th w-[100px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//             >
//               ยืนยัน
//             </button>
//             <button
//               onClick={closeDeleteModal}
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

// ******************
// import { useState, useEffect } from "react";
// // import Modal from "../components/Modal";

// export default function AdminCareer({ job, onSave, onClose }) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     if (job) {
//       setName(job.name);
//       setQuantity(job.quantity);
//     }
//   }, [job]);

//   const handleSave = () => {
//     onSave({ ...job, name, quantity });
//     onClose();
//   };

//   return (
//     <div className="min-h-[350px] flex flex-col items-center bg-gray-100">
//       <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
//         <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4">
//           <h1 className="text-lg font-semibold">1.</h1>
//           <h1 className="text-lg font-semibold">ชื่อ: {name}</h1>
//           <h1 className="text-lg font-semibold">จำนวน: {quantity}</h1>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6 mt-4">
//           <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//             <div className="flex flex-col w-full md:w-1/2">
//               <label className="text-lg font-semibold mb-2">ชื่อแผนก</label>
//               <input
//                 className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="flex flex-col w-full md:w-1/2">
//               <label className="text-lg font-semibold mb-2">จำนวน</label>
//               <input
//                 className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                 type="number"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-6">
//             <button
//               onClick={handleSave}
//               className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//             >
//               ยืนยัน
//             </button>
//             <button
//               onClick={onClose}
//               className="font-th w-[150px] h-[40px] bg-red-500 rounded-full text-white text-xl hover:bg-red-700 transition duration-500"
//             >
//               ยกเลิก
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ***************************
// import { useState, useEffect } from "react";

// export default function AdminCareer({ jobs, onSave, onDelete }) {
//   const [editJobs, setEditJobs] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setEditJobs(jobs);
//   }, [jobs]);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleSave = () => {
//     onSave(editJobs);
//   };

//   const handleChange = (index, field, value) => {
//     const updatedJobs = [...editJobs];
//     updatedJobs[index][field] = value;
//     setEditJobs(updatedJobs);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 space-y-4 bg-gray-100">
//       <h1 className="text-2xl font-bold text-gray-700">แก้ไขหน้า Career</h1>
//       <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
//         {editJobs.map((job, index) => (
//           <div key={job.id} className="mb-4">
//             <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4">
//               <h1 className="text-lg font-semibold">ชื่อ: {job.name}</h1>
//               <h1 className="text-lg font-semibold">จำนวน: {job.quantity}</h1>
//               <div className="space-x-2">
//                 <button onClick={handleClick}>แก้ไข</button>

//                 <button
//                   onClick={() => onDelete(job.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
//                 >
//                   ลบ
//                 </button>
//               </div>
//             </div>
//             <div
//               className={` duration-500 ease-in-out mx-6 mt-4 ${
//                 open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
//               }`}
//             >
//               <div className="bg-white rounded-3xl shadow-md p-6 mt-4">
//                 <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                   <div className="flex flex-col w-full md:w-1/2">
//                     <label className="text-lg font-semibold mb-2">
//                       ชื่อแผนก
//                     </label>
//                     <input
//                       className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                       type="text"
//                       value={job.name}
//                       onChange={(e) =>
//                         handleChange(index, "name", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div className="flex flex-col w-full md:w-1/2">
//                     <label className="text-lg font-semibold mb-2">จำนวน</label>
//                     <input
//                       className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                       type="number"
//                       value={job.quantity}
//                       onChange={(e) =>
//                         handleChange(index, "quantity", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="flex justify-end gap-4 mt-6">
//           <button
//             onClick={handleSave}
//             className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//           >
//             ยืนยัน
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ************************************
// import { useState, useEffect } from "react";

// export default function AdminCareer({
//   jobs,
//   onSave,
//   onDelete,
//   isAdding = false,
// }) {
//   const [editJobs, setEditJobs] = useState([]);
//   const [newJob, setNewJob] = useState({
//     id: Date.now(),
//     name: "",
//     quantity: 0,
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     if (!isAdding) {
//       setEditJobs(jobs);
//     }
//   }, [jobs, isAdding]);

//   const handleSave = () => {
//     if (isAdding) {
//       onSave(newJob);
//     } else {
//       onSave(editJobs);
//     }
//     setEditIndex(null); // รีเซ็ตหลังจากบันทึกแล้ว
//   };

//   const handleChange = (index, field, value) => {
//     const updatedJobs = [...editJobs];
//     updatedJobs[index][field] = value;
//     setEditJobs(updatedJobs);
//   };

//   const handleNewJobChange = (field, value) => {
//     setNewJob({ ...newJob, [field]: value });
//   };

//   const handleEditClick = (index) => {
//     setEditIndex(index);
//   };

//   return (
//     <div className="min-h-fit flex flex-col items-center py-2 space-y-4 bg-gray-100">
//       <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
//         {isAdding ? (
//           <div className="bg-white rounded-3xl shadow-md p-6 mt-4">
//             <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">ชื่อแผนก</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="text"
//                   value={newJob.name}
//                   onChange={(e) => handleNewJobChange("name", e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col w-full md:w-1/2">
//                 <label className="text-lg font-semibold mb-2">จำนวน</label>
//                 <input
//                   className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                   type="number"
//                   value={newJob.quantity}
//                   onChange={(e) =>
//                     handleNewJobChange("quantity", e.target.value)
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-4 mt-6">
//               <button
//                 onClick={handleSave}
//                 className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//               >
//                 ยืนยัน
//               </button>
//             </div>
//           </div>
//         ) : (
//           editJobs.map((job, index) => (
//             <div key={job.id} className="mb-4">
//               <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4">
//                 <h1 className="text-lg font-semibold">ชื่อ: {job.name}</h1>
//                 <h1 className="text-lg font-semibold">จำนวน: {job.quantity}</h1>
//                 <div className="space-x-2">
//                   <button
//                     onClick={() => handleEditClick(index)}
//                     className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300"
//                   >
//                     แก้ไข
//                   </button>
//                   <button
//                     onClick={() => onDelete(job.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
//                   >
//                     ลบ
//                   </button>
//                 </div>
//               </div>
//               {editIndex === index && (
//                 <div className="bg-white rounded-3xl shadow-md p-6 mt-4">
//                   <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                     <div className="flex flex-col w-full md:w-1/2">
//                       <label className="text-lg font-semibold mb-2">
//                         ชื่อแผนก
//                       </label>
//                       <input
//                         className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                         type="text"
//                         value={job.name}
//                         onChange={(e) =>
//                           handleChange(index, "name", e.target.value)
//                         }
//                       />
//                     </div>
//                     <div className="flex flex-col w-full md:w-1/2">
//                       <label className="text-lg font-semibold mb-2">
//                         จำนวน
//                       </label>
//                       <input
//                         className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
//                         type="number"
//                         value={job.quantity}
//                         onChange={(e) =>
//                           handleChange(index, "quantity", e.target.value)
//                         }
//                       />
//                     </div>
//                   </div>
//                   {editIndex !== null && (
//                     <div className="flex justify-end gap-4 mt-6">
//                       <button
//                         onClick={handleSave}
//                         className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
//                       >
//                         ยืนยัน
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// ************************************************
import { useState, useEffect } from "react";

export default function AdminCareer({
  jobs,
  onSave,
  onDelete,
  isAdding,
  inputError,
}) {
  const [editJobs, setEditJobs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newJob, setNewJob] = useState({ name: "", quantity: "" });

  useEffect(() => {
    setEditJobs(jobs);
  }, [jobs]);

  const handleSave = () => {
    onSave(editJobs);
    setEditIndex(null);
  };

  const handleChange = (index, field, value) => {
    const updatedJobs = [...editJobs];
    updatedJobs[index][field] = value;
    setEditJobs(updatedJobs);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleAddJob = () => {
    onSave(newJob);
    setNewJob({ name: "", quantity: "" });
  };

  return (
    <div className="min-h-fit flex flex-col items-center py-2 space-y-4 bg-gray-100">
      <div className="rounded-3xl border border-ms-gold bg-[#E3E7E0] shadow-lg p-6 w-full max-w-3xl">
        {isAdding ? (
          <div className="mb-4">
            <div className="font-th flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2">ชื่อแผนก</label>
                <input
                  className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
                  type="text"
                  value={newJob.name}
                  onChange={(e) =>
                    setNewJob({ ...newJob, name: e.target.value })
                  }
                />
                {inputError?.name && (
                  <p className="text-red-500 text-sm">{inputError.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2">จำนวน</label>
                <input
                  className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
                  type="number"
                  value={newJob.quantity}
                  onChange={(e) =>
                    setNewJob({ ...newJob, quantity: e.target.value })
                  }
                />
                {inputError?.quantity && (
                  <p className="text-red-500 text-sm">{inputError.quantity}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleAddJob}
                className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        ) : (
          editJobs.map((job, index) => (
            <div key={job.id} className="mb-4">
              <div className="font-th flex items-center justify-between rounded-3xl bg-white shadow-md px-6 py-4 ">
                <h1 className="text-lg font-semibold">ชื่อ: {job.name}</h1>

                <div className="space-x-8 flex items-center ">
                  <h1 className="text-lg font-semibold">
                    จำนวน: {job.quantity}
                  </h1>
                  <div className=" space-x-2 flex justify-center ">
                    <button
                      onClick={() => handleEditClick(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => onDelete(job.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </div>
              {editIndex === index && (
                <div className="bg-white rounded-3xl shadow-md p-6 mt-4">
                  <div className="font-th flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-6 space-y-4 md:space-y-0">
                    <div className="flex flex-col w-full md:w-1/2">
                      <label className="text-lg font-semibold mb-2">
                        ชื่อแผนก
                      </label>
                      <input
                        className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
                        type="text"
                        value={job.name}
                        onChange={(e) =>
                          handleChange(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                      <label className="text-lg font-semibold mb-2">
                        จำนวน
                      </label>
                      <input
                        className="h-12 border border-ms-gold rounded-full px-4 text-center focus:outline-none focus:ring-2 focus:ring-ms-green transition duration-300"
                        type="number"
                        value={job.quantity}
                        onChange={(e) =>
                          handleChange(index, "quantity", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {editIndex !== null && (
                    <div className="flex justify-end gap-4 mt-6">
                      <button
                        onClick={handleSave}
                        className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] transition duration-500"
                      >
                        ยืนยัน
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
