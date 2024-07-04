import Button from "../../../../../../components/Button";

export default function DeleteClinic({ nameClinic, cancel, handleDeleteClinic }) {

  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-light">ต้องการลบ แผนก/คลินิก</h1>
        <h1 className="text-3xl font-light">{nameClinic}</h1>
      </div>
      <div className="flex items-center gap-5">
        <Button onClick={handleDeleteClinic} width="w-[12rem]" btn="active">ยืนยัน</Button>
        <Button onClick={cancel} width="w-[12rem]" btn="success">ยกเลิก</Button>
      </div>
    </div>
  );
}
