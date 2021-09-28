import React from 'react';
import { Person } from 'type/type';

function Menu() {
  const person: Person = {
    name: 'dinh gia kiet',
    age: 22,
  };
  return (
    <div>
      <header>
        <h1>Hello World, {person.age}</h1>
      </header>
    </div>
  );
}

export default Menu;
