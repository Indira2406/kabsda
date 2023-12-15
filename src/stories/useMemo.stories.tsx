import React, { useCallback, useMemo } from "react";
import { useState } from "react";

export default {
  title: "useMemo demo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState(5);
  const [b, setb] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }
  return (
    <>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(+e.currentTarget.value)}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setA(+e.currentTarget.value)}
      />
      <hr />
      <div>ResultA : {resultA}</div>
      <div>ResultB : {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};

const BooksSecrret = (props: { addBook: () => void }) => {
  return <button onClick={props.addBook}>add</button>;
};

const Books = React.memo(BooksSecrret);

export const LikeUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "Html", "Css"]);

  const memoizedBooks = useMemo(() => {
    return () => {
      console.log(books);
      const newBooks = [...books, "Angular"];
      setBooks(newBooks);
    };
  }, [books]);

  const memoizedBooks2 = useCallback(() => {
    console.log(books);
    const newBooks = [...books, "Angular"];
    setBooks(newBooks);
  }, [books]);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Books addBook={memoizedBooks2} />
    </>
  );
};
