import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';
import { FaCaretDown, FaSearch } from 'react-icons/fa';
import {
  Background,
  GnbWrapper,
  Hamburger,
  Home,
  List,
  ListMenu,
  MobileMenu,
  MobileMenus,
  MovableFaCaretDown,
  SearchBar,
  SearchBarWrapper,
  StyledLink,
  SubMenu,
  ToggleWrapper,
} from './styled';
import { myContext } from '../App/AppContext';

const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_CAT_SUB_MENU = 'TOGGLE_CAT_SUB_MENU';
const TOGGLE_AGE_SUB_MENU = 'TOGGLE_AGE_SUB_MENU';
const INPUT_KEYWORD = 'INPUT_KEYWORD';

const initialState = {
  isMenuOpened: false,
  isCatSubMenuClosed: false,
  isAgeSubMenuClosed: false,
  searchKeyword: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpened = !state.isMenuOpened;

      return {
        ...state,
        isMenuOpened,
      };
    }
    case TOGGLE_CAT_SUB_MENU: {
      const isCatSubMenuClosed = !state.isCatSubMenuClosed;

      return {
        ...state,
        isCatSubMenuClosed,
      };
    }

    case TOGGLE_AGE_SUB_MENU: {
      const isAgeSubMenuClosed = !state.isAgeSubMenuClosed;

      return {
        ...state,
        isAgeSubMenuClosed,
      };
    }
    case INPUT_KEYWORD: {
      const { searchKeyword } = action;

      return {
        ...state,
        searchKeyword,
      };
    }
    default:
      return state;
  }
};

