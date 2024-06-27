import SpinnerCard from "../../../components/SpinnerCard";

export default function ProfileForm({ doctor, onClick, isDoctorLoading}) {
  // console.log(doctor);
  return (
    <div
      className="rounded-3xl py-4 px-6 border border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]
      cursor-pointer transition duration-200"
      onClick={() => onClick(doctor)}>

      { isDoctorLoading
        ? <SpinnerCard />
        : <div className="flex items-center gap-3">
            <div className="bg-gray-300 rounded-full h-24 w-24 overflow-hidden">
              <img src={doctor.image} className="w-full object-center" />
            </div>

            <div>
              <h2 className="text-ms-gray text-lg">
                ชื่อ {doctor.firstName} {doctor.lastName}
              </h2>
              <p className="text-ms-gray font-light">แผนก: {doctor.education}</p>
            </div>
          </div>}
      

    </div>
  );
}
//bg-[#E3E7E0]
