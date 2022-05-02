import { FormEvent, useEffect, useRef, useState } from "react";
import s from "./Modal.module.css";
import { UilTimesSquare } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { selectUi } from "@store";
import { closeModal } from "@store/ui/uiSlice";
import { Form, Input } from "@components/form";
import Button from "../Button";
import { METHODS } from "@common/types/methods";
import { addTodo } from "@store/todo/todoSlice";
import { useHook } from "@framework/utils";
import { updateTodo } from "@store/todo/todoSlice";

const Modal = () => {
  const { isOpen, method, todo } = useSelector(selectUi);
  const dispatch = useDispatch();
  const todoForm = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [header, setHeader] = useState("");

  const transactTodo = (e: FormEvent) => {
    e.preventDefault();
    const todoHook = useHook.todo;

    const title = todoForm.current?.todoTitle.value;
    const description = todoForm.current?.description.value;

    if (!title || !description)
      return alert("Please complete the fields before submitting");

    const createTodoItem = async () => {
      const create = await todoHook.useAddTodo();

      const res = await create({ title, description });

      if (res) {
        dispatch(addTodo(res));
        dispatch(closeModal());
      }
    };

    const updateTodoItem = async () => {
      const idQuery = "/" + todo!._id;
      const updateItem = await todoHook.useUpdateTodo();

      const res = await updateItem(idQuery, {
        title,
        description,
      });

      if (res) {
        dispatch(updateTodo(res));
        dispatch(closeModal());
      }
    };

    if (method === METHODS.POST) createTodoItem();
    else if (method === METHODS.PUT) updateTodoItem();
  };

  useEffect(() => {
    setTitle(todo?.title || "");
    setDescription(todo?.description || "");

    method === METHODS.POST
      ? setHeader("Create Todo")
      : setHeader("Update Todo");
  }, [method, todo?.description, todo?.title]);

  return (
    <div
      className={`${!isOpen && `hidden`} ${s.root}`}
      onClick={() => dispatch(closeModal())}
    >
      <div className={s.modalBody} onClick={(e) => e.stopPropagation()}>
        <span className={s.close} onClick={() => dispatch(closeModal())}>
          <UilTimesSquare />
        </span>
        <div className={s.content}>
          <Form
            ref={todoForm}
            className="my-10 px-4"
            onSubmit={(e) => transactTodo(e)}
          >
            <h2 className={s.formHeader}>{header}</h2>
            <Input
              name="todoTitle"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              name="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <Button className="my-5" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
