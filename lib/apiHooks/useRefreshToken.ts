"use client"
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export function useRefreshToken() {
  const [token, setToken] = useState("");
  const makeApiCall = async () => {
    const res = await fetch("/api/refreshtoken",{method:"POST"})
      .then((response) => {
        if (response.status !== 401) {
          return response.json();
        } else signOut();
      })
      .then((data) => {
        setToken(data.access_token);
      })
      .catch((error) => {
        console.error(error.message);
        signOut();
      });

  return res
  };
 const refreshToken=()=>{}
useEffect(() => {
   makeApiCall();
  }, [refreshToken]);
  return {token, refreshToken}
}
