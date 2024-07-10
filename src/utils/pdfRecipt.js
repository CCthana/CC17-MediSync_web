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
  // สร้าง newData โดยรวม medicineOrders และรายการใหม่
  const newData = [
    ...data.medicineOrders,
    { medicine: { name: data.treatmentResult, price: 500 }, quantity: 1 },
  ];

  const calculateTotalCost = (data) =>
    data.reduce((acc, item) => acc + parseFloat(item.medicine.price) * item.quantity, 0);
  const formatCurrency = (value) =>
    new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(value);

  const totalCost = calculateTotalCost(newData);
  const formattedTotalCost = formatCurrency(totalCost);

  const tableBody = newData.map((row, index) => [
    {
      text: (index + 1).toString(),
      margin: [5, 0, 5, 0],
      fontSize: 14,
    },
    {
      text: `${row.medicine.name}`,
      margin: [5, 0, 5, 0],
      fontSize: 14,
    },
    {
      text: row.quantity.toString(),
      margin: [10, 0, 10, 0],
    },
    {
      text: parseFloat(row.medicine.price).toFixed(2),
      margin: [10, 0, 10, 0],
    },
    {
      text: (parseFloat(row.medicine.price) * row.quantity).toFixed(2),
      margin: [10, 0, 10, 0],
    },
  ]);

  return {
    pageSize: "A4",
    pageMargins: [40, 60, 40, 60],
    content: [
      { image: imageBase64, width: 150, alignment: "center" },
      { text: `ชื่อ: ${data.user.firstName} ${data.user.lastName}    HN: ${data.user.hn}    เลขที่ใบเสร็จ: ${data.vn}`, style: "header", margin: [0, 20, 20, 0] },
      { text: `วันที่เข้ารับการรักษา: ${new Date(data.clinic.createdAt).toLocaleDateString()}`, style: "header" },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto", "auto"],
          body: [
            [
              { text: "ลำดับ", style: "tableHeader", alignment: "center", fontSize: 14 },
              { text: "รายการ", style: "tableHeader", margin: [5, 0, 0, 0], fontSize: 14 },
              { text: "จำนวน", style: "tableHeader", margin: [5, 0, 10, 0], fontSize: 14 },
              { text: "ราคาต่อหน่วย", style: "tableHeader", margin: [5, 0, 10, 0], fontSize: 14 },
              { text: "ราคารวม", style: "tableHeader", margin: [5, 0, 10, 0], fontSize: 14 },
            ],
            ...tableBody,
            [
              { text: "รวมค่าใช้จ่ายทั้งหมด", colSpan: 4, alignment: "left", fontSize: 16, margin: [10, 10, 10, 10] },
              {},
              {},
              {},
              { text: formattedTotalCost, fontSize: 16, margin: [10, 10, 10, 10] },
            ],
          ],
        },
        layout: {
          hLineWidth: function (i, node) {
            return (i === 0 || i === node.table.body.length || i === 1) ? 1 : 0;
          },
          vLineWidth: function (i, node) {
            return 0;
          },
          hLineColor: function (i, node) {
            return "black";
          },
          vLineColor: function (i, node) {
            return "black";
          },
          paddingLeft: function (i, node) {
            return 10;
          },
          paddingRight: function (i, node) {
            return 10;
          },
          paddingTop: function (i, node) {
            return 5;
          },
          paddingBottom: function (i, node) {
            return 5;
          },
        },
      },
      { text: "ลงชื่อผู้ออกใบเสร็จ", absolutePosition: { x: 30, y: 700 }, alignment: "left" },
      { text: `พิมพ์ผลวันที่ ${new Date(data.clinic.createdAt).toLocaleDateString()}`, absolutePosition: { x: 375, y: 700 }, alignment: "right" },
    ],
    defaultStyle: {
      font: "THSarabunNew",
    },
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      body: {
        fontSize: 14,
        margin: [0, 5, 0, 5],
      },
      tableHeader: {
        bold: true,
        fontSize: 14,
        color: "black",
      },
    },
  };
};

export const sendPdfReceipt = async (data) => {
  console.log(data);
  const imageUrl = "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
  const imageBase64 = await convertImageToBase64(imageUrl);

  return new Promise((resolve, reject) => {
    const documentDefinition = getDocumentDefinition(data, imageBase64);
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob) => {
      resolve(blob);
    }, reject);
  });
};
