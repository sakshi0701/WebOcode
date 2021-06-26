import React from 'react';
import CSGO from './CSGO.jpg';
import fortnite from './fortnite.jpg';
import rocketLeague from './rocketLeague.jpg';
import './games.css';

const Games = () => {
    return (
        <div className="games" id="games">
            <div className="gamebox" id="one">
                <div className="game-img">
                    <img src={CSGO} alt="Counter Strike" />
                </div>
                <div className="game-content">
                    <div className="game-name">
                        COUNTER STRIKE
                    </div>
                    <div className="game-desc">
                        Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to prevent it (bomb defusal, hostage rescue). The series began on Windows in 1999 with the release of the first game, Counter-Strike.
                    </div>
                </div>
            </div>

            <div className="gamebox" id="two">
                <div className="game-img">
                    <img src={fortnite} alt="fortnite" />
                </div>
                <div className="game-content">
                    <div className="game-name">
                        FORTNITE
                    </div>
                    <div className="game-desc">
                        Fortnite, developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.
                    </div>
                </div>
            </div>

            <div className="gamebox" id="three">
                <div className="game-img">
                    <img src={rocketLeague} alt="rocketLeague" />
                </div>
                <div className="game-content">
                    <div className="game-name">
                        ROCKET LEAGUE
                    </div>
                    <div className="game-desc">
                        Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games;