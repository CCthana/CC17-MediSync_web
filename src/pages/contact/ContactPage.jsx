import Button from "../../components/Button";

export default function ContactPage() {
  return (
        <div className="min-h-[70vh] py-12">
          <div className="flex flex-col md:flex-row justify-center">

            <div className="w-full md:w-1/3 h-[400px] bg-gray-200 rounded-3xl mr-10 flex items-center justify-center">
              {/* <span className="text-gray-500">google map</span> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3404435017774!2d100.53239597586516!3d13.758331697140768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eca0a4dc2e7%3A0x944f80c1e57b451e!2z4Lit4Liy4LiE4Liy4Lij4Lin4Lij4Lij4LiT4Liq4Lij4LiT4LmM!5e0!3m2!1sth!2sth!4v1719200714556!5m2!1sth!2sth"
                width="100%"
                height="100%"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="border border-gray-400 rounded-3xl hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)]"
              ></iframe>
            </div>

            <div className=" flex flex-col space-y-4">
              <div className="space-y-1">
                <h2 className="text-ms-gray text-xl font-normal mb-2">
                  ติดต่อสอบถาม
                </h2>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-base"></i>
                  <p className="text-ms-gray font-th font-light">
                    33 สุขุมวิท ซอย 3 นานาเหนือ เขตวัฒนา กรุงเทพฯ 10110 ประเทศไทย
                  </p>
                </div>
        
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-base"></i>
                  <p className="text-ms-gray font-th font-light">
                    +66 20469564
                  </p>
                </div>


                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-base"></i>
                  <p className="text-ms-gray">
                    info@repheal.com
                  </p>
                </div>
              </div>
              <div className="">
                <Button btn="success" width="w-[11rem]">
                  line: โรงพยาบาล
                </Button>
              </div>
            </div>
          </div>
        </div>
  );
}