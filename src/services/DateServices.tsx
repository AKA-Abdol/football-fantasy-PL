import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";

const GET_DATE = "week";

export const getDate = async () => {
    const response = await http.get(GET_DATE, {
        headers : {
            Authorization : `sara ${localStorage.getItem(TOKEN_SESSION_NAME)}`
        }
    });

    const date = response.data.week;

    return date;
}