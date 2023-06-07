"use client";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { signOut, useSession } from "next-auth/react";

import { useEffect, useState } from "react";
export function fetchInstance(url: string, config: RequestInit) {
  const { data: session, update } = useSession();
  const [resData, setResData] = useState({});

  const makeRefreshToken = async () => {
    try {
      const res = await fetch("/api/refreshtoken", {
        method: "POST",
        credentials: "include",
      });
      if (res.status !== 401) {
        return await res.json();
      } else signOut();
    } catch (e) {
      console.log(e);
    }

    // return res
  };
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
    let res: { access_token: string } = await makeRefreshToken();
    console.log(res.access_token);

    config["headers"] = {
      Authorization: `Bearer ${res.access_token}`,
    };
    const ress = await originalRequest(url, config);
    return ress;
  };

  useEffect(() => {
    callFetch(url, config);
  }, []);
  return resData;
}
