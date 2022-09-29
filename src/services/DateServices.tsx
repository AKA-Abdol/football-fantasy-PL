import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";

const GET_DATE = "week";

export const getWeek = async () => {
  const response = await http.get(GET_DATE, {
    headers: {
      Authorization: `sara ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
    },
  });

  const data = response.data.week;
  const weekNum = data.weekNum;
  const startDate = new Date(data.endDate);
  console.log("dataHere: ", startDate);
  return { weekNum, startDate };
};

export const getDeadline = async () => {
  const response = await http.get(GET_DATE);
  const data = response.data.week;
  const deadlineDate = new Date(data.deadlineDate);
  console.log('deadline: ', deadlineDate);
  
  return deadlineDate;
}