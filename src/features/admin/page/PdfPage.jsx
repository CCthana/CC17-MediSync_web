import { useState, useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

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
const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const PdfMaker1 = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const iframeRef = useRef();
const id = "1"
  const VN = "VN";
  const doctorfirstname = "doctorfirstname";
  const doctorlastname = "doctorlastname";
  const userfirstname = "userfirstname";
  const userlastname = "userlastname";
  const HN = "HN";
  const date = "date";
  const weight = "weight";
  const height = "height";
  const pressure = "pressure";
  const getDocumentDefinition = (imageBase64) => ({
    pageSize: "A4",
    pageMargins: [40, 60, 40, 0], // [left, top, right, bottom]
    content: [
      {
        image: imageBase64, // ใส่ Base64 ของโลโก้ที่นี่
        width: 150,
        alignment: "center",
      },
      { text: `ใบวินิจฉัยโรค`, style: "header", margin: [0, 20, 0, 50] },
      { text: `เลขที่ ${id}-${VN}`, alignment: "right" },
      { text: `ชื่อ ${doctorfirstname} ${doctorlastname}`, style: "subheader" },
      {
        text: `ได้ทำการตรวจ คุณ${userfirstname} ${userlastname} เลขที่ HN: ${HN}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `น้ำหนัก: ${weight} ส่วนสูง: ${height} ความดัน: ${pressure} `,
        margin: [0, 0, 0, 0],
      },
      {
        text: `เมื่อวันที่ ${date}`, //17 เดือน พฤศจิกายน พ.ศ. 2567
        margin: [0, 0, 0, 0],
      },
      {
        text: "สถานที่ตรวจ โรงพยาบาล Medisync hospital",
        margin: [0, 0, 0, 0],
      },
      {
        text: "สรุปผลความคิดเห็นของแพทย์",
        margin: [0, 10, 0, 0],
      },

      {
        text: `symptoms`,
        margin: [0, 5, 0, 5],
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
        text: `พิมพ์ผลวันที่ ${date}`,
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
  });

  const createPdf = async () => {
    try {
      const imageUrl =
        "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      const imageResponse = await fetch(imageUrl);
      const imageBlob = await imageResponse.blob();
      const imageBase64 = await convertImageToBase64(imageBlob);

      const documentDefinition = getDocumentDefinition(imageBase64);
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

      pdfDocGenerator.getDataUrl(
        (dataUrl) => {
          setPdfUrl(dataUrl);
          if (iframeRef.current) {
            iframeRef.current.src = dataUrl;
          }
        },
        (error) => {
          console.error("Error generating PDF:", error);
        }
      );
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };

  const downloadPdf = async () => {
    try {
      const imageUrl =
        "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      const imageResponse = await fetch(imageUrl);
      const imageBlob = await imageResponse.blob();
      const imageBase64 = await convertImageToBase64(imageBlob);

      const documentDefinition = getDocumentDefinition(imageBase64);
      pdfMake
        .createPdf(documentDefinition)
        .download("mockup_a4.pdf", (error) => {
          if (error) {
            console.error("Error downloading PDF:", error);
          }
        });
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={createPdf}>Create PDF</button>
      <button onClick={downloadPdf}>Download PDF</button>
      <iframe
        ref={iframeRef}
        style={{ width: "100%", height: "1000px", marginTop: "20px" }}
        title="PDF Preview"
        src={pdfUrl}
      />
    </div>
  );
};

export default PdfMaker1;