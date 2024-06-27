import { useEffect } from "react"
import { createPortal } from 'react-dom'

export default function Modal({ width=40, title, children, open, onClose }) {
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
                <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
                    <div className="fixed inset-0 z-50">
                        <div className="flex justify-center items-center min-h-screen" onMouseDown={onClose}>
                            <div className="bg-[#F0F4EE] overflow-auto max-h-[90vh] rounded-[32px] shadow-lg" style={{width: `${width}rem`}}  onMouseDown={e => e.stopPropagation()}>
                                <div className="flex justify-between items-center p-4 px-5 border-b">
                                    <button className="text-2xl invisible">&#10005;</button>
                                    <h4 className="text-3xl mt-2 font-light">{title}</h4>
                                    <button className="-mt-2 text-gray-400 text-2xl" onClick={onClose}>&#10005;</button>
                                </div>
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
