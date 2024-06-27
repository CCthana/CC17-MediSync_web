import { useContext } from "react";
import { DoctorContext } from "../contexts/DoctorContext";


export default function useDoctor() {
    return useContext( DoctorContext )
}