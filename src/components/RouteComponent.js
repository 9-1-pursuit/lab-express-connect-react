import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logs from "./Logs";
import LogForm from "./LogForm";
import Log from "./Log";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="logs">
          <Route index element={<Logs />} />
          <Route path="new" element={<LogForm />} />
          <Route path=":index">
            <Route index element={<Log />} />
            <Route path="edit" element={<LogForm />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
