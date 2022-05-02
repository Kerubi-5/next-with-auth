import { METHODS } from "@common/types/methods";
import { fetchApi } from "@framework/utils";

const options = {
  method: METHODS.DELETE,
};

export const handler = {
  useHook: () => {
    return () => {
      return async (id: string) => {
        const query = {
          id,
        };

        const response = await fetchApi(options, query);

        return response;
      };
    };
  },
};
