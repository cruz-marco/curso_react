import { useContext } from "react";
import { TitleColorContext } from "../context/TltleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    if (!context){
        console.log('Nenhum contexto de cor de título encontrado')
    }

    return context
}