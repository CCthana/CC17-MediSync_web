
export default function Spinner({ transparent }) {
    return (
      <>
        <div className={`fixed inset-0 bg-white z-[50] ${transparent ? 'opacity-70': ''} opacity-70`}></div>
        <div className="fixed inset-0 flex justify-center items-center z-[60] animate-spin">
  
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="40px"
              width="40px"
              fill="#2BB673"
              >
              <g>
                  <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
              </g>
              </svg>
  
        </div>
      </>
    )
  }