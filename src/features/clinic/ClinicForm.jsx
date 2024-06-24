export default function ClinicForm({ title, children, image }) {
  return (
    <div className='flex justify-around items-center gap-8 px-20'>
      <img src={image} alt='heart' className='w-40' />
      <div className='flex-1'>
        <h1 className='text-2xl font-semibold my-4'>{title}</h1>
        <h1 className='overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full'>
          {children}
        </h1>
      </div>
    </div>
  );
}
