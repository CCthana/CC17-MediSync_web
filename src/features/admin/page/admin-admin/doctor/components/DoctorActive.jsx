import DoctorItem from "./DoctorItem";

export default function DoctorActive({ getAllDoctor, handleClickSelect }) {

    return (
    <div className="grid-cols-2 grid gap-6 mt-8">
      {getAllDoctor?.map((el) => {
        if (!el.isDeleted) {
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
  );
}
