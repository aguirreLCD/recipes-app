'use client';

import { ReactNode, SetStateAction, createContext, useState } from "react";

interface searchContextTypes {
    search: string | number;
    setSearch: React.Dispatch<SetStateAction<any>>
}

export const SearchContext = createContext<searchContextTypes>({
    search: "",
    setSearch: () => {},
});

export default function SearchProvider ( {children} : {children: ReactNode} ) {
    const [search, setSearch] = useState("")
    
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
};