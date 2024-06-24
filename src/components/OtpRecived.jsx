import { useState, useRef } from "react";
import CleanModal from "./CleanModal";

export default function OtpReceived({email = `test@gmail.com`}) {
  const [openEdit, setOpenEdit] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <button onClick={() => setOpenEdit(true)}>test</button>
      <CleanModal
        width={50}
        open={openEdit}
        setOpen={setOpenEdit}
        onClose={() => setOpenEdit(false)}
      >
        <div className="mx-auto flex w-full flex-col space-y-20 px-6 pt-10 pb-9 max-w-2xl">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>{`We have sent a code to your email ${email}`}</p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[0] = el)}
                      onChange={(e) => handleInputChange(e, 0)}
                      onKeyDown={(e) => handleKeyDown(e, 0)}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[1] = el)}
                      onChange={(e) => handleInputChange(e, 1)}
                      onKeyDown={(e) => handleKeyDown(e, 1)}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[2] = el)}
                      onChange={(e) => handleInputChange(e, 2)}
                      onKeyDown={(e) => handleKeyDown(e, 2)}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[3] = el)}
                      onChange={(e) => handleInputChange(e, 3)}
                      onKeyDown={(e) => handleKeyDown(e, 3)}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[4] = el)}
                      onChange={(e) => handleInputChange(e, 4)}
                      onKeyDown={(e) => handleKeyDown(e, 4)}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[5] = el)}
                      onChange={(e) => handleInputChange(e, 5)}
                      onKeyDown={(e) => handleKeyDown(e, 5)}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-ms-green border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Did not receive code?</p>
                    <a
                      className="flex flex-row items-center text-ms-green"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CleanModal>
    </>
  );
}
