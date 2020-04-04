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
  isCatSubMenuClosed: false,
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
      const isCatSubMenuClosed = !state.isCatSubMenuClosed;

      return {
        ...state,
        isCatSubMenuClosed,
      };
    }
    case INPUT_KEYWORD: {
      const {searchKeyword} = action;

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
  if (!context.dataLoaded) {
    fetch(`https://l27wt82pxc.execute-api.eu-west-2.amazonaws.com/dev/videos/details`)
        .then(response => response.json())
        .then(resultData => {
          context.setDataLoaded();
          const body = resultData.body;
          context.setCategories(body.categories);
          context.setYears(body.years);
          context.setCategoryVideoMap(body.categoryVideoMap);
          context.setYearVideoMap(body.yearVideoMap);
        })
  }
  const [{isMenuOpened, isCatSubMenuClosed, searchKeyword}, dispatch] = useReducer(reducer, initialState);
  const toggleMenu = useCallback(() => {
    dispatch({type: TOGGLE_MENU});
  }, []);
  const toggleSubMenu = useCallback(() => {
    dispatch({type: TOGGLE_SUB_MENU});
  }, []);
  const navigateToPath = useCallback((path) => {
    navigate(path);
  }, []);
  const inputKeyword = useCallback((e) => {
    const searchKeyword = e.target.value;

    dispatch({type: INPUT_KEYWORD, searchKeyword});
  });

  const {pathname} = location;
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
  const years = context.years;
  return (
      <myContext.Consumer>
        {() => (
            <GnbWrapper>
              <MobileMenu isActive={isMenuOpened} isSubActive={isCatSubMenuClosed}>
                <Background onClick={toggleMenu} isActive={isMenuOpened}/>
                <MobileMenus>
                  <ul>
                    <ListMenu>
                      <StyledLink to="/" onClick={toggleMenu}>
                        <Home/>
                      </StyledLink>
                    </ListMenu>
                    <ListMenu>
                        <StyledLink to="/about" className={isAbout ? 'active' : ''} onClick={toggleMenu}>
                          About
                        </StyledLink>
                      </ListMenu>
                    <ListMenu>
                      <span onClick={toggleMenu}>
                      Categories
                      </span>{categories.length > 0
                        ? (<>
                          &nbsp;
                          <MovableFaCaretDown
                              className={isCatSubMenuClosed ? 'is-active' : ''}
                              onClick={toggleSubMenu}
                          />
                        </>)
                        : null}
                      <SubMenu>
                        <ul>
                          {categories.map(folder => {
                            if (folder === '') {
                              return null;
                            }
                            return (
                                <li key={folder}>
                                  <Link to={`/videos`} onClick={toggleMenu} state={{folder: folder, division: 'category'}}>
                                    {folder}
                                    &nbsp;
                                  </Link>
                                </li>
                            );
                          })}
                        </ul>
                      </SubMenu>
                    </ListMenu>
                    <ListMenu>
                    <span onClick={toggleMenu}>
                    Age
                    </span>{years.length > 0
                        ? (<>
                          &nbsp;
                          <MovableFaCaretDown
                              className={isSubMenuClosed ? 'is-active' : ''}
                              onClick={toggleSubMenu}
                          />
                        </>)
                        : null}
                      <SubMenu>
                        <ul>
                          {years.map(folder => {
                            if (folder === '') {
                              return null;
                            }
                            return (
                                <li key={folder}>
                                  <Link to={`/videos`} onClick={toggleMenu} state={{folder: folder, division: 'age'}}>
                                    {folder-2015}
                                    &nbsp;
                                  </Link>
                                </li>
                            );
                          })}
                        </ul>
                      </SubMenu>
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
                  <StyledLink to="/about" className={isAbout ? 'active' : ''}>
                    About
                  </StyledLink>
                </ListMenu>
                <ListMenu>
                <span>
                Categories
                  &nbsp;
                  {categories.length > 0 ? <FaCaretDown/> : null}
                </span>
                  <SubMenu>
                    <ul>
                      {categories.map((folder, i) => {
                        if (folder === '') {
                          return null;
                        }
                        return (
                            <li key={i}>
                              <StyledLink to={`/videos`} key={i} state={{folder: folder, division: 'category'}}>
                                {folder}
                                &nbsp;
                              </StyledLink>
                            </li>
                        );
                      })}
                    </ul>
                  </SubMenu>
                </ListMenu>
                <ListMenu>
                <span>
                  Age
                  &nbsp;
                  {years.length > 0 ? <FaCaretDown/> : null}
                </span>
                  <SubMenu>
                    <ul>
                      {years.map((folder, i) => {
                        if (folder === '') {
                          return null;
                        }
                        return (
                            <li key={i}>
                              <StyledLink to={`/videos`} key={i} state={{folder: folder, division: 'age'}}>
                                {folder-2016 + ' Years'}
                                &nbsp;
                              </StyledLink>
                            </li>
                        );
                      })}
                    </ul>
                  </SubMenu>
                </ListMenu>
                {/*{hasPortfolio ? (
          <ListMenu>
            <StyledLink to="/portfolios" className={isYear ? 'active' : ''}>
              Blog
            </StyledLink>
          </ListMenu>
        ) : null}*/}

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
  location: PropTypes.shape({pathname: PropTypes.string.isRequired}).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDracula: PropTypes.bool.isRequired
};

export default Gnb;
