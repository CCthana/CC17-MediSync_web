export default function DoctorItem({ selectDoctor }) {
  return (
    <div className="flex justify-start items-center gap-8 py-8 px-12">
      <div className="bg-gray-200 flex-shrink-0 rounded-full h-56 w-56 overflow-hidden">
        <img
          src={selectDoctor.image}
          alt={`${selectDoctor.firstName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl font-light text-ms-green">
          {selectDoctor?.firstName} {selectDoctor?.lastName}
        </h2>
        <div>
          <p className="text-ms-green font-light text-lg">แผนก/คลินิก</p>
          <span className="font-light text-lg">{selectDoctor?.clinic?.name}</span>
        </div>
        <div>
          <p className="text-ms-green font-light text-lg">ปริญญาบัตรและสถาบันการศึกษา</p>
          <span className="font-light text-lg">{selectDoctor?.education}</span>
        </div>
      </div>
    </div>
  );
}
