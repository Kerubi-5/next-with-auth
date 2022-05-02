import { API_URL } from "../const";

type Props = {
  endPoint?: string;
  method: any;
};

const fetchApi = async (
  { endPoint, method }: Props,
  input?: any | undefined
) => {
  const apiEndPoint = endPoint || "";
  const res = await fetch(API_URL! + apiEndPoint, {
    method,
    credentials: "include",
    headers: {
      "Access-Control-Allow-Credentials": "http://localhost:3000",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return data;
};
export default fetchApi;
