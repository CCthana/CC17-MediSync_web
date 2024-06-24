export default function PackageForm({ packages }) {
  return (
    <>
      {packages.map((pkg, index) => (
        <div
          key={index}
          className='border border-[#AE8F4E] rounded-3xl p-4 flex flex-col justify-around items-center gap-4'
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            className='h-72 w-72 rounded-full object-cover'
          />
          <h1 className='text-[#767676] text-xl font-semibold'>{pkg.title}</h1>
          <button className='border border-[#AE8F4E] rounded-3xl p-2 text-[#767676] text-md font-normal'>
            ดูแพ็กเกจ
          </button>
        </div>
      ))}
    </>
  );
}
