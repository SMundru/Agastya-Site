import React, {useState} from 'react';

export const myContext = React.createContext();

const AppContext = props => {
    const [categories, setCategories] = useState([]);
    const [categoriesLoaded, setCategoriesLoaded] = useState(false);


    return (
        <myContext.Provider value={{
            categories,
            setCategories: (folders) => setCategories(folders),
            categoriesLoaded,
            setCategoriesLoaded: () => setCategoriesLoaded(true)
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
