import Button from "./Components/button/Button";

const App = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button className={`button--secondary`}>Secondary</Button>
    </div>
  );
};

export default App;
