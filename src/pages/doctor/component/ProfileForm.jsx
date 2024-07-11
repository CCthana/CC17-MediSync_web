import SearchBold from "../../../components/SearchBold";
import SpinnerCard from "../../../components/SpinnerCard";

export default function ProfileForm({ doctor, onClick, isDoctorLoading, search}) {
  // console.log(doctor);
  return (
    <div
      className="rounded-3xl py-4 px-6 border border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]
      cursor-pointer transition duration-200"
      onClick={() => onClick(doctor)}>

      { isDoctorLoading
        ? <SpinnerCard />
        : <div className="flex items-center gap-3">
            <div className="rounded-full h-24 w-24 overflow-hidden">
              <img src={doctor.image} className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-ms-gray font-light text-lg">
                <SearchBold search={search} data={doctor.firstName} /> <SearchBold search={search} data={doctor.lastName} />
              </h2>
              <p className="text-ms-gray font-light">แผนก: <SearchBold search={search} data={doctor.clinic?.name} /></p>
            </div>
          </div>}
      

    </div>
  );
}
//bg-[#E3E7E0]
