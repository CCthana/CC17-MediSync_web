import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function LogoutPageUser({ cancel, logout }) {
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-light">คุณต้องการออกจากระบบ</h1>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/">
          <Button onClick={() => logout()} width="w-[12rem]" btn="active">
            ยืนยัน
          </Button>
        </Link>
        <Button onClick={cancel} width="w-[12rem]" btn="success">
          ยกเลิก
        </Button>
      </div>
    </div>
  );
}