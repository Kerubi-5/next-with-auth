export interface ApiHook {
  auth: {
    useLogin: any;
    useLogout: any;
  };
  todo: {
    useAddTodo: any;
    useTodo: any;
    useRemoveTodo: any;
    useUpdateTodo: any;
  };
}
