import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackSeparator,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
interface Todo {
  id: number;
  body: string;
}
interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  if (!todos.length) {
    return (
      <Badge colorPalette="green" p="4" m="4" borderRadius="lg">
        No Todos, yay!!!
      </Badge>
    );
  }

  return (
    <VStack
      separator={<StackSeparator />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo: any) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            rounded="full"
            variant={"outline"}
            onClick={() => deleteTodo(todo.id)}
          >
            <FaTrash />
          </IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
