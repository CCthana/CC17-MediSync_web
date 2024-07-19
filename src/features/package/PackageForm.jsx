import { useState } from "react";
import ButtonSmall from "../../components/BottonSmall";
import Modal from "../../components/Modal";
import SearchBold from "../../components/SearchBold";

export default function PackageForm({ packages, search }) {
  const [open, setOpen] = useState(false);

  console.log('packages', packages)

  return (
    <>
      <div
        className="border border-ms-gold rounded-[32px] transition duration-200
          p-2 hover:shadow-[4px_4px_20px_rgba(0,0,0,0.2)] hover:border-ms-green"
        role="button"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-slate-400 rounded-3xl overflow-hidden">
            <img
              src={packages.image}
              alt={packages.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="flex items-center gap-4 p-4 flex-col">
            <h1 className="text-ms-gray text-xl font-light">
              <SearchBold search={search} data={packages.name} />
            </h1>
            <ButtonSmall btn="success">ดูแพ็กเกจ</ButtonSmall>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={packages.name}
        width={60}
      >
        <div className="flex gap-2 p-6">
          <div className="bg-slate-400 w-[60rem] rounded-3xl overflow-hidden">
            <img
              src={packages?.image}
              alt={packages?.name}
              className="w-full h-full aspect-square object-cover"
            />
          </div>

          <div className="flax gap-4 p-4">
              <p className="indent-6 mb-4">{packages?.detail}</p>
              <p className=" mb-4 text-ms-green">{`ราคา package ${packages?.price.toLocaleString()} บาท`}</p>
              <span className="font-th font-light">{`สามารถใช้ได้ถึง ${new Date(packages?.expireDate).toLocaleDateString("en-GB")}`}</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
