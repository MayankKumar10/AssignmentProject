import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/root.css";


export const Header = () => {
  return (
    <div className="hgcha5h" id="header">
          <div className="p1hr7rs7 wrap-unfold">
              <div className="unfold-enter-wrap">
                  <a className="active" href="index.html">
                       <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="../assets/symbol-defs.svg"></use></svg><span>Casino</span>
                  </a>
                  <a className="sports" href="sports.html">
                      <div className="new-tag">NEW</div>
                       <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="../assets/symbol-defs.svg"></use></svg><span>Sports</span>
                  </a>
              </div>
              <button className="fold-btn">
                   <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="../assets/symbol-defs.svg"></use></svg>
              </button>
          </div>
          <div className="header">
              <div className="p1s0258n left">
                  <a className="p11i7sya logo-pc" href="index.html">
                    <h1>Metaversity Technologies</h1>
                  </a>
                  <div className="pa93hwe search-pc">
                      <div className="search-input-wrap-pc">
                          <div className="s1l6cj5a">
                               <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="../assets/symbol-defs.svg"></use></svg><input placeholder="Game name | Provider | Category Tag" value="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="login-in">
                  <Link to='/login'>
                  <p>Sign in</p>
                  </Link>

                  <Link to='/signup'>
                  <button className="ui-button button-normal s-conic">
                    <div className="button-inner">Sign up</div>
                  </button>
                  </Link>
                  <button className="ci9klos" id="chat">
                      <div className="chat-btn active">
                           <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon">
                            <use href="../assets/symbol-defs.svg"></use></svg>
                      </div>
                  </button>
              </div>
          </div>
      </div>
  )
}
