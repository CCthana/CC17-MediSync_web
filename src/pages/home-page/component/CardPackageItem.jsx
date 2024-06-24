import ButtonSmall from "../../../components/BottonSmall";

export default function CardPackageItem({ data }) {
  return (
    <section className="flex flex-col w-1/4 gap-3 items-center p-4
     rounded-[32px]">
        <div className="rounded-3xl overflow-hidden">
            <img className="w-full" src={data.image} alt={data.text} />
        </div>
        <span>{data.text}</span>
        <ButtonSmall btn="success">ดู package</ButtonSmall>
    </section>
  )
}
