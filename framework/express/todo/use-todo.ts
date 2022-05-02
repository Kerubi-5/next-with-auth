import { METHODS } from "@common/types/methods";
import { fetchApi } from "@framework/utils";

const options = {
  method: METHODS.GET,
};

export const handler = {
  useHook: () => {
    return async () => {
      const query: any = {};
      const response = await fetchApi(options, query);

      return response;
    };
  },
};
