import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logs from "./Logs";
import LogsForm from "./LogsForm";
import Log from "./Log";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="logs">
          <Route index element={<Logs />} />
          <Route path="new" element={<LogsForm />} />
          <Route path=":index" element={<Log />} />
        </Route>
      </Route>
    </Routes>
  );
}
