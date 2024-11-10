import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExclamationTriangle } from "react-icons/fa";

type AddTodoProps = {
  addTodo: (todo: { id: string; body: string }) => void;
};

function AddTodo({ addTodo }: AddTodoProps) {
  const [content, setContent] = useState("");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!content) {
      toast.error("Please enter a value!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <FaExclamationTriangle />,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            placeholder="Target"
            variant="subtle"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <Button backgroundColor="pink.600" px="8" type="submit">
            Add Todo
          </Button>
        </HStack>
      </form>
      <ToastContainer />
    </>
  );
}

export default AddTodo;
