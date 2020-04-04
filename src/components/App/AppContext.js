import React, {useState} from 'react';

export const myContext = React.createContext();

const AppContext = props => {
    const [categories, setCategories] = useState([]);
    const [years, setYears] = useState([]);
    const [categoryVideoMap, setCategoryVideoMap] = useState({});
    const [yearVideoMap, setYearVideoMap] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    return (
        <myContext.Provider value={{
            categories,
            setCategories: (folders) => setCategories(folders),
            years,
            setYears: (folders) => setYears(folders),
            categoryVideoMap,
            setCategoryVideoMap: (folders) => setCategoryVideoMap(folders),
            yearVideoMap,
            setYearVideoMap: (folders) => setYearVideoMap(folders),
            dataLoaded,
            setDataLoaded: () => setDataLoaded(true)
        }}>
            {props.children}
        </myContext.Provider>
    )
};

export default ({element}) => (
    <AppContext>
        {element}
    </AppContext>
)
