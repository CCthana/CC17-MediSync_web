import { useState } from "react";
import Button from "../../components/Button";
import ContactPage from "./ContactPage";
import CareerPage from "./CareerPage";
import InformationPage from "./InformationPages";
import { getContact, setContact } from "../../utils/local-storage";

export default function ContactContainer() {

    const [selectMenu, setSelectMenu ] = useState( getContact() || 1 )

    const menuContact = [
        { id: 1, text: "ติดต่อสอบถาม"},
        { id: 2, text: "ร่วมงานกับเรา"},
        { id: 3, text: "ข้อมูลโรงพยาบาล"}
    ]

    const component = {
            1: <ContactPage />,
            2: <CareerPage />,
            3: <InformationPage />
        }

    console.log('getContact()', getContact())
    console.log('selectMenu', selectMenu)

  return (

    <div>
        <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-300">
            { menuContact.map((el) => (
                <Button onClick={() => {
                    setSelectMenu(el.id)
                    setContact(el.id)
                } } key={el.id} btn={  getContact() == el.id || selectMenu === el.id ? 'active' : 'success'}
                width="w-[12rem]">{el.text}</Button>
            )) }
        </div>

        { component[selectMenu] }
    </div>
  )
}
