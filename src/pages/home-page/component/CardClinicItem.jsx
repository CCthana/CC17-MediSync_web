import { useState } from "react";
import ModalInfo from "../../../components/ModalInfo";
import SpinnerCard from "../../../components/SpinnerCard";


export default function CardClinicItem({ data, isClinicLoading }) {

  const [open, setOpen ] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center gap-3 px-6 py-4 rounded-3xl transition duration-300
      border  bg-[#e8eae6] border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)] w-[450px]">
        { isClinicLoading
          ? <SpinnerCard />
          : <>
              <div className="w-12 h-12">
                  <img className="w-full" src={data.icon} alt={data.nameClinic} />
              </div>
              <h1 className="font-light text-lg">{data.name}</h1>
            </>}
      </button>

      <ModalInfo open={open} onClose={() => setOpen(false)} title={data.nameClinic} width={60}>
      <div className='flex flex-col'>
        <div className="overflow-hidden rounded-3xl">
          <img src={data.image} alt={data.name} className='w-full' />
        </div>

        <div className='p-4'>
          <h1 className='text-2xl font-light my-2'>{data.name}</h1>
          <p className='font-light text-lg'>
            {data.detail}
          </p>
        </div>
      </div>
      </ModalInfo>

    </>
  )
}
