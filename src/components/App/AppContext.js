import React, { useState } from 'react';

export const myContext = React.createContext();

const AppContext = (props) => {
  const prevAuth = window.localStorage.getItem('auth') || false;
  const prevAuthBody = window.localStorage.getItem('authBody') || null;
  const [categories, setCategories] = useState([]);
  const [years, setYears] = useState([]);
  const [categoryVideoMap, setCategoryVideoMap] = useState({});
  const [yearVideoMap, setYearVideoMap] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [authBody, setAuthBody] = useState(prevAuthBody);
  const [authError, setAuthError] = useState('');


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
      setDataLoaded: () => setDataLoaded(true),
      authenticated,
      setAuthenticated: (isLoggedIn) => setAuthenticated(isLoggedIn),
      authBody,
      setAuthBody: (body) => setAuthBody(body),
      authError,
      setAuthError: (error) => setAuthError(error),
    }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => (
  <AppContext>
    {element}
  </AppContext>
);
