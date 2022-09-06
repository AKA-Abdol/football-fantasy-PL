import React from "react";
import { atom, useRecoilState } from "recoil";
import SoccerFieldImg from "./../images/SoccerField.png";
import DefaultPlayer from "./DefaultPlayer";
import SelectedPlayers from "./SelectedPlayer";
import onselectShirt from "./../images/onselect_shirt.png";

export const playerSelectAtom = atom({
    key: 'playerSelect',
    default: [] as number[]
})

interface PlayerViewBase {
    pose: number,
    type: string
}

interface FieldsPlayer extends PlayerViewBase {
    type: "Field",
    key: number,
    name: string,
    score: number,
}

interface DefaultView extends PlayerViewBase {
    type: "Default",
}

type PlayerView = DefaultView | FieldsPlayer

export const dummyGenerator = () => {
    const basePlayersArray: Array<PlayerView> = []
    for (let i = 0; i < 15; i++) {
        const myPlayer: PlayerView = i % 2 == 1 ? {
            type: "Field",
            key: i,
            pose: i + 1,
            name: `Abdol${i}`,
            score: i * 5 + 25
        } : {
                pose: i + 1, type: "Default"};

        basePlayersArray.push(myPlayer);
    }
    return basePlayersArray;
}

// const dbPlayerToFieldsPlayer = (dbPlayer: RecruitedPlayerType) => {
//     return {

//         pose: dbPlayer.id,
//         name: `${dbPlayer.firstName} ${dbPlayer.secondName}`,
//         score: dbPlayer.playerStats.score
//     }
// }

// const addPlayersToField = (dbPlayers: RecruitedPlayerType[]) => {
//     const list = dummyGenerator();
//     dbPlayers.forEach((player) => {
//         list.splice(player.positionNum, 1, dbPlayerToFieldsPlayer(player));
//     })
//     return list;
// }


type PlayerOutputType = {
    id: number;
    firstName: string;
    secondName: string;
    club: string;
    role: "Goalkeepers" | "Defenders" | "Midfielders" | "Forwards";
    playerStats: {
        price: number;
        score: number;
        weekId?: number;
    };
};

type TeamOutputType = {
    id: number;
    userId: number;
    user?: string;
    players: RecruitedPlayerType[];
};

type RecruitedPlayerType = PlayerOutputType & { positionNum: number }



const playerGenerator = () => {
    const Players = []

    for (let i = 0; i < 2; i++) {
        const player1: RecruitedPlayerType = {
            id: i + 1,
            firstName: `mamad${i}`,
            secondName: `abdoli${i}`,
            club: `AFC${i}`,
            role: "Goalkeepers",
            positionNum: i,
            playerStats: {
                price: 23,
                score: 25,
                weekId: 3
            }
        }

        Players.push(player1)


    }
    for (let i = 2; i < 7; i++) {
        const player2: RecruitedPlayerType = {
            id: i + 1,
            firstName: `mamad${i}`,
            secondName: `abdoli${i}`,
            club: `AFC${i}`,
            role: "Defenders",
            positionNum: i,
            playerStats: {
                price: 23,
                score: 25,
                weekId: 3
            }
        }

        Players.push(player2)


    }
    for (let i = 8; i < 13; i++) {
        const player3: RecruitedPlayerType = {
            id: i + 1,
            firstName: `mamad${i}`,
            secondName: `abdoli${i}`,
            club: `AFC${i}`,
            role: "Midfielders",
            positionNum: i,
            playerStats: {
                price: 23,
                score: 25,
                weekId: 3
            }
        }

        Players.push(player3)


    }
    for (let i = 13; i < 16; i++) {
        const player4: RecruitedPlayerType = {
            id: i + 1,
            firstName: `mamad${i}`,
            secondName: `abdoli${i}`,
            club: `AFC${i}`,
            role: "Forwards",
            positionNum: i,
            playerStats: {
                price: 23,
                score: 25,
                weekId: 3
            }
        }

        Players.push(player4)
    }

    return Players;
}

// console.log(playerGenerator())
console.log(dummyGenerator());

const myTeam: TeamOutputType = {
    id: 21,
    userId: 29,
    user: "AbdolFC",
    players: playerGenerator()

}

// myTeam.players.reduce((previousValue, currentValue) => previousValue + currentValue, 10)

interface FieldProps {
    props: Array<PlayerView>
}


export default function SoccerField({ props }: FieldProps) {

    const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)



    return (
        <div
            onClick={() => {
                setPlayerSelect(prevState => {
                    const newState:number[] = [];
                    return newState
                })
            }}
            className="flex flex-col py-2 sm:space-y-4 w-full relative z-50 justify-around"
        >
            <img
                src={SoccerFieldImg}
                alt="Soccer field"
                className="absolute w-full h-full -z-50"
            />
            <div
                className="w-full h-[15%] px-4 mt-5 sm:pt-2 flex flex-row justify-around"
            >

                {
                    props.slice(0, 2).map((item, index) => {
                        if (item.type === "Default") {
                            return <DefaultPlayer
                                key={item.pose}
                                pose={item.pose}
                            />
                        } else {
                            return <SelectedPlayers
                                key={item.pose}
                                name={item.name}
                                score={item.score}
                                pose={item.pose}
                            />
                        }
                    })
                }

            </div>
            <div
                className="w-full h-[15%] px-4 sm:py-4 flex flex-row justify-around"
            >
                {
                    props.slice(2, 7).map((item) => {
                        if (item.type === "Default") {
                            return <DefaultPlayer
                                key={item.pose}
                                pose={item.pose}
                            />
                        } else {
                            return <SelectedPlayers
                                key={item.pose}
                                name={item.name}
                                score={item.score}
                                pose={item.pose}

                            />
                        }
                    })
                }


            </div>
            <div
                className="w-full h-[15%] p-4 flex flex-row justify-around"
            >
                {
                    props.slice(7, 12).map((item) => {
                        if (item.type === "Default") {
                            return <DefaultPlayer
                                key={item.pose}
                                pose={item.pose}
                            />
                        } else {
                            return <SelectedPlayers
                                key={item.pose}
                                name={item.name}
                                score={item.score}
                                pose={item.pose}

                            />
                        }
                    })
                }


            </div>
            <div
                className="w-full h-[15%] py-4 px-6 flex flex-row justify-around"
            >
                {
                    props.slice(12, 16).map((item) => {
                        if (item.type === "Default") {
                            return <DefaultPlayer
                                key={item.pose}
                                pose={item.pose}
                            />
                        } else {
                            return <SelectedPlayers
                                key={item.pose}
                                name={item.name}
                                score={item.score}
                                pose={item.pose}
                            />
                        }
                    })
                }

            </div>
        </div>
    )

}