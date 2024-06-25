export default function PackageDetail() {
  return (
    <div className='bg-[#E3E7E0] min-h-screen flex flex-col items-center py-10'>
      <div className='contents'>
        <h1 className='text-[#767676] text-2xl font-bold mb-6 '>
          ฉีดพลาสมาเกล็ดเลือดเข้มข้น
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center border border-[#AE8F4E] rounded-3xl'>
          <div className='w-full md:w-1/3 p-4 flex justify-center'>
            <img
              src='https://res.cloudinary.com/dk0z4ums3/image/upload/v1489474890/attached_image_th/%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%95%E0%B8%B4%E0%B8%94-pobpad.jpg'
              className='rounded-full w-full h-80 object-cover '
            />
          </div>
          <div className='w-full md:w-1/2 p-4'>
            <p className='text-[#767676] mb-4'>
              ปวดข้อ ปวดเส้นเอ็น ปวดกล้ามเนื้อ แพ็กเกจฉีดพลาสมาเกล็ดเลือดเข้มข้น
            </p>
            <ul className='list-disc pl-5 text-[#767676] mb-4 font-th'>
              <li>1 ครั้ง 1 บริเวณ ราคา 7,900.-</li>
              <li>3 ครั้ง 1 บริเวณ ราคา 22,500.-</li>
            </ul>
            <p className='text-[#767676] mb-4 font-th'>
              วันนี้ - 31 ธันวาคม 2567
            </p>
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-[#767676] text-xl font-semibold mb-2'>
            เงื่อนไขการใช้บริการ
          </h2>
          <ul className='list-disc pl-5 text-[#767676] mb-4'>
            <li>
              ราคาดังกล่าวรวมค่าแพทย์และค่าบริการโรงพยาบาลแล้ว
              (ไม่รวมค่าตรวจประเมินก่อนการรักษา)
            </li>
            <li>
              โรงพยาบาล
              ขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
            </li>
            <li>
              กรณีซื้อแพ็กเกจแล้วกรุณาใช้สิทธิ์ภายใน 1 ปี
              นับจากวันที่ซื้อแพ็กเกจ ไม่เช่นนั้นจะถือว่าท่านสละสิทธิ์
            </li>
          </ul>
          <p className='text-[#767676] mb-4 font-th'>
            สอบถามข้อมูลเพิ่มเติม / นัดหมายแพทย์
            <br />
            แผนกศัลยกรรมกระดูก
            <br />
            โทร. 02-185-1444 ต่อ 135
          </p>
        </div>
      </div>
    </div>
  );
}
