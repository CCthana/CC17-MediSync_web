
import FollowUs from "../../components/FollowUs";
import logoMediSync from '../../assets/logos/MediSync-2.svg'
import FooterItem from "./FooterItem";

import AdminFormLoginPage from "../../features/admin/page/AdminFormLoginPage";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function Footer() {

  const menuList1 = [
    { id: 1, text: "ค้นหาแผนก/คลินิก", to: '/department'},
    { id: 2, text: "ค้นหาแพทย์", to: '/doctor'},
    { id: 3, text: "แพ็กเกจตรวจสุขภาพ", to: '/package'},
    { id: 4, text: "ติดต่อเรา", to: '/contact'},
    { id: 5, text: "ร่วมงานกับเรา", to: '/contact'},
    { id: 6, text: "ข้อมูลโรงพยาบาล", to: '/contact'}
  ]

  const [ open, setOpen ] = useState(false)

  return (
    <footer className="flex flex-col gap-6 mb-4">
        <FollowUs />

        <div className="bg-[#E3E7E0] p-4 rounded-3xl">

          <div className="flex justify-around items-center mx-12 my-8">
            <div className="h-28">
              <img className="h-full" src={logoMediSync} alt="logoMediSync" />
            </div>

            <div className="text-sm">
              <div className="grid grid-cols-3 gap-2">
                { menuList1.map((el) => (
                  <FooterItem key={el.id} menu={el} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h2 className="text-sm">ที่อยู่</h2>
                <small className="text-sm">123 สุขุมวิท ซอย 3 เขตวัฒนา</small>
                <small className="text-sm">กรุงเทพ 10110 ประเทศไทย</small>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <i className="fa-solid fa-phone text-sm"></i>
                  <small className='text-th text-sm'>+66 9598 95464</small>
                </div>

                <div className="flex gap-1">
                  <i className="fa-solid fa-envelope text-sm"></i>
                  <small className='text-th text-sm'>info@medisync.com</small>
                </div>
              </div>
              
            </div>
          </div>

          <div className="border-t border-gray-300 text-center px-4 pt-1 flex justify-between items-center">
              <small className="text-[#767676] text-xs invisible">login</small>
              <small>&#169; MediSync Create {new Date().getUTCFullYear()}</small>
              <button className="text-[#B3B3B3] text-xs" onClick={()=> setOpen(true)}>login</button>
          </div>
        </div>
        
        <Modal title="Admin Login" width={50} open={open} onClose={() => setOpen(false)}>
          <AdminFormLoginPage />
        </Modal>
    </footer>
  )
}
