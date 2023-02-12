import React from "react";

function App() {
  const [counter, setCounter] = React.useState(1);
  return (
    <button onClick={() => setCounter((s) => s + 1)}>
      App 2023+++{counter}
    </button>
  );
}

export default App;
