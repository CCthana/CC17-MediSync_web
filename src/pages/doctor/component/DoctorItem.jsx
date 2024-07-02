export default function DoctorItem({ selectDoctor }) {
  return (
    
    <div className="flex justify-start items-center gap-8 py-8 px-12">
      <div className="bg-gray-300 rounded-full h-56 w-56 overflow-hidden">
        <img
          src={selectDoctor.image}
          alt={`${selectDoctor.firstName}`}
          className="w-full object-center"
        />
      </div>
      <div>
        <h2 className="text-xl font-medium text-[#767676]">
          ชื่อ {selectDoctor.firstName} {selectDoctor.lastName}
        </h2>
        <p className="text-gray-500">แผนก: {selectDoctor.education}</p>
      </div>
    </div>
  );
}
