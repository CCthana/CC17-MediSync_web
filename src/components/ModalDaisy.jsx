
export default function ModalDaisy({ children, modal }) {
  return (
    <div>
        {/* <button className="btn" onClick={showModal}>open modal</button> */}
        <dialog id={modal} className="modal bg-[#000000a7]">
            <div className="modal-box rounded-[32px] max-w-[60rem]">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl">✕</button>
                </form>

                <div className="flex items-center justify-center flex-col">
                    <h1 className="">Admin Login</h1>
                    { children }
                </div>
                
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
  )
}
