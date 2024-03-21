import { useContext } from "react";
import { profileNameContext } from "./ExampleContext";

//custome Hooks
export const useGlobalContext = () => {
    return useContext(profileNameContext)
}