const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function Header() {
  return <h1>This is header</h1>;
}
function Homepage() {
  const names = ["whale", "docker", "sanity", "mother"];

  function handleClick() {
    console.log("pressed");
  }
  return (
    <div>
      <Header />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Here!</button>
    </div>
  );
}
root.render(<Homepage />);
