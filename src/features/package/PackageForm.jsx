import { useState } from "react";
import ButtonSmall from "../../components/BottonSmall";
import Modal from "../../components/Modal";

export default function PackageForm({ packages }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border border-ms-gold rounded-[32px] transition duration-200
          p-4 hover:shadow-[4px_4px_20px_rgba(0,0,0,0.2)] hover:border-ms-green"
        role="button"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-slate-400 rounded-3xl overflow-hidden">
            <img
              src={packages.image}
              alt={packages.title}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="flex items-center gap-4 p-4 flex-col">
            <h1 className="text-ms-gray text-xl font-light">
              {packages.title}
            </h1>
            <ButtonSmall btn="success">ดูแพ็กเกจ</ButtonSmall>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={packages.title}
        width={60}
      >
        <div className="flex gap-2 p-6">
          <div className="bg-slate-400 rounded-3xl overflow-hidden">
            <img
              src={packages.image}
              alt={packages.title}
              className="w-[60rem] aspect-square object-cover"
            />
          </div>

          <div className="flax gap-4 p-4">
              <p className="indent-6 mb-4">{packages.detail}</p>
              <span className="font-th font-light">ใช้ได้ถึง 30/12/2567</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
