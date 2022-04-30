import { ApiHook } from "@common/types/hooks";
import { handler as useTodo } from "@framework/todo/use-todo";

const expressHooks: ApiHook = {
  auth: {
    useLogin: "loginn",
    useLogout: "register",
  },
  todo: {
    useTodo: useTodo.useHook(),
    useAddTodo: "useAdd",
    useRemoveTodo: "useRemove",
    useUpdateTodo: "useUpdate",
  },
};

export default expressHooks;
