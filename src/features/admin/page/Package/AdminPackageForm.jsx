import { useState } from "react";
import ButtonSmall from "../../../../components/BottonSmall";
import Modal from "../../../../components/Modal";
import EditDeletePackage from "./EditDelete";

export default function AdminPackageForm({ packages, onDelete }) {
  const [open, setOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(packages);

  const [isDelete, setIsDelete] = useState(false);

  const handleUpdatePackage = (updatePackage) => {
    setCurrentPackage(updatePackage);
    setOpen(false);
  };

  const handleDeletePackage = () => {
    onDelete(currentPackage.id);
    setOpen(false);
  };

  return (
    <>
      <div
        className='border border-ms-gold rounded-[32px] transition duration-200
          p-4 hover:shadow-[4px_4px_20px_rgba(0,0,0,0.2)] hover:border-ms-green'
      >
        <div className='flex items-center gap-2 flex-col'>
          <div className='bg-slate-400 rounded-3xl overflow-hidden'>
            <img
              src={
                currentPackage.image ||
                "https://indiaeducationdiary.in/wp-content/uploads/2021/02/SD-default-image.png"
              }
              alt={currentPackage.title}
              className='w-full aspect-square object-cover'
            />
          </div>

          <div className='flex items-center gap-4 p-4 flex-col'>
            <h1 className='text-ms-gray text-xl font-light'>
              {currentPackage.title}
            </h1>
            {currentPackage.promotionDate && (
              <ButtonSmall btn='success'>
                ใช้ได้ถึง : {currentPackage.promotionDate}
              </ButtonSmall>
            )}
            {currentPackage.price && (
              <ButtonSmall btn='success'>
                ราคา : {currentPackage.price} บาท
              </ButtonSmall>
            )}
            <ButtonSmall btn='success' onClick={() => setOpen(true)}>
              แก้ไข
            </ButtonSmall>
          </div>
        </div>
      </div>

      {isDelete ? (
        <Modal
          title='ต้องการที่จะลบแพ็กเกจนี้หรือไม่'
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className='flex justify-around'>
            <button
              className='w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]'
              onClick={handleDeletePackage}
            >
              ยืนยัน
            </button>
            <button
              className='w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white'
              onClick={() => setIsDelete(false)}
            >
              ยกเลิก
            </button>
          </div>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={currentPackage.title || ""}
          width={60}
        >
          {currentPackage && (
            <EditDeletePackage
              initialPackage={currentPackage}
              onUpdate={handleUpdatePackage}
              setIsDelete={setIsDelete}
            />
          )}
        </Modal>
      )}
    </>
  );
}
