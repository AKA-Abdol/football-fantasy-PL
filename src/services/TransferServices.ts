import http from './http';
import { TOKEN_SESSION_NAME } from './SignServices';

export interface swapI {
    position1: number;
    position2: number;
}
export const swapPlayers = async (swapQuery: swapI) => {
    const response = await http.put('/team/player', {}, {
        params: swapQuery,
        headers: {
            Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
        }
    });
}