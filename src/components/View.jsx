import React, { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";

const View = () => {
  const abortController = new AbortController();
  const [users, setUsers] = useState([]);
  const http = useHttp();

  useEffect(() => {
    const req = http.request("get", "/crud", "", "").then((res) => {
      if (res?.status === 200) {
        setUsers(res?.data);
      }
    });

    return () => abortController?.abort();
  }, []);

  return (
    <div>
      {users?.map((usr, idx) => (
        <div className="field" key={idx}>
          <span>{usr?.name}</span>
          <span>{usr?.email}</span>
          <span>{usr?.age}</span>
          <span>{usr?.gender}</span>
        </div>
      ))}
    </div>
  );
};

export default View;
