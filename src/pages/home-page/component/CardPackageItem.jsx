import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

export default function CardPackageItem({ data, index }) {
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
      <Tooltip
        content={data?.name}
        placement="bottom"
        className="px-3 bg-ms-gray text-[#f3f5f2] shadow-sm"
        animate={{
          mount: { scale: 1, y: 0, transition: { delay: 0.5 } },
          unmount: { scale: 0, y: -25, transition: { delay: 0 } },
        }}
      >
        <motion.div
          id={data?.id}
          initial="hidden"
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          onClick={() => setOpen(true)}
          className="flex flex-col gap-4 items-center h-fit px-4 pt-4 pb-8 rounded-[40px] bg-[#e8eae6]
       hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]
      border hover:border-ms-green transition duration-300"
        >
          <div className=" aspect-square overflow-hidden rounded-[32px]">
            <img
              className="w-full object-cover h-full"
              src={data?.image}
              alt={data?.text}
            />
          </div>
          <span className="text-lg mt-1 text-center font-light">
            {data?.name}
          </span>
          <Button width="min-w-1/2" btn="success">
            ดู package
          </Button>
        </motion.div>
      </Tooltip>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={data?.name}
        width={60}
      >
        <div className="flex">
          <div className="min-w-[20rem] h-[20rem] rounded-3xl overflow-hidden">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flax gap-4 p-4">
              <p className="indent-6 mb-4">{data?.detail}</p>
              <p className=" mb-4 text-ms-green">{`ราคา package ${data?.price.toLocaleString()} บาท`}</p>
              <span className="font-th font-light">{`สามารถใช้ได้ถึง ${new Date(data?.expireDate).toLocaleDateString("en-GB")}`}</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

//shadow-[0px_0px_6px_rgba(49,161,114,0.4)]
