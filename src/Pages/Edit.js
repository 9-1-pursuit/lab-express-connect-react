import EditLogForm from "../Components/EditLogForm";

function Edit() {
  return (
    <div className="editLogPage">
      <div className="editHdgs">
      <span className="editLogHdg">Edit this Log</span> <br/><br/>
      <span className="editLogCancelHdg">(or press Cancel button and return to Log List)</span>
      <EditLogForm />
      </div>
    </div>
  );
}

export default Edit;
