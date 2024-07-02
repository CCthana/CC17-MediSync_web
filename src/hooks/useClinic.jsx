import { useContext } from "react";
import { ClinicContext } from "../contexts/ClinicContext";


export default function useClinic() {
    return useContext( ClinicContext )
}