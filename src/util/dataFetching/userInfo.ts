import API from "util/dataFetching/API";
import { submitProps } from "util/types/user";
export const getUsesrInfo = async () => {
  //jwt토큰으로 회원정보만 받을 수 있는 api ?
};

export const getMainInterests = async () => {
  try {
    const token = localStorage.getItem("jwt");
    const header = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API.USERINFO.MAIN_INTERESTS(), header);
    if (response.status !== 200) throw Error;
    return response.json();
  } catch (err) {
    console.log(err); //에러처리 제대로하기
    return [];
  }
};
export const getDetailInterests = async (mainId: number) => {
  try {
    const token = localStorage.getItem("jwt");
    const header = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API.USERINFO.DETAIL_INTERESTS(mainId), header);
    if (response.status !== 200) throw Error;
    return response.json();
  } catch (err) {
    console.log(err); //에러처리 제대로하기
    return [];
  }
};

export const postUserInfo = async ({ searchLogs, interests }: submitProps) => {
  try {
    const token = localStorage.getItem("jwt");
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ searchLogs, interests }),
    };
    const response = await fetch(API.USERINFO.SUBMIT(), param);
    if (response.status !== 200) throw Error;
    return response.status; //응답형태 백엔드와 정하기
  } catch (err) {
    console.log(err); //에러처리 제대로하기
    return [];
  }
};
