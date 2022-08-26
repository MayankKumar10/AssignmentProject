import React from 'react'
import { Link } from 'react-router-dom';
import { affiliate, bcdcoin2, Btc, Discord, enter, enterLight, Facebook, fairness, forum, Github, home, Ins, livecasino, lottery, Medium, myfavorite, originalcasino, pig, pointer, promotion, Recharge_d, shitcode, slots, spinWeel, spin_default, symbol_defs, task_D, Telegram, Twitter, vipclub } from '../../assets';
import "../../styles/root.css";


export const Sidenav = () => {
  return (
    <div id="sidebar" className="px5bn9l">
    <div className="sidebar-wrap hidden-scroll-y">
        <Link to='/' className="m1l4mco8 menu-item select">
            <div className="menu-pc"><img alt="menu-icon" src={home}/><span>Home</span></div>
        </Link>
        <div className="m1l4mco8 mv4viud menu-item">
            <div className="menu-pc"><img alt="menu-icon" src={originalcasino} /><span>BC Originals</span></div>
            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon right"><use href={symbol_defs}></use></svg>
            <div className="hover-list-wrap">
                <div className="list-shadow hidden-scroll-y">
                    <a className="g6gkn57 game-item" href="crash.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">crash</span>
                    </a>
                    <a className="g6gkn57 game-item" href="cave.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">SlotsCave</span>
                    </a>
                    <a className="g6gkn57 game-item" href="classic-dice.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">ClassicDice</span>
                    </a>
                    <a className="g6gkn57 game-item" href="hash-dice.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">HashDice</span>
                    </a>
                    <a className="g6gkn57 game-item" href="hilo.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Hilo</span>
                    </a>
                    <a className="g6gkn57 game-item" href="keno.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">KenoSingle</span>
                    </a>
                    <a className="g6gkn57 game-item" href="keno-multiplayer.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Keno</span>
                    </a>
                    <a className="g6gkn57 game-item" href="limbo.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Limbo</span>
                    </a>
                    <a className="g6gkn57 game-item" href="mines.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Mines</span>
                    </a>
                    <a className="g6gkn57 game-item" href="plinko.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Plinko</span>
                    </a>
                    <a className="g6gkn57 game-item" href="ultimate-dice.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">UltimateDice</span>
                    </a>
                    <a className="g6gkn57 game-item" href="video-poker.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">VideoPoker</span>
                    </a>
                    <a className="g6gkn57 game-item" href="wheel.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Wheel</span>
                    </a>
                    <a className="g6gkn57 game-item" href="roulette.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">RouletteSingle</span>
                    </a>
                    <a className="g6gkn57 game-item" href="tower-legend.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Tower</span>
                    </a>
                    <a className="g6gkn57 game-item" href="baccarat-multiplayer.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Baccarat</span>
                    </a>
                    <a className="g6gkn57 game-item" href="roulette-multiplayer.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">roulette</span>
                    </a>
                    <a className="g6gkn57 game-item" href="blackjack.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">blackjack</span>
                    </a>
                    <a className="g6gkn57 game-item" href="egyptian.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">SlotsEgyptianAdventure</span>
                    </a>
                    <a className="g6gkn57 game-item" href="oriental-beauties.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">SlotsOrientalBeauties</span>
                    </a>
                    <a className="g6gkn57 game-item" href="sword.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">SlotsSword</span>
                    </a>
                    <a className="g6gkn57 game-item" href="ring-of-fortune.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">Coloring</span>
                    </a>
                    <a className="g6gkn57 game-item" href="coinflip.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">CoinFlip</span>
                    </a>
                    <a className="g6gkn57 game-item" href="baccarat.html">
                        <div className="game-icon">
                            <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                        </div>
                        <span className="game-name">BaccaratSingle</span>
                    </a>
                </div>
            </div>
        </div>
        <a className="m1l4mco8 menu-item" href="slots-list/all.html">
            <div className="menu-pc"><img alt="menu-icon" src={slots}/><span>Slots</span></div>
        </a>
        <a className="m1l4mco8 menu-item" href="live-list/all.html">
            <div className="menu-pc"><img alt="menu-icon" src={livecasino}/><span>Live Casino</span></div>
        </a>
        <a className="m1l4mco8 menu-item special-nav" href="promotion.html">
            <div className="menu-pc"><img alt="menu-icon" src={promotion}/><span>Promotions</span></div>
        </a>
        <div className="rf2b8zo actions">
            <div className="bie5mtw">
                <button className="t181bm0p bonus-item">
                    <div className="img-wrap active"><img className="img-bg" src={task_D} alt="task" /></div>
                </button>
            </div>
            <div className="bie5mtw">
                <button className="eqhxg7y bonus-item">
                    <div className="enter-animate active">
                        <img className="img-top" src={spinWeel} alt="" /><img className="img-bot" src={pointer} alt="" /><img className="img-bg" src={spin_default} alt="" />
                    </div>
                </button>
            </div>
            <div className="bie5mtw">
                <div className="bonus-item ecdtgn0 bonus-locked">
                    <div className="right-tip locked">
                        <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon icon-locked"><use href={symbol_defs}></use></svg>
                    </div>
                    <div className="enter-animate"><img className="img-bg" src= {pig}/></div>
                </div>
            </div>
            <div className="bie5mtw">
                <button className="ruw7p6y bonus-item bonus-locked">
                    <div className="right-tip locked">
                        <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon icon-locked"><use href={symbol_defs}></use></svg>
                    </div>
                    <div className="enter-animate"><img className="img-bg" src={Recharge_d} alt="" /></div>
                </button>
            </div>
            <div className="bie5mtw">
                <button className="shitcode"><img alt="shitcode" src={shitcode} /></button>
            </div>
            <div className="bie5mtw">
                <button className="s1ek745r bonus-item">
                    <div className="img-wrap">
                        <img className="base" src={enter}/>
                        <img
                            className="before-light"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAHgAAAAAsUXibAAADTklEQVRIDa1WTU/cMBAd28my7G4FFNRFKqp64If22L/Qv8Cf2EuPe+2lJ1RxKBKlUJb9SJy479meJdBUVBVPct7EM36ZHY+zEQHC2ZkL83kZRwjFlmk/N2YzxlgMQy1FvAlhVoicOJ18xOcXRt6fBCH3QX1kOfUIaY0x6SkhzEu5LAdx3bQOsI2Q/wGXiJ0ilszw6XQE8dMqZ/wFom4n6lzfGHm9H4RMqE3uw9WVyNGRCFlRD5ssPBvKt/vdOL+3J3J7K0LuA1xCF5lQuxu+ZzxqC1zsGDmQVOMFfsnBWITchwNMLjDIhNpkxU8JSbi8s7JySZjXFUb/Vj74GEP0xRe+TcJyLLK57JfaHQZZrY2QCbXJBAvIh6RCJnt/p0nC7tyKG/YLV1hFD5lQW6PtIIhDE5CjH/ayskn4Bq0yaVPoGt4hBrkP6iMTFQJt5niPizEuCR9CuK6TsNsgEJ1HjmAX0k7dKDVsdia5DyP4Kp8zNgsIhyTMp9c5i7hQU1fmZNeOQQ+XuNZm4V/IOFRatYeg/7VCyKWwSwjnGj8nViGAh5/8N7SNlqIwslqlehcuiMeJJPeBpeLZIfegxtpyt8zCFj1p2hTaoCKmFSFH1LiWGGRcvTVl0QYy79Umx3vOVm0SXiy9nViblZgOvXqk1Y46UsZ2NZkppXbyc0aaKtV4wps2txvtDrxvTVHYQOa02uRO2GPTmJTx/ebOjrHksbdz192oBrVvsQdkooHtYJMVrU0ZmxU2b7Atqroj69OUISDRBhMsWAFbC8e54HLGYnnWbdw83+CnO/x0MIMoEhfzhoBP6CMTamt8XJA3bzRCQF3HRAqDBaE2kTH9x4MsskPTFGDiaTw6gq2a221dG9/oGxirIhLH7Gsff0Wchh4Kh0xTlG+Sj5xmUIqN5JOH/Aq70cZVf+KAmrJI4D6oL7IGbGtc+KWszXecJitNsFKi+fE9gbgxOiC/1nTVE+Ym8s8nb2a0lxu3Tf9J+PY2zD+V4pZjbPAEL/BXMjQHOISHKFzck22gGtzpUn48K6zxXY5fPZ8/7kvpj8S4I7zA3qBWPPfIHsPL1X8JR4HOhZ9ocvL1WFz7rgntW9Th+kWEO8+QMPtQiBvox0HX9TL2bzf0ke1FVy2lAAAAAElFTkSuQmCC"
                            alt=""
                        />
                        <img className="coin" src={bcdcoin2} />
                        <div className="bubble"></div>
                        <img className="light" src={enterLight} />
                    </div>
                </button>
            </div>
        </div>
        <a className="m1l4mco8 menu-item" href="lottery.html">
            <div className="menu-pc"><img alt="menu-icon" src={lottery} /><span>Lottery</span></div>
        </a>
        <a className="m1l4mco8 menu-item" href="casino.html">
            <div className="menu-pc"><img alt="menu-icon" src={affiliate}/><span>Affiliate</span></div>
        </a>
        <a className="m1l4mco8 menu-item special-nav vip" href="vip-club.html">
            <div className="menu-pc"><img alt="menu-icon" src={vipclub} /><span>VIP Club</span></div>
        </a>
        <a className="m1l4mco8 menu-item" href="../forum.bc.game/index.html" target="_blank" rel="noopener noreferrer">
            <div className="menu-pc"><img alt="menu-icon" src={forum} /><span>Forum</span></div>
        </a>
        <a className="m1l4mco8 menu-item" href="help/provably-fair.html">
            <div className="menu-pc"><img alt="menu-icon" src={fairness} /><span>Provably Fair</span></div>
        </a>
        <div className="s8evb3l"></div>
        <a className="m1l4mco8 menu-item" href="my-favorite.html">
            <div className="menu-pc"><img alt="menu-icon" src={myfavorite} /><span>Favorite Games</span></div>
        </a>
        <a className="m1l4mco8 menu-item" href="recent.html">
            <div className="menu-pc">
                <img
                    alt="menu-icon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC"
                />
                <span>My Recent Play</span>
            </div>
        </a>
        <div className="line"></div>
        <div className="t1dtxou7 border_bottom">
            <span>Language &amp; Currency</span>
            <div className="p1qqjwqn">
                <div className="show-label">
                    <p className="l">English</p>
                    <p className="f"></p>
                    <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                </div>
            </div>
            <div className="m1noeugc theme">
                <div className="theme-check">
                    <div className="item is-active">
                        <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                    </div>
                    <div className="item">
                        <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                    </div>
                </div>
                <div className="theme-word">
                    <p>Darkmode</p>
                    <p>Currently</p>
                </div>
            </div>
        </div>
        <div className="border_bottom">
            <div className="live">
                <div className="support-icon">
                    <svg xmlns="http://www.w3.org/1999/xlink" className="s8znn37 icon"><use href={symbol_defs}></use></svg>
                </div>
                <span>Live Support</span>
            </div>
        </div>
        <div className="border_bottom end">
            <div className="network">
                <span>Social Media</span>
                <div className="s1symp24 social-links">
                    <a className="telegram" href="../t.me/bcgamewin.html" target="_blank" rel="noopener noreferrer"><img src={Telegram} className="telegram" alt="" /></a>
                    <a className="medium" href="../medium.com/%40BC.html" target="_blank" rel="noopener noreferrer"><img src={Medium} className="medium" alt="" /></a>
                    <a className="github" href="../github.com/bcgame-project.html" target="_blank" rel="noopener noreferrer"><img src={Github} className="github" alt="" /></a>
                    <a className="twitter" href="../twitter.com/BCGameOfficial.html" target="_blank" rel="noopener noreferrer"><img src={Twitter} className="twitter" alt="" /></a>
                    <a className="facebook" href="../www.facebook.com/bcgameofficial.html" target="_blank" rel="noopener noreferrer"><img src={Facebook} className="facebook" alt="" /></a>
                    <a className="discord" href="../discord.com/invite/bcgame.html" target="_blank" rel="noopener noreferrer"><img src={Discord} className="discord" alt="" /></a>
                    <a className="instagram" href="../www.instagram.com/bc.gameofficial/index.html" target="_blank" rel="noopener noreferrer"><img src={Ins} className="instagram" alt="" /></a>
                    <a className="bitcoin" href="../bitcointalk.org/index5144.html?topic=5088875.0" target="_blank" rel="noopener noreferrer"><img src={Btc} className="bitcoin" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
