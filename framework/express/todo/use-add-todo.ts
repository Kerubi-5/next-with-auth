import { METHODS } from "@common/types/methods";
import { fetchApi } from "@framework/utils";

const options = {
  method: METHODS.POST,
};

export const handler = {
  useHook: () => {
    return () => {
      return async (input: any) => {
        const query = {
          input,
        };
        const response = await fetchApi(options, query);

        return response;
      };
    };
  },
};
