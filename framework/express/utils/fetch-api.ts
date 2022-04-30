import { API_URL } from "../const";

type Props = {
  method: any;
  options?: any;
};

const fetchApi = async ({ method, options }: Props) => {
  const res = await fetch(API_URL!, {
    method,
    body: JSON.stringify(options),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return data;
};
export default fetchApi;
