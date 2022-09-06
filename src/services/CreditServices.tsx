import http from "./http";

const GET_CREDIT = "team";

export const getCredit = async () => {
    const response = await http.get(GET_CREDIT);
    const teamData = response.data.team;
    return teamData;
}