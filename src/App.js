import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="compteurs">Vers les compteurs</Link>
        </li>
        <li>
          <Link to="selecteurs">Vers les selecteurs</Link>
        </li>
        <li>
          <Link to="configurateur">Vers les compteurs</Link>
        </li>
      </ul>
    </div>
  );
}
