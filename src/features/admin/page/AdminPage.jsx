import AdminSideMenu from "../component/AdminSideMenu";

export default function AdminPage() {
  return (
    <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">
      <AdminSideMenu />

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">
        <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
          <h1 className="font-th text-4xl  font-semibold text-ms-green flex-1 ">
            Admin-medisync
          </h1>
        </div>
      </div>
    </div>
  );
}
