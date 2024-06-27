export default function ClinicForm({ name, detail, image }) {
  return (
    <div className='flex flex-col'>
      <div className="overflow-hidden rounded-3xl">
        <img src={image} alt={name} className='w-full' />
      </div>

      <div className='p-4'>
        <h1 className='text-2xl font-light my-2'>{name}</h1>
        <p className='font-light text-lg'>
          {detail}
        </p>
      </div>
    </div>
  );
}
