import DoctorItem from "./DoctorItem";


export default function DoctorNoActive({ adminGetAllDoctor, handleClickSelect }) {
  return (
    <div className="grid-cols-2 grid gap-6 mt-4">
      {adminGetAllDoctor?.map((el) => {
        if (el.isDeleted) {
          return (
            <DoctorItem
              key={el.id}
              data={el}
              handleClickSelect={handleClickSelect}
            />
          );
        }
      })}
    </div>
  )
}
