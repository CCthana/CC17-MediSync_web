import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { convertImageToBase64 } from "./convertImageToBase64";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: "THSarabunNew.ttf",
    bold: "THSarabunNew Bold.ttf",
    italics: "THSarabunNew Italic.ttf",
    bolditalics: "THSarabunNew BoldItalic.ttf",
  },
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-MediumItalic.ttf",
  },
};

const getDocumentDefinition = (data, imageBase64) => {
  const medicines = data?.medicineOrders || [];

  return {
    pageSize: "A4",
    pageMargins: [40, 60, 40, 0],
    content: [
      { image: imageBase64, width: 150, alignment: "center" },
      { text: `ใบวินิจฉัยโรค`, style: "header", margin: [0, 20, 0, 50] },
      { text: `เลขที่ ${data?.id}-${data?.vn}`, alignment: "right" },
      {
        text: `ชื่อ ${data?.doctor?.firstName} ${data?.doctor?.lastName}`,
        style: "subheader",
      },
      {
        text: `ได้ทำการตรวจ คุณ${data?.user?.firstName} ${data?.user?.lastName} เลขที่ HN: ${data?.hn}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `น้ำหนัก: ${data?.weight} ส่วนสูง: ${data?.height} ความดัน: ${data?.bloodPressure} ชีพจร: ${data?.heartRate}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `เมื่อวันที่ ${new Date().toLocaleDateString()}`,
        margin: [0, 0, 0, 0],
      },
      { text: "สถานที่ตรวจ โรงพยาบาล Medisync hospital", margin: [0, 0, 0, 0] },
      {
        text: "สรุปผลความคิดเห็นของแพทย์",
        margin: [0, 10, 0, 0],
        style: "subheader",
      },
      { text: `${data?.treatmentResult}`, margin: [0, 0, 0, 5] },
      { text: "ยาที่ได้รับ", margin: [0, 10, 0, 0], style: "subheader" },
      {
        ul: medicines?.map(
          (medicine) =>
            `Medicine: ${medicine.medicine.name}, Quantity: ${medicine.quantity}`
        ),
        margin: [0, 0, 0, 10],
      },
      {
        text: ` □ เห็นสมควรให้ลาหยุดพักเพื่อรักษาตัว วันที่ `,
        margin: [0, 10, 0, 10],
      },
      {
        text: "รับรองว่ามารับการรักษาที่ ร.พ. จริง",
        absolutePosition: { x: 60, y: 680 },
        alignment: "left",
      },
      {
        text: "ลงชื่อ",
        absolutePosition: { x: 100, y: 760 },
        alignment: "left",
      },
      {
        text: "พิมพ์ผลวันที่ 12/07/2567",
        absolutePosition: { x: 375, y: 760 },
        alignment: "right",
      },
    ],
    defaultStyle: {
      font: "THSarabunNew",
    },
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: "center",
      },
      subheader: {
        fontSize: 14,
        bold: true,
      },
    },
  };
};

export const sendPdfMedicalCertificate = async (data) => {
  const imageUrl = "../../public/MediSync-new.jpg"; // แทนที่ด้วย URL หรือ path ของภาพของคุณ
  const imageBase64 = await convertImageToBase64(imageUrl);

  return new Promise((resolve, reject) => {
    const documentDefinition = getDocumentDefinition(data, imageBase64);
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob) => {
      resolve(blob);
    }, reject);
  });
};
