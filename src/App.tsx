
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <Link to="/holidays" style={{marginRight: 10}}>Holidays</Link>
      <Link to="/accordion" style={{marginRight: 10}}>Accordion</Link>
      <Link to="/todo" style={{marginRight: 10}}>To do list</Link>
      <Link to="/game" style={{marginRight: 10}}>Game</Link>
      <Link to="/stories" style={{marginRight: 10}}>Stories</Link>
      <Link to="/drag-list" style={{marginRight: 10}}>Drag and drop list</Link>
      <Link to="/super-todo" style={{marginRight: 10}}>Super todo</Link>
      <Link to="/movies" style={{marginRight: 10}}>Movies</Link>
      <Link to="/timer" style={{marginRight: 10}}>Timer</Link>
      <Link to="/load-more" style={{marginRight: 10}}>Load more</Link>
    </nav>
  );
}

export default App;
