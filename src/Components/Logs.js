import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  console.log(API);
  const [logs, setLogs] = useState([]);
  //   const [sort, setSort] = useState("unsort");
  const [selectedOption, setSelectedOption] = useState("Unsorted");

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        console.log(res.data);
        setLogs(res.data);
      })
      .catch((err) => console.error("catch", err));
  }, []);

  const sorted = [...logs];

  const handleAscendingName = () => {
    setLogs(
      sorted.sort((a, b) => {
        if (a.captainName < b.captainName) {
          return -1;
        }
        if (a.captainName > b.captainName) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleDescendingName = () => {
    setLogs(
      sorted.sort((a, b) => {
        if (a.captainName < b.captainName) {
          return 1;
        }
        if (a.captainName > b.captainName) {
          return -1;
        }
        return 0;
      })
    );
  };

  const options = [
    { value: "unsorted", label: "Unsorted" },
    { value: "ascending", label: "Ascending by Name" },
    { value: "descending", label: "Descending by Name" },
    { value: "ascending", label: "Ascending by Title" },
    { value: "descending", label: "Descending by Title" },
  ];

  const handleSubmit = () => {
    if (selectedOption === "ascending") {
      setLogs(handleAscendingName);
    }
  };
  return (
    <div className="logs">
      <Select
        hideSelectedOptions={false}
        value={selectedOption}
        onChange={handleSubmit}
        options={options}
        style={{ background: "none", color: "#333" }}
      />
      {/* <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="DEFAULT">Unsorted</option>
        <option value="ascending" onChange={handleAscendingName}>
          Ascending
        </option>
        <option value="descending" onChange={handleDescendingName}>
          Descending
        </option>
      </select> */}
      {/* <button onClick={handleAscendingName}>Sort</button> */}
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
