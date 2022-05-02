import { API_URL } from "../const";

type Props = {
  endPoint?: string;
  method: any;
};

type Input = {
  id?: string;
  input?: any;
};

const fetchApi = async ({ endPoint, method }: Props, { id, input }: Input) => {
  const apiEndPoint = endPoint || "";
  const idQuery = id || "";

  const res = await fetch(API_URL! + apiEndPoint + idQuery, {
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
