import ModalDaisy from "../../components/ModalDaisy";
import CardClinic from "./component/CardClinic";
import CardFourBtn from "./component/CardFourBtn";
import CardPackage from "./component/CardPackage";
import HeadHero from "./component/HeadHero";

export default function HomePage() {
  return (
    <header>
      <HeadHero />
      <CardFourBtn />
      <CardPackage />
      <CardClinic />
      <ModalDaisy />
    </header>
  )
}
