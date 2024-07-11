import { useState } from 'react';
import ApexCharts from 'react-apexcharts';

// ข้อมูลสำหรับกราฟแรก
// const genderData = [40, 55, 5];

// ข้อมูลสำหรับกราฟที่สอง แยกตามสัปดาห์
const seriesData = {
  days: [35, 23, 22, 45, 50, 30, 25, 20, 15, 40],
  weeks: [25, 33, 42, 35, 40, 50, 35, 30, 25, 30],
  months: [45, 43, 22, 25, 20, 30, 35, 40, 35, 20],
  years: [55, 53, 32, 15, 30, 40, 25, 30, 45, 10],
 
};




// สีไล่ลำดับความเข้มของสีเขียว
const colors = [
  "#006400", "#008000", "#228B22", "#32CD32", "#3CB371",
  "#66CDAA", "#7CFC00", "#ADFF2F", "#98FB98", "#90EE90"
];

// ฟังก์ชันการตั้งค่า options สำหรับกราฟแรก
// const getChartOptions1 = () => ({
//   series: genderData,
//   colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
//   chart: {
//     height: 320,
//     width: "100%",
//     type: "donut",
//   },
//   stroke: {
//     colors: ["transparent"],
//   },
//   labels: ["Male", "Female", "Other"],
//   dataLabels: {
//     enabled: false,
//   },
//   legend: {
//     position: "bottom",
//     fontFamily: "Inter, sans-serif",
//   },
// });

// ฟังก์ชันการตั้งค่า options สำหรับกราฟที่สอง
const getChartOptions2 = (series, color) => ({
  series: series,
  colors: color,
  chart: {
    height: 320,
    width: "20%",
    type: "donut",
  },
  stroke: {
    colors: ["transparent"],
  },
  labels: [
    "ศูนย์รักษาโรคหลอดเลือดหัวใจตีบแบบซับซ้อน",
    "ศูนย์โรคปอดและโรคระบบทางเดินหายใจ",
    "ศูนย์โรคไต",
    "ศูนย์หู คอ จมูก",
    "ศูนย์ภูมิแพ้",
    "ศูนย์กุมารเวช",
    "รังสีวินิจฉัย และเวชศาสตร์นิวเคลียร์",
    "แผนกผู้ป่วยหนัก (ICU)",
    "ฝ่ายเภสัชกรรม",
    "อายุรกรรม"
  ],  plotOptions: {
    pie: {
      donut: {
        size: '60%', // ปรับขนาดของ donut ให้ใหญ่ขึ้นหรือเล็กลงตามต้องการ
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
            label: "Total:",
            fontFamily: "Inter, sans-serif",
            formatter: function (w) {
              const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              return   sum + 'k';
            },
          }
        }
      }
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "right",
    frontSize: '10px',
    fontFamily: "Inter, sans-serif",
  },
});

export default function ChartClinic() {
  const [selectedWeek, setSelectedWeek] = useState("days");

  

  return (
    <div>
      {/* <div>
        <h3>กราฟแสดงข้อมูล Male, Female, Other</h3>
        <ApexCharts 
          options={getChartOptions1()} 
          series={genderData} 
          type="donut" 
          height={320} 
        />
      </div> */}
      <div>
        <label>เลือกสัปดาห์: </label>
        <select onChange={(e) => setSelectedWeek(e.target.value)} value={selectedWeek}>
          <option value="days">Per Day</option>
          <option value="weeks">Per Week</option>
          <option value="months">Per Month</option>
          <option value="years">Per Year</option>
        </select>
      </div>
      <div>
        <h3>กราฟแสดงข้อมูลจากคลินิก</h3>
        <ApexCharts
           
          options={getChartOptions2(seriesData[selectedWeek], colors)} 
          series={seriesData[selectedWeek]}
          type="donut" 
          height={320} 
        />
      </div>
     
    </div>
  );
}