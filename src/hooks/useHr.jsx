import { useContext } from "react";
import { HrContext } from "../contexts/HrContext";

export default function useHr () {
    return useContext( HrContext )
}