import DoctorItem from "./DoctorItem";

export default function DoctorActive({
  getAllDoctor,
  handleClickSelect,
  search,
}) {
  return (
    <div className="grid-cols-2 grid gap-6 mt-4">
      {getAllDoctor?.map((el) => {
        if (!el.isDeleted) {
          return (
            <DoctorItem
              search={search}
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
