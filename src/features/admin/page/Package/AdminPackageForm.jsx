import { useState } from "react";
import ButtonSmall from "../../../../components/BottonSmall";
import EditDeletePackage from "./EditDelete";
import ModalInfo from "../../../../components/ModalInfo";
import SearchBold from "../../../../components/SearchBold";
import adminApi from "../../../../apis/admin";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

export default function AdminPackageForm({ packages, search, fetchPackage }) {
  const [open, setOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(packages);
  const [showFullText, setShowFullText] = useState(false);

  const [isDelete, setIsDelete] = useState(false);

  const handleUpdatePackage = (updatePackage) => {
    setCurrentPackage(updatePackage);
    setOpen(false);
  };

  const handleDeletePackage = async () => {
    try {
      await adminApi.deletePackage(currentPackage.id);
      fetchPackage();
      setOpen(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  console.log("currentPackage", currentPackage);

  return (
    <>
      <div className="p-4 flex gap-4 bg-[#e8eae6] rounded-3xl hover:shadow-[0px_0px_12px_rgba(0,0,0,0.2)]">
        <div className="bg-slate-400 min-w-[13rem] w-[13rem] h-[13rem] rounded-2xl overflow-hidden">
          <img
            src={
              currentPackage.image ||
              "https://indiaeducationdiary.in/wp-content/uploads/2021/02/SD-default-image.png"
            }
            alt={currentPackage.name}
            className="w-full h-full aspect-square object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 p-2">
          <h1 className="text-ms-gray text-2xl font-light">
            <SearchBold search={search} data={currentPackage.name} />
          </h1>

          <div className="-mt-1 indent-4">
            <span className="font-light">
              {showFullText
                ? `${currentPackage.detail} `
                : `${currentPackage.detail.substring(0, 180)}... `}
            </span>
            {!showFullText ? (
              <span
                className="text-ms-green underline cursor-pointer"
                onClick={toggleShowFullText}
              >
                อ่านต่อ
              </span>
            ) : (
              <span
                className="text-ms-green underline cursor-pointer"
                onClick={toggleShowFullText}
              >
                ปิด
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            {currentPackage.price && (
              <span>ราคา: {currentPackage.price.toLocaleString()} บาท</span>
            )}

            {currentPackage.expireDate && (
              <span className="font-light">
                ใช้ได้ถึง:&#32;
                {new Date(currentPackage.expireDate).toLocaleDateString(
                  "en-GB"
                )}
              </span>
            )}
          </div>

          <div className="space-x-3">
            <ButtonSmall btn="active" onClick={() => setOpen(true)}>
              แก้ไข
            </ButtonSmall>
            <ButtonSmall btn="success" onClick={() => setIsDelete(true)}>
             ลบ package
            </ButtonSmall>
          </div>
        </div>
      </div>

      {isDelete ? (
        <Modal
          title="ต้องการที่จะลบ package นี้หรือไม่"
          open={isDelete}
          onClose={() => setIsDelete(false)}
        >
          <div className="flex justify-center gap-8 mb-4">
            <Button
              btn="active"
              onClick={handleDeletePackage}
              width="w-[10rem]"
            >
              ยืนยัน
            </Button>
            <Button
              width="w-[10rem]"
              btn="success"
              onClick={() => setIsDelete(false)}
            >
              ยกเลิก
            </Button>
          </div>
        </Modal>
      ) : (
        <ModalInfo
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
              setOpen={setOpen}
            />
          )}
        </ModalInfo>
      )}
    </>
  );
}