const Gnb = ({
  location,
  toggleTheme,
  isDracula,
}) => {
  const context = useContext(myContext);
  if (typeof context !== 'undefined') {
    const { dataLoaded } = context;
    if (!dataLoaded) {
      fetch('https://l27wt82pxc.execute-api.eu-west-2.amazonaws.com/dev/videos/details')
        .then((response) => response.json())
        .then((resultData) => {
          context.setDataLoaded();
          const { body } = resultData;
          context.setCategories(body.categories);
          context.setYears(body.years);
          context.setCategoryVideoMap(body.categoryVideoMap);
          context.setYearVideoMap(body.yearVideoMap);
        });
    }
  }
  const [{ isMenuOpened, isCatSubMenuClosed, isAgeSubMenuClosed, searchKeyword }, dispatch] = useReducer(reducer, initialState);
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const toggleCatSubMenu = useCallback(() => {
    dispatch({ type: TOGGLE_CAT_SUB_MENU });
  }, []);
  const toggleAgeSubMenu = useCallback(() => {
    dispatch({ type: TOGGLE_AGE_SUB_MENU });
  }, []);
  const inputKeyword = useCallback((e) => {
    const searchKeyword = e.target.value;

    dispatch({ type: INPUT_KEYWORD, searchKeyword });
  });

  const { pathname } = location;
  const isVideos = pathname.replace(/\/$/, '') === '/videos';
  const isHome = pathname.replace(/\/$/, '') === '';
  const isAbout = pathname.replace(/\/$/, '') === '/about';

  useEffect(() => {
    if (isMenuOpened) {
      global.document.body.style.overflow = 'hidden';
    } else {
      global.document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);

  let categories = [];
  let years = [];

  if (typeof context !== 'undefined') {
    categories = context.categories;
    years = context.years;
  }
  return (
    <myContext.Consumer>
      {() => (
        <GnbWrapper>
          <MobileMenu isActive={isMenuOpened}>
            <Background onClick={toggleMenu} isActive={isMenuOpened} />
            <MobileMenus>
              <ul>
                <ListMenu>
                  <StyledLink to="/" className={isHome ? 'active' : ''} onClick={toggleMenu}>
                    <Home />
                  </StyledLink>
                </ListMenu>
                <ListMenu>
                  <StyledLink to="/about" className={isAbout ? 'active' : ''} onClick={toggleMenu}>
                    About
                  </StyledLink>
                </ListMenu>
                <ListMenu>
                  <span role="button" onClick={toggleCatSubMenu} onKeyDown={toggleCatSubMenu} tabIndex={0}>
                    Categories
                  </span>
                  {categories.length > 0
                    ? (
                      <>
                          &nbsp;
                        <MovableFaCaretDown
                          className={isCatSubMenuClosed ? 'is-active' : ''}
                          onClick={toggleCatSubMenu}
                        />
                      </>
                    )
                    : null}
                  <SubMenu isActive={isCatSubMenuClosed}>
                    <div>
                      {categories.map((folder) => {
                        if (folder === '') {
                          return null;
                        }
                        return (
                          <li key={folder}>
                            <Link to="/videos" onClick={toggleMenu} state={{ folder, division: 'category' }}>
                              {folder}
                                    &nbsp;
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </SubMenu>
                </ListMenu>
                <ListMenu>
                  <span role="button" onClick={toggleAgeSubMenu} onKeyDown={toggleCatSubMenu} tabIndex={0}>
                    Age
                  </span>
                  {years.length > 0
                    ? (
                      <>
                          &nbsp;
                        <MovableFaCaretDown
                          className={isAgeSubMenuClosed ? 'is-active' : ''}
                          onClick={toggleAgeSubMenu}
                        />
                      </>
                    )
                    : null}
                  <SubMenu isActive={isAgeSubMenuClosed}>
                    <div>
                      {years.map((folder) => {
                        if (folder === '') {
                          return null;
                        }
                        return (
                          <li key={folder}>
                            <Link to="/videos" onClick={toggleMenu} state={{ folder, division: 'age' }}>
                              {folder}
                                    &nbsp;
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </SubMenu>
                </ListMenu>
                <SearchBarWrapper>
                  <label htmlFor="search">
                    <FaSearch />
                  </label>
                  <SearchBar
                    id="search"
                    type="text"
                    value={searchKeyword}
                    onChange={inputKeyword}
                  />
                </SearchBarWrapper>
              </ul>
            </MobileMenus>
          </MobileMenu>
          <ToggleWrapper>
            <Toggle
              defaultChecked={isDracula}
              icons={{
                checked: <span role="img" aria-label="change-theme">🌙</span>,
                unchecked: <span role="img" aria-label="change-theme">☀️</span>,
              }}
              onChange={toggleTheme}
            />
          </ToggleWrapper>
          <Hamburger
            className={`hamburger hamburger--spin js-hamburger ${isMenuOpened ? 'is-active' : ''}`}
            onClick={toggleMenu}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </Hamburger>
          <List>
            <ListMenu>
              <StyledLink to="/">
                <Home />
              </StyledLink>
            </ListMenu>
            <ListMenu>
              <StyledLink to="/about" className={isAbout ? 'active' : ''}>
                About
              </StyledLink>
            </ListMenu>
            <ListMenu>
              <span className={isVideos ? 'active' : ''}>
                Categories
                &nbsp;
                {categories.length > 0 ? <FaCaretDown /> : null}
              </span>
              <SubMenu>
                <div>
                  {categories.map((folder) => {
                    if (folder === '') {
                      return null;
                    }
                    return (
                      <li key={folder}>
                        <StyledLink to="/videos" key={folder} state={{ folder, division: 'category' }}>
                          {folder}
                                &nbsp;
                        </StyledLink>
                      </li>
                    );
                  })}
                </div>
              </SubMenu>
            </ListMenu>
            <ListMenu>
              <span>
                Age
                &nbsp;
                {years.length > 0 ? <FaCaretDown /> : null}
              </span>
              <SubMenu>
                <div>
                  {years.map((folder) => {
                    if (folder === '') {
                      return null;
                    }
                    return (
                      <li key={folder}>
                        <StyledLink to="/videos" key={folder} state={{ folder, division: 'age' }}>
                          {folder}
                                &nbsp;
                        </StyledLink>
                      </li>
                    );
                  })}
                </div>
              </SubMenu>
            </ListMenu>
          </List>
          <SearchBarWrapper>
            <label htmlFor="search">
              <FaSearch />
            </label>
            <SearchBar
              id="search"
              type="text"
              value={searchKeyword}
              onChange={inputKeyword}
            />
          </SearchBarWrapper>
        </GnbWrapper>
      )}
    </myContext.Consumer>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDracula: PropTypes.bool.isRequired,
};

export default Gnb;
