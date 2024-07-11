export default function ClinicForm({ data, doctorActiveByClinic }) {
  return (
    <div className="flex flex-col mb-4">
      <div className="overflow-hidden h-[25rem] rounded-3xl">
        <img src={data?.image} alt={data?.name} className="w-full object-cover" />
      </div>

      <div className="p-4 space-y-5">
        <h1 className="text-2xl font-light text-ms-green my-2">{data?.name}</h1>
        <p className="font-light indent-6 text-lg">{data?.detail}</p>
        <p className="font-light">สถานที่ตั้ง: {data?.location}</p>

        <div className="space-y-3 pt-4">
              <h1 className="text-2xl font-light text-ms-green">
                แพทย์ประจำแผนก/คลินิก
              </h1>

              <div className="grid grid-cols-3 gap-3">
                { doctorActiveByClinic?.map((doctor)=>(
                  <div key={doctor.id} className="flex items-center gap-2 rounded-2xl border border-gray-300 py-2 px-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img className="w-full h-full object-cover" src={doctor.image} alt={doctor.firstName} />
                    </div>
                    <div className="font-light">
                      <h1>{doctor.firstName} {doctor.lastName}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </div>
  );
}
