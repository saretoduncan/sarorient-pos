import { signOut } from "next-auth/react";

export function useRefreshToken() {
  const makeApiCall = async () => {
    const res = await fetch("/api/refreshtoken", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application",
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        if (response.status !== 401) {
          return response.json();
        } else signOut();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error.message);
        signOut();
      });

    return res;
  };
  return makeApiCall();
}
