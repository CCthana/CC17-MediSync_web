import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import useClinic from "../../../../../hooks/useClinic";
import useDoctor from "../../../../../hooks/useDoctor";
import useHn from "../../../../../hooks/useHn";
import HeaderTextAdmin from "../../../component/HeaderTextAdmin";
import formatNumber from "../../../../../utils/formatNumber";
import ChartVNperDay from "./ChartVNperDay";
import ChartClinic from "./ChartClinic";

export default function DashboardPage() {
  const { getAllDoctorActive, fetchAllDoctor } = useDoctor();
  const { adminGetAllClinic, adminFetchAllClinic } = useClinic();
  const { getAllHn, fetchAllHn } = useHn();

  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [ref, inView] = useInView();

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    if (inView) {
      control1.start("visible").then(() => {
        setTimeout(() => {
          control2.start("visible");
        }, 200); // Delay for the second box to appear after the first box
        setTimeout(() => {
          control3.start("visible");
        }, 400); // Delay for the third box to appear after the second box
      });
    } else {
      control1.start("hidden");
    }
  }, [control1, inView]);

  useEffect(() => {
    adminFetchAllClinic();
    fetchAllDoctor();
    fetchAllHn();
  }, []);

  // console.log("adminGetAllClinic DashboardPage", adminGetAllClinic);

  return (
      <div className="flex flex-col">
        <div className="flex items-center justify-center text-center text-ms-gray">
          <HeaderTextAdmin>Admin-medisync</HeaderTextAdmin>
        </div>

        <div className="flex items-center gap-4 justify-center my-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={control1}
            variants={boxVariants}
            className="py-6 px-12 bg-[#e8eae6] text-center rounded-3xl"
          >
            <h1 className="text-6xl font-light mb-1">
              <CountUp end={getAllDoctorActive?.length} duration={2} />
            </h1>
            <span className="font-th font-light">จำนวนหมอทั้งหมด</span>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={control2}
            variants={boxVariants}
            className="py-6 px-12 bg-[#e8eae6] text-center rounded-3xl"
          >
            <h1 className="text-6xl font-light mb-1">
              <CountUp end={adminGetAllClinic?.length} duration={2.5} />
            </h1>
            <span className="font-th font-light">จำนวนแผนก/คลินิค</span>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={control3}
            variants={boxVariants}
            className="py-6 px-12 bg-[#e8eae6] text-center rounded-3xl"
          >
            <h1 className="text-6xl font-light mb-1">
              <CountUp end={formatNumber(getAllHn?.length)} duration={3} />
            </h1>
            <span className="font-th font-light">จำนวนคนไข้ทั้งหมด (HN)</span>
          </motion.div>
        </div>

        <div className="w-6/12 mx-auto">
          <ChartVNperDay />
        </div>

        <div className="w-6/12 mx-auto">
          <ChartClinic />
        </div>
      </div>
  );
}
