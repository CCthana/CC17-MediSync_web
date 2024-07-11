import { useContext } from "react";
import { HnContext } from "../contexts/HnContext";


export default function useHn() {
    return useContext( HnContext )
}