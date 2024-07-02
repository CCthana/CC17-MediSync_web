import Slide from "../../../components/Slide";

export default function HeadHero() {

  const mockData = [
    {
      imgSrc: "https://lh5.googleusercontent.com/d/1FziDYPgkrSjdYLgTZy7Z_oN9PJX8iAWc",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
      link: {
        linkSrc: "/hospital/1",
        button: "line: โรงพยาบาล 1",
      },
    },
    {
      imgSrc: "https://lh5.googleusercontent.com/d/18BT_zH7deLikFY2O-lj8fB1P1y982tre",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
      link: {
        linkSrc: "/hospital/2",
        button: "line: โรงพยาบาล 2",
      },
    },
    {
      imgSrc: "https://lh5.googleusercontent.com/d/1-_VfWeaPLJm33Bs-zg4I2ZYPnH8fF7F1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
      link: {
        linkSrc: "/hospital/3",
        button: "line: โรงพยาบาล 3",
      },
    },
    {
      imgSrc: "https://lh5.googleusercontent.com/d/1Wg7K4Su8wdVeB8vCXUgOm3_-8DsO9zzw",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
      link: {
        linkSrc: "/hospital/4",
        button: "line: โรงพยาบาล 4",
      },
    },
    {
      imgSrc: "https://lh5.googleusercontent.com/d/1DenZx63654QN88_j6Tj5QuMkdpdQlo5H",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
      link: {
        linkSrc: "/hospital/5",
        button: "line: โรงพยาบาล 5",
      },
    },
  ];

  return (
    <div className="overflow-hidden bg-slate-300 rounded-[30px]">
      <Slide slides={mockData} />
    </div>
  )
}
