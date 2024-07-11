import { useEffect, useState } from "react";
import ModalInfo from "../../../components/ModalInfo";
import SpinnerCard from "../../../components/SpinnerCard";
import ClinicForm from "../../../features/clinic/ClinicForm";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

export default function CardClinicItem({
  data,
  isClinicLoading,
  fetchAllDoctorByClinic,
  doctorActiveByClinic,
  index
}) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(data?.id);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(element);
          }, 150 * index);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [data?.id]);

  return (
    <>
      <motion.button
      id={data?.id}
      initial="hidden"
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }
      }
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: { opacity: 1, scale: 1 },
      }}
        onClick={() => {
          setOpen(true);
          fetchAllDoctorByClinic(data?.id);
        }}
        className="flex items-center gap-3 px-6 py-4 rounded-3xl transition duration-300
      border  bg-[#e8eae6] border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)] w-[450px]"
      >
        {isClinicLoading ? (
          <SpinnerCard />
        ) : (
          <>
            <div
           className="w-12 h-12">
              <img className="w-full" src={data?.icon} alt={data?.nameClinic} />
            </div>
            <h1 className="font-light text-lg">{data?.name}</h1>
          </>
        )}
      </motion.button>

      <ModalInfo
        open={open}
        onClose={() => setOpen(false)}
        title={data?.nameClinic}
        width={65}
      >
        <ClinicForm data={data} doctorActiveByClinic={doctorActiveByClinic} />
      </ModalInfo>
    </>
  );
}
