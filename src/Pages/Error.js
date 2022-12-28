import error from "./error.jpeg";

export default function FourOFour() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sorry, no page found</h1>
      <img src={error} alt="error image" style={{borderRadius: "1em"}}></img>
    </div>
  );
}
