import { useState } from "react";
import Modal from "../../../components/Modal";


export default function CardClinicItem({ data }) {

  const [open, setOpen ] = useState(false)

  return (
    <>
    <button onClick={() => setOpen(true)} className="flex items-center gap-3 px-6 py-4 rounded-3xl transition duration-300
    border border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]">
        <div className="w-12">
            <img className="w-full" src={data.icon} alt={data.nameClinic} />
        </div>
        <h1 className="font-light text-lg">{data.nameClinic}</h1>
    </button>

    <Modal open={open} onClose={() => setOpen(false)} title={data.nameClinic} width={60}>
      <div className="flex gap-5 px-4 pb-6">
        <div className="w-96 overflow-hidden rounded-3xl flex-shrink-0">
            <img className="w-full" src={data.image} alt={data.nameClinic} />
        </div>
        <p className="font-light">{data.detail}</p>
      </div>
    </Modal>
    </>
  )
}
