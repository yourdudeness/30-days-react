import { Route, Routes } from "react-router-dom";
import Holidays from "./day1-holiday-list/Holidays";
import Accordion from "./day2-accordion/Accordion";
import App from "./App";
import TodoList from "./day3-todo-list/todo-list";
import MemoryGameApp from "./day-4-game-with-image/memory-game-app";
import StoriesApp from "./day-5-stories/stories";
import DragDropList from "./day-6-drag-and-drop/drag-drop-list";
import SuperTodoList from "./todo-todo/super-todo";
import MoviesApp from "./day-7-search-movie/movies-app";
import TimerApp from "./day-8-timer/timer-app";
import PokemonList from "./day-9-load-more/pokemon-list";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="/holidays" element={<Holidays />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/game" element={<MemoryGameApp />} />
      <Route path="/stories" element={<StoriesApp />} />
      <Route path="/drag-list" element={<DragDropList />} />
      <Route path="/super-todo" element={<SuperTodoList />} />
      <Route path="/movies" element={<MoviesApp />} />
      <Route path="/timer" element={<TimerApp />} />
      <Route path="/load-more" element={<PokemonList />} />
    </Routes>
  );
};
