import React from "react";
import "./App.css";
import Employee from "./Employee";
import data from "./data";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />

      <div className="body">
        {data.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              location={employee.location}
              message={employee.message}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
