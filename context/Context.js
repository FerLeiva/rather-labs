import React, { useContext, createContext } from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
    const [account, setAccount] = React.useState(false);
    const [cooldown, setCooldown] = React.useState(0);
    const [tokenAmount, setTokenAmount] = React.useState(0);
    const answers = [];

    const values = React.useMemo(
        () => ({
            account,
            setAccount,
            tokenAmount,
            setTokenAmount,
            answers,
            cooldown,
            setCooldown,
        }),
        [account, tokenAmount, cooldown]
    ); // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) {
        console.error("Error deploying App Context!!!");
    }

    return context;
}

export default useAppContext;
