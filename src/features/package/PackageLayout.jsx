import { useEffect, useState } from "react";
import PackageForm from "./PackageForm";
import HeardText from "../../components/HeardText";
import InputSearch from "../../components/InputSearch";
import Spinner from "../../components/Spinner";
import usePackage from "../../hooks/usePackage";

export default function PackageLayout() {
  const { isLoading, allPackages, fetchPackage} = usePackage()
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPackage();
  }, []);

  const filterPackage = allPackages?.filter((packages) =>
    packages.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log('allPackages', allPackages)

  return (
    <>
      {isLoading && <Spinner />}
      <div className="min-h-[75vh] border-t border-gray-300">
        <div className="container mx-auto py-10">
          <HeardText text="แพ็กเกจตรวจสุขภาพ" />

          <div
            className="relative flex items-center p-8 w-1/2 mx-auto bg-[#e8eae6]
        rounded-3xl mb-10 mt-5 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]"
          >
            <InputSearch
              type="text"
              value={search}
              className="border border-[#AE8F4E] rounded-3xl p-3 w-2/5"
              onChange={(e) => setSearch(e.target.value)}
            />
            <i
              role="button"
              className="fa-solid p-8 fa-magnifying-glass transition duration-300
            absolute right-6 text-gray-300 text-2xl hover:text-gray-400"
            ></i>
          </div>

          {/* grid package */}
          <div
            className="grid grid-cols-4 w-11/12 mx-auto gap-10"
          >
            {filterPackage?.map((el) => (
              <PackageForm key={el.id} packages={el} search={search} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
