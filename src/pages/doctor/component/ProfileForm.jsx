export default function ProfileForm({ doctor, onClick }) {
// console.log(doctor);
return (
    <div
    className="bg-[#E3E7E0] rounded-3xl p-4 shadow cursor-pointer"
    onClick={() => onClick(doctor)}
    >
    <div className="flex items-center space-x-4 h-24">
        <div className="bg-gray-300 rounded-full h-16 w-16 overflow-hidden">
        <img
            src={doctor.image}
            className="h-full w-full object-fill rounded-full"
        />
        </div>
        <div>
        <h2 className="text-[#767676] text-lg">
            ชื่อ {doctor.firstName} {doctor.lastName}
        </h2>
        <p className="text-[#767676]">แผนก: {doctor.education}</p>
        </div>
    </div>
    </div>
);
}