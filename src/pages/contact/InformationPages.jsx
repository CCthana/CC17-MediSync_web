import ContactHeader from "./ContactHeader";

export default function InformationPage() {
  return (
    <div className=" min-h-screen flex flex-col items-center py-10">
      <div className="bg-[#E3E7E0] shadow-md rounded-lg p-6 w-full contents">
        <ContactHeader />

        <h1 className="text-[#767676] text-2xl font-bold text-center mb-6">
          ข้อมูลโรงพยาบาล
        </h1>

        <div className="max-w-5xl mb-6">
          <h2 className="text-[#767676] text-xl font-semibold mb-4">
            ศูนย์รวมความเชี่ยวชาญด้านหลากหลาย
          </h2>
          <p className="text-[#767676]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            doloribus iusto dolore incidunt deleniti inventore veritatis
            quibusdam illo fugit aliquam dicta molestiae cumque nostrum, numquam
            repudiandae fuga animi. Sed, nisi commodi recusandae asperiores
            tempore aliquid possimus! Animi sapiente dolore tenetur hic
            exercitationem! Eveniet, illo atque. Distinctio iure fugit tenetur
            error consequatur, aperiam adipisci cum laudantium magni perferendis
            eaque assumenda accusantium at, molestias nulla laborum dicta
            quibusdam harum. Earum minus voluptatibus aspernatur nostrum? Et
            iure temporibus, cumque dignissimos exercitationem id numquam
            dolorum aliquid. Rerum tenetur voluptas laudantium itaque quaerat,
            reiciendis officiis ex odio fugit libero alias voluptatem eveniet
            sit dolores pariatur, ea inventore accusamus. Eveniet quas molestias
            recusandae excepturi. Quae reprehenderit inventore ratione earum
            animi provident. Illum ut recusandae, dolorum culpa soluta sed
            voluptate eligendi maxime nobis iure minima enim, quasi ratione aut
            dolor nesciunt. Accusantium maxime quidem vero culpa perspiciatis
            repellat fugit, dolore cum dolorem non. Ut qui consectetur iure
            itaque in cumque consequuntur inventore minima exercitationem
            laboriosam vel sapiente unde eos suscipit adipisci accusamus
            obcaecati, incidunt blanditiis culpa eum quos doloremque aliquid!
            Fuga voluptates at nobis necessitatibus porro sit, veritatis sint!
            Maiores, quos! Corrupti quia ipsam repellendus architecto molestias
            nulla pariatur magnam. Iusto nihil animi doloribus accusantium in
            nisi quam, enim corporis odio eos quis omnis, totam numquam?
            Repellat perferendis qui optio minus vel fuga enim suscipit tempora.
          </p>
        </div>

        <div className="container w-full ">
          <div className="flex flex-wrap justify-center gap-2.5">
            <div>
              <img
                src="https://www.paolohospital.com/Resource/Image/Article/ed323ccf-7f1e-4d54-b5b5-335d881717e4_06.jpg"
                className="w-96 h-52 rounded-3xl hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="bg-gray-200 w-96 h-52 rounded-3xl">
              <img
                src="https://hospital.wu.ac.th/wp-content/uploads/2020/05/Prancheta-1-c%C3%B3pia.jpg"
                className="w-96 h-52 rounded-3xl hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="bg-gray-200 w-96 h-52 rounded-3xl ">
              <img
                src="https://www.jvkorat.go.th/th/wp-content/uploads/2017/11/30.jpg"
                className="w-96 h-52 rounded-3xl hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mt-6">
          <h2 className="text-[#767676] text-xl font-semibold mb-4">
            นวัตกรรมและเทคโนโลยี
          </h2>
          <ul className="text-[#767676]">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              expedita consequatur tempore alias aspernatur vel animi,
              voluptatibus explicabo inventore quo ipsum. Consequatur dolores
              facere voluptatum nobis quisquam ea quibusdam quae!
            </li>{" "}
            <br />
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              expedita consequatur tempore alias aspernatur vel animi,
              voluptatibus explicabo inventore quo ipsum. Consequatur dolores
              facere voluptatum nobis quisquam ea quibusdam quae!
            </li>{" "}
            <br />
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              expedita consequatur tempore alias aspernatur vel animi,
              voluptatibus explicabo inventore quo ipsum. Consequatur dolores
              facere voluptatum nobis quisquam ea quibusdam quae!
            </li>{" "}
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}