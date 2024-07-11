import ApexCharts from 'react-apexcharts';

// กำหนดค่าของ "All" เป็น hardcode
const allSeriesData = [200, 150, 100, 50, 120, 180, 140]; // แทนค่าตามต้องการ

// สร้างสีไล่ลำดับความเข้มของสีเขียวสำหรับแต่ละศูนย์
const colors = ["#31A172"]; // สีสำหรับ "All"

const getLast7Day = () => {
    const days = []
    for ( let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        days.push(date.toLocaleDateString("en-GB"))
    }

    return days
}

const getChartOptions = (series, colors) => ({
  series: series,
  colors: colors,
  chart: {
    height: 320,
    width: "100%",
    type: "bar",
  },
  stroke: {
    colors: ["transparent"],
    lineCap: "",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%", // ปรับค่าความกว้างของแท่งกราฟ
      barHeight: '100%',
      borderRadiusApplication: "end",
      borderRadius: 5,
      distributed: false, // Set to true if you want bars to be distributed
      dataLabels: {
        position: 'center', // Position of datalabels
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  labels: getLast7Day(), // ใช้วันที่ย้อนหลัง 7 วัน
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
  },
  xaxis: {
    categories: getLast7Day(), // ใช้วันที่ย้อนหลัง 7 วัน
    labels: {
      formatter: function (value) {
        return value;
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
});

export default function Barchart() {
  const series = [{
    name: "VN",
    data: allSeriesData,
    color: "#31A172" // สีสำหรับ "All"
  }];

  const selectedColors = colors; // สีสำหรับ "All"

  return (
    <div className="p-4">
      <ApexCharts
        options={getChartOptions(series, selectedColors)}
        series={series}
        type="bar"
        height={320}
      />
    </div>
  );
}