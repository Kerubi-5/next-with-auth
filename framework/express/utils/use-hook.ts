import { ApiHook } from "@common/types/hooks";
import { handler as useTodo } from "@framework/todo/use-todo";
import { handler as useAddTodo } from "@framework/todo/use-add-todo";
import { handler as useRemoveTodo } from "@framework/todo/use-remove-todo";

const expressHooks: ApiHook = {
  todo: {
    useTodo: useTodo.useHook(),
    useAddTodo: useAddTodo.useHook(),
    useRemoveTodo: useRemoveTodo.useHook(),
    useUpdateTodo: "useUpdate",
  },
};

export default expressHooks;
