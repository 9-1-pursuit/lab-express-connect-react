import Log from "../components/Log";

export default function Show() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Show</h2>
      <section>{<Log />}</section>
    </div>
  );
}
