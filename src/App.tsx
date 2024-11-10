import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ColorModeButton } from "./components/ui/color-mode";

const initialTodos = [
  {
    id: 1,
    body: "get bread",
  },
  {
    id: 2,
    body: "get butter",
  },
];

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos") || "[]") || initialTodos
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo: any) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo: any) {
    setTodos([...todos, todo]);
  }
  return (
    <VStack p={4}>
      <Heading mb="8" fontWeight={"extrabold"} size="2xl">
        <Text color="cyan.600">Todo Application</Text>
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
