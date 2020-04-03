import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {Link, navigate} from 'gatsby';
import Toggle from 'react-toggle';
import {FaCaretDown, FaSearch} from 'react-icons/fa';
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
import {myContext} from "../App/AppContext";

const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_SUB_MENU = 'TOGGLE_SUB_MENU';
const INPUT_KEYWORD = 'INPUT_KEYWORD';

const initialState = {
  isMenuOpened: false,
  isSubMenuClosed: false,
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
    case TOGGLE_SUB_MENU: {
      const isSubMenuClosed = !state.isSubMenuClosed;

      return {
        ...state,
        isSubMenuClosed,
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
  isDracula
}) => {
  const context = useContext(myContext);
  if (!context.categoriesLoaded) {
    fetch(`https://rv673fuek6.execute-api.eu-west-2.amazonaws.com/Dev/categories?bucket=agastya-encoded`)
        .then(response => response.json())
        .then(resultData => {
          context.setCategories(resultData);
          context.setCategoriesLoaded();
        })
  }
  const [{ isMenuOpened, isSubMenuClosed, searchKeyword }, dispatch] = useReducer(reducer, initialState);
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const toggleSubMenu = useCallback(() => {
    dispatch({ type: TOGGLE_SUB_MENU });
  }, []);
  const navigateToPath = useCallback((path) => {
    navigate(path);
  }, []);
  const inputKeyword = useCallback((e) => {
    const searchKeyword = e.target.value;

    dispatch({ type: INPUT_KEYWORD, searchKeyword });
  });

  const { pathname } = location;
  const isYear = pathname.replace(/\/$/, '').startsWith('/year');
  const isHome = pathname.replace(/\/$/, '') === '';
  const isAbout = pathname.replace(/\/$/, '') === '/about';
  const isBlog = !(isYear || isHome || isAbout);

  useEffect(() => {
    if (isMenuOpened) {
      global.document.body.style.overflow = 'hidden';
    } else {
      global.document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);

  const categories = context.categories;
  return (
      <myContext.Consumer>
        {() => (
            <GnbWrapper>
              <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuClosed}>
                <Background onClick={toggleMenu} isActive={isMenuOpened}/>
                <MobileMenus>
                  <ul>
                    <ListMenu>
                      <StyledLink to="/" onClick={toggleMenu}>
                        <Home/>
                      </StyledLink>
                    </ListMenu>
                    <ListMenu>
              <span onClick={toggleMenu}>
                Years
              </span>{categories.length > 0
                          ? (
                              <>
                                &nbsp;
                                <MovableFaCaretDown
                                    className={isSubMenuClosed ? 'is-active' : ''}
                                    onClick={toggleSubMenu}
                                />
                              </>
                          )
                          : null}
                      <SubMenu>
                        <div>
                          {categories.map(folder => {
                            if (folder === '') {
                              return null;
                            }

                            console.log(folder)

                            return (
                                <li key={folder}>
                                  <Link to={`/year`} onClick={toggleMenu} state={{folder: folder}}>
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
                      <StyledLink to="/about" className={isAbout ? 'active' : ''} onClick={toggleMenu}>
                        About
                      </StyledLink>
                    </ListMenu>
                    <SearchBarWrapper>
                      <label htmlFor="search">
                        <FaSearch/>
                      </label>
                      <SearchBar
                          id="search"
                          type="text"
                          value={searchKeyword}
                          onChange={inputKeyword}
                      />
                    </SearchBarWrapper>
                    {/*<SearchedPosts isEmpty={filteredPosts.length === 0}>
              {filteredPosts.map(({ path, title, summary, tags }) => (
                <SearchedPost key={path}>
                  <Title onClick={() => { navigateToPath(path); }}>
                    {title}
                  </Title>
                  <Summary onClick={() => { navigateToPath(path); }}>
                    {summary}
                  </Summary>
                  {tags.length > 0 ? (
                    <FaTags />
                  ) : null}
                  {[...new Set(tags)].map(tag => (
                    <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}>
                      <small>
                        {tag}
                      </small>
                    </Tag>
                  ))}
                </SearchedPost>
              ))}
            </SearchedPosts>*/}
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
                  <div className="hamburger-inner"/>
                </div>
              </Hamburger>
              <List>
                <ListMenu>
                  <StyledLink to="/">
                    <Home/>
                  </StyledLink>
                </ListMenu>
                <ListMenu>
          <span>
            Years
            &nbsp;
            {categories.length > 0 ? <FaCaretDown/> : null}
          </span>
                  <SubMenu>
                    <div>
                      {categories.map((folder, i) => {
                        if (folder === '') {
                          return null;
                        }
                        const formattedName = folder.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ").substring(0, folder.length - 1);
                        return (
                            <li key={i}>
                              <StyledLink to={`/year`} key={i} state={{folder: folder}}>
                                {formattedName}
                                &nbsp;
                              </StyledLink>
                            </li>
                        );
                      })}
                    </div>
                  </SubMenu>
                </ListMenu>
                {/*{hasPortfolio ? (
          <ListMenu>
            <StyledLink to="/portfolios" className={isYear ? 'active' : ''}>
              Blog
            </StyledLink>
          </ListMenu>
        ) : null}*/}
                <ListMenu>
                  <StyledLink to="/about" className={isAbout ? 'active' : ''}>
                    About
                  </StyledLink>
                </ListMenu>
              </List>
              <SearchBarWrapper>
                <label htmlFor="search">
                  <FaSearch/>
                </label>
                <SearchBar
                    id="search"
                    type="text"
                    value={searchKeyword}
                    onChange={inputKeyword}
                />
              </SearchBarWrapper>
              {/*<SearchedPosts isEmpty={filteredPosts.length === 0}>*/}
              {/*  {filteredPosts.map(({ path, title, summary, tags }) => (*/}
              {/*    <SearchedPost key={path}>*/}
              {/*      <Title onClick={() => { navigateToPath(path); }}>*/}
              {/*        {title}*/}
              {/*      </Title>*/}
              {/*      <Summary onClick={() => { navigateToPath(path); }}>*/}
              {/*        {summary}*/}
              {/*      </Summary>*/}
              {/*      {tags.length > 0 ? (*/}
              {/*        <FaTags />*/}
              {/*      ) : null}*/}
              {/*      {[...new Set(tags)].map(tag => (*/}
              {/*        <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}>*/}
              {/*          <small>*/}
              {/*            {tag}*/}
              {/*          </small>*/}
              {/*        </Tag>*/}
              {/*      ))}*/}
              {/*    </SearchedPost>*/}
              {/*  ))}*/}
              {/*</SearchedPosts>*/}
            </GnbWrapper>)
        }
      </myContext.Consumer>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDracula: PropTypes.bool.isRequired
};

export default Gnb;
