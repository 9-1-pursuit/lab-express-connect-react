import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logs from "./Logs";
import LogsForm from "./LogsForm"

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="logs">
          <Route index element={<Logs />} />
          <Route path="new" element={<LogsForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
