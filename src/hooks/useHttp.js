import { useDispatch } from "react-redux";
import { makeRequest } from "../redux/axiosRequest";

const useHttp = () => {
  const dispatch = useDispatch();

  function request(method, url, params = "", body = "") {
    return new Promise((resolve) => {
      const requestPayload = {
        method,
        url,
        params,
        body,
      };

      dispatch(makeRequest(requestPayload)).then((res) => {
        resolve(res?.payload);
      });
    });
  }

  return { request };
};

export default useHttp;
