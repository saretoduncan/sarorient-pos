"use client";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { signOut, useSession } from "next-auth/react";
import { useRefreshToken } from "./useRefreshToken";
import { useEffect, useState } from "react";
export function fetchInstance(url: string, config: RequestInit) {
  const { data: session } = useSession();
  const [resData, setResData] = useState({});
  // const [token, setToken] = useState("");
  const { token, refreshToken } = useRefreshToken();
  let originalRequest = async (url: string, config: RequestInit) => {
    let response = await fetch(url, config)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error(res.statusText);
      })
      .then((data) => {
        setResData((d) => (d = data));
      })
      .catch((e) => {
        console.error(e);
      });
    return response;
  };

  let callFetch = async (url: string, config: RequestInit) => {
    if (!session) return signOut();
    const user: any = jwt_decode(session.user.accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) {
      console.log("is expired");
      refreshToken();
      console.log(token);

      // console.log(token);
      // session.user.accessToken = token;
    }

    config["headers"] = {
      Authorization: `Bearer ${session.user.accessToken}`,
    };
    return await originalRequest(url, config);
  };

  useEffect(() => {
    callFetch(url, config);
  }, []);
  return resData;
}
