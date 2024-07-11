import { useEffect, useState } from "react";

// Custom Hook
export function useFetch(URL) {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function receiveData() {
            const res = await fetch(URL)
            const json = await res.json()
            setData(json)
        }

        receiveData()
    }, [URL])

    return { data } // usar essa sintaxe para poder exportar o retorno.
}