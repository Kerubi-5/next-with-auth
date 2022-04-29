import { API_URL } from "../const";

// type Props = {
//   method?: any;
//   options?: any;
// };

const fetchApi = async () => {
  const res = await fetch(API_URL!);

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return data;
};
export default fetchApi;
