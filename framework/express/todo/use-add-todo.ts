import { METHODS } from "@common/types/methods";
import { fetchApi } from "@framework/utils";

const options = {
  method: METHODS.POST,
};

export const handler = {
  useHook: () => {
    return async () => {
      return async (input: any) => {
        const response = await fetchApi(options, input);

        return response;
      };
    };
  },
};
