import { useState } from "react";

const useInitialState = () => {
    const [filtro, setFiltro] = useState(null);

    const searchContext = (e) => {
        setFiltro(e);
    }

    return {
        searchContext,
        filtro,
        setFiltro
    }
}

export default useInitialState;
