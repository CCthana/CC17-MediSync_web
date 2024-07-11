import { useContext } from "react";
import { VnContext } from "../contexts/VnContext";

export default function useVn() {
    return useContext( VnContext )
}