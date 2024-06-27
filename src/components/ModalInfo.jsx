import { useEffect } from "react"
import { createPortal } from 'react-dom'

export default function ModalInfo({ width=40, children, open, onClose }) {
    useEffect(() => {
        const handleEscPress = (e) => {
            if (e.keyCode === 27) {
                onClose?.()
            }
        }

        document.addEventListener('keydown', handleEscPress)

        return () => document.removeEventListener('keydown', handleEscPress)
    }, [onClose])

  return (
    <>
    {open ? 
        createPortal(
            <>
                <div className="fixed inset-0 bg-black opacity-80 z-40"></div>
                    <div className="fixed inset-0 z-50">
                        <div className="flex justify-center items-center min-h-screen" onMouseDown={onClose}>
                            <div className="bg-[#F0F4EE] relative overflow-auto max-h-[90vh] rounded-[32px] shadow-lg" style={{width: `${width}rem`}}  onMouseDown={e => e.stopPropagation()}>
                                <button className="-mt-2 absolute top-6 right-6 text-gray-400 text-2xl" onClick={onClose}>&#10005;</button>
                                <div className="p-4">{children}</div>
                        </div>
                    </div>
                </div>
            </>,
        document.getElementById('modal')
        )
     : null}
    </>
  )
}
