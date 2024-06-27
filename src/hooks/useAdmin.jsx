import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";

export default function useAdmin() {
    return useContext(AdminContext)
}