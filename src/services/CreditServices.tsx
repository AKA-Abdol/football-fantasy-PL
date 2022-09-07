import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";
const GET_CREDIT = "team";

export const getCredit = async () => {
    const response = await http.get(GET_CREDIT, {
        headers: {
            Authorization : `sara ${localStorage.getItem(TOKEN_SESSION_NAME)}`
        }
    });
    const teamData = response.data.team;
    return teamData.credit;
}