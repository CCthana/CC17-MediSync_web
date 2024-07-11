import { useContext } from "react";
import { PackageContext } from "../contexts/PackageContext";

export default function usePackage() {
    return useContext( PackageContext )
}