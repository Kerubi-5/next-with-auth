import { ApiHook } from "@common/types/hooks";
import { handler as useTodo } from "@framework/todo/use-todo";
import { handler as useAddTodo } from "@framework/todo/use-add-todo";

const expressHooks: ApiHook = {
  auth: {
    useLogin: "loginn",
    useLogout: "register",
  },
  todo: {
    useTodo: useTodo.useHook(),
    useAddTodo: useAddTodo.useHook(),
    useRemoveTodo: "useRemove",
    useUpdateTodo: "useUpdate",
  },
};

export default expressHooks;
