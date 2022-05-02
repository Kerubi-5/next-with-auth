import { METHODS } from "@common/types/methods";
import { fetchApi } from "@framework/utils";

const options = {
  method: METHODS.PUT,
};

export const handler = {
  useHook: () => {
    return () => {
      return async (id: string, input: any) => {
        const query = {
          id,
          input,
        };

        const response = await fetchApi(options, query);

        return response;
      };
    };
  },
};
