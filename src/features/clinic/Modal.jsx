import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function CleanModal({ width = 40, children, open, onClose }) {
  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => document.removeEventListener("keydown", handleEscPress);
  }, [onClose]);

  return (
    <>
      {open
        ? createPortal(
            <>
              <div className='fixed inset-0 bg-black opacity-80 z-40'></div>
              <div className='fixed inset-0 z-50'>
                <div
                  className='flex justify-center items-center min-h-screen'
                  onMouseDown={onClose}
                >
                  <div
                    className='bg-white overflow-auto max-h-[90vh] rounded-3xl shadow-lg'
                    style={{ width: `${width}rem` }}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <div className='p-4'>{children}</div>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
}
