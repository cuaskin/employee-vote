import React from "react";
import Counter from "@components/Counter";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Counter</h2>
      <Counter />
    </div>
  );
};

export default HomePage;
