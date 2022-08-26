import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../apis/AuthAPI';
import { useAuth } from '../../context/AuthProvider';
import "../../styles/root.css";


export const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] =
    useState(initialState);
  const [error, setError] = useState("");

  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location?.state?.from.pathname || "/";
  
  const loginHandler = async (e, userDetails) => {
    e.preventDefault();
    setUserDetails({...userDetails});

    try {
      const res = await loginAPI(userDetails);
     
      if (res.status === 200) {
        localStorage.setItem(
          "MetaversityToken",
          res.data.encodedToken
        );
        localStorage.setItem("isAuth", true);

        const {encodedToken, foundUser} = res.data;

        console.log(res);
        console.log(res.status);

        setAuth({
          token: encodedToken,
          isAuth: true,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          userEmail: foundUser.email,
        });
        navigate(from, {replace: true});
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="w6we70 w6we70-enter-done">
    <div className="ui-dialog s1fxj4vq" style={{opacity: '1', width: "464px", height: "710px", marginTop: "-355px", marginLeft: "-232px", transform: "scale(1) translateZ(0px)"}}>
    <div className="dialog-head has-close">
      <img className="l1oi4fhy" src="../assets/logo2.6394ee5a.png" />
      </div>
    <button className="close-icon ibzog3e dialog-close">
        <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon">
          <use href="../assets/symbol-defs.380e567f.svg#icon_Close"></use></svg>
    </button>
    <div className="dialog-body s1fxj4vq no-style" style={{zIndex: '2', transform: "none"}}>
        <div className="welcome">
            <div className="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
            <img src="../assets/login_coco.b98ee21b.png" />
        </div>

        <div className="ui-scrollview hide-bar c1rg0pmn" style={{transform: "none"}}>


            <form className="s1x8lvhu" id="login" action="submit" onSubmit={(e) => loginHandler(e, userDetails)}>
                <div className="box">
                    <div className="ui-input">
                        <div className="input-label">Email Address</div>
                        <div className="input-control">
                          <input type="text" tabIndex="1" autoComplete="off" placeholder="Email" value={userDetails.email} onChange={(e)=>setUserDetails((prev)=>({
                            ...prev,
                            email:e.target.value
                          }))}/></div>
                    </div>
                    <div className="ui-input p1utyop3">
                        <div className="input-label">
                            <div style={{flex: "1 1 0%"}}>Login Password</div>
                            <a className="forget" href="/forget">Forgot password?</a>
                        </div>
                        <div className="input-control">
                            <input type="password" autoComplete="off" tabIndex="2" placeholder="Login Password" value={userDetails.password} 
                            onChange={(e)=>setUserDetails((prev)=>({
                              ...prev,
                              password:e.target.value
                            }))}
                            />
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="../assets/symbol-defs.380e567f.svg#icon_View"></use></svg>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="buttons">
                    <button className="ui-button button-big s-conic2" type='submit'>
                      <div className="button-inner">Sign in</div>
                    </button>

                    <button className="ui-button button-big s-gray signup">
                        <div className="button-inner">
                            <span>Sign up</span><svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href="/assets/symbol-defs.380e567f.svg#icon_Arrow"></use></svg>
                        </div>
                    </button>
                    
                </div>
            </form>


            
            
            <div className="s1i8fy8p" id="other-login">
                <div className="box-title">Log in directly with</div>
                <div className="other-group">
                    <button id="gg_login" type="button" title="google">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                            <path
                                fill="#fff"
                                d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"
                            ></path>
                        </svg>
                    </button>
                    <button id="fb_login" type="button" title="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#fff" d="M31.7 16.3a15.7 15.7 0 11-31.4 0 15.7 15.7 0 0131.4 0z"></path>
                            <path fill="#227aee" d="M0 16a16 16 0 0013.4 15.8V20.6h-4v-4.7h4v-4.4c0-2.7 2.3-5.7 6.5-5.6 1.5 0 3.4.5 3.4.5v4s-1.9-.2-3 0c-1.6.2-2 1.4-2 2v3.3h4.9l-1 4.9h-3.8v11.2A16 16 0 100 16z"></path>
                        </svg>
                    </button>
                    <button id="tg_login" type="button" title="telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#4bb2dd" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                            <path
                                fill="#fff"
                                d="M15 20.6l3.5 2.6.9.5.3.1c.4 0 .7-.2.7-.6l.3-1.2 1.2-5.4 1.3-6.4V10a1 1 0 00-.3-.8.8.8 0 00-.9 0l-5.6 2.1-8.8 3.4-1.5.7a.5.5 0 00-.4.5c0 .3.3.4.5.4l4 1.2a.5.5 0 00.3 0l8-5 1.1-.7c.2-.1.4-.3.6 0l-.2.2-1.4 1.3q-3 2.6-5.8 5.3l-.2.3-.3 3.1v.9c.4 0 .7-.2 1-.5l1.8-1.8z"
                            ></path>
                        </svg>
                        <iframe
                            id="telegram-login-BC_GAME_Bot"
                            src="https://oauth.telegram.org/embed/BC_GAME_Bot?origin=https%3A%2F%2Fbc.game&amp;size=large&amp;request_access=write"
                            width="238"
                            height="40"
                            frameBorder="0"
                            scrolling="no"
                            style={{overflow: "hidden", border: "none", height: "40px", width: "219px"}}
                        ></iframe>
                        <script async="" src="https://telegram.org/js/telegram-widget.js?5" data-telegram-login="BC_GAME_Bot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write" gapi_processed="true"></script>
                    </button>
                    <div className="line"></div>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#f3f8fa" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                            <path fill="#f6851b" d="M13.4 10.5l5.5.1 4.6 6.2 1.1 3.7-1.2 3.7-3.8-.8-2 2.2H15l-2.6-2-4 1-1.2-4 1.2-3.9z"></path>
                            <path fill="#e2761b" d="M13.5 10.5l-5.7-2-1 2.8.6 2.7-.3.4.5.5-.3.3.4.5-.2.3.8.9 3.6-1.1 2.8-2.2z"></path>
                            <path fill="#763d16" d="M7.8 8.5l-1 2.8.6 2.7-.3.4.5.5-.3.3.4.5-.2.3.8.9 3.6-1.1 2.8-2.2z"></path>
                            <path fill="#e4761b" d="M17.3 13.6l-.1 4.2v4.7l.4-2.6 2-.7 1.4-1.6-1.3-2z"></path>
                            <path fill="#e4751f" d="M19.5 19V21l1.6-3.3zM17.2 17.8v4.7l.5-3.5z"></path>
                            <path fill="#cd6116" d="M17.2 17.8l3.9-.2-1.6 1.6-2 .7z"></path>
                            <path fill="#233447" d="M17.6 19.9l.5-1.3 1.4.6z"></path>
                            <path fill="#e4761b" d="M19.4 20.9l5.2-.4-1.2 3.8-3.8-.9-1.9-.6z"></path>
                            <path fill="#cd6116" d="M19.4 20.9l.2 2.5 1.9-2.7z"></path>
                            <path fill="#e2761b" d="M18.2 10.6l6-2 .8 2.7-.7 2.8.4.3-.5.4.3.4-.4.5.2.2-.7 1-3.8-1.2-2.5-2.1z"></path>
                            <path fill="#763d16" d="M24.3 8.7l.7 2.6-.7 2.8.4.3-.5.4.3.4-.4.5.2.2-.7 1-3.8-1.2-2.5-2.1z"></path>
                            <path fill="#e4761b" d="M14.8 13.6v4.2l.2 4.6-.6-2.5-2-.7-1.4-1.6 1.3-2z"></path>
                            <path fill="#e4751f" d="M12.5 19l.1 1.9-1.6-3.3z"></path>
                            <path fill="#cd6116" d="M14.8 17.8l-3.8-.2 1.5 1.6 2 .7z"></path>
                            <path fill="#233447" d="M14.4 19.9l-.5-1.3-1.4.6z"></path>
                            <path fill="#e4761b" d="M12.6 20.9l-5.5-.2 1.2 3.9 4.1-1.2 1.9-.6z"></path>
                            <path fill="#cd6116" d="M12.6 20.9l-.2 2.5-1.9-2.6z"></path>
                            <path fill="#d7c1b3" d="M12.3 23.5l2.5-.8h2.8l2 .7-2 1.7h-3.1z"></path>
                            <path fill="#c1ae9f" d="M12.2 23.5l2.5 1.2v-.4h3v.4l2-1.3-2 2.2h-3z"></path>
                            <path fill="#233447" d="M15.2 22.5l2-.1.4.3.1 1.6h-3l.1-1.6z"></path>
                        </svg>
                    </button>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#3d96fc" d="M32 16a16 16 0 11-32 0 16 16 0 0132 0z"></path>
                            <path fill="#fff" d="M16 14.4l5 5.2 5.1-5.1 2.2 2.1L21 24l-5-5.1-5.2 5.1-7.2-7.3 2.1-2.1 5.1 5 5.1-5zm7.9-2.4l.1.1-2.3 2.4c-4-3.8-7.5-3.9-11.5 0H10l-2.3-2.4c5.2-5 10.8-5 16-.1z"></path>
                        </svg>
                    </button>
                </div>
            </div>



        </div>
    </div>
</div>
</div>

  )
}
