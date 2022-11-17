import React from "react";
import { Container } from "./styles";
import Filters from "../Filter";
import TodoList from "../TodoList";

export interface ICardTodoListProps {}

export default function CardTodoList(props: ICardTodoListProps) {
  return (
    <Container>
      <Filters />
      <TodoList />
    </Container>
  );
}
