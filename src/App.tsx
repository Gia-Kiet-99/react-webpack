import React from 'react';

interface Person {
  name: string,
  age: number,
}

function App() {
  const person: Person = {
    name: 'dinh gia kiet',
    age: 22,
  };
  return (
    <div>
      <header>
        <h1>Hello World, {person.name}</h1>
      </header>
    </div>
  );
}

export default App;
