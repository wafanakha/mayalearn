const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function Header() {
  return <h1>This is header</h1>;
}
function Homepage() {
  return (
    <div>
      <Header />
    </div>
  );
}
root.render(<Header />);
