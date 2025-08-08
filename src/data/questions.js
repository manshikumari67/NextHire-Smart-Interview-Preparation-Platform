export const questions = {
  JavaScript: [
    {
      id: 1,
      question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
      answer:
        "`var` is function-scoped and can be redeclared and updated. `let` is block-scoped, can be updated but not redeclared in the same scope. `const` is block-scoped, cannot be updated or redeclared, and must be initialized at declaration. `var` is hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized (temporal dead zone).",
    },
    {
      id: 2,
      question: "Explain closures in JavaScript with an example.",
      answer:
        "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function returns.\n\nExample:\n\n```javascript\nfunction outerFunction(x) {\n  return function innerFunction(y) {\n    return x + y;\n  };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // 8\n```",
    },
    {
      id: 3,
      question: "What is the event loop in JavaScript?",
      answer:
        "The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and message queue. When the call stack is empty, it takes the first message from the queue and pushes it to the call stack. This allows JavaScript to be non-blocking despite being single-threaded.",
    },
  ],

  React: [
    {
      id: 4,
      question: "What is the difference between functional and class components in React?",
      answer:
        "Functional components are JavaScript functions that return JSX, while class components extend React.Component. Functional components are simpler, have better performance, and use hooks for state and lifecycle methods. Class components have their own state and lifecycle methods. Modern React favors functional components with hooks over class components.",
    },
    {
      id: 5,
      question: "Explain the useState hook with an example.",
      answer:
        "useState is a React hook that allows functional components to have state. It returns an array with the current state value and a setter function.\n\n```javascript\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```",
    },
    {
      id: 6,
      question: "What is React Context and when should you use it?",
      answer:
        "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered 'global' for a tree of React components, such as current authenticated user, theme, or preferred language. Use it sparingly as it makes component reuse more difficult.",
    },
  ],

  DBMS: [
    {
      id: 7,
      question: "What is normalization in databases and why is it important?",
      answer:
        "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them. The main normal forms are 1NF, 2NF, 3NF, and BCNF. Benefits include reduced data redundancy, improved data consistency, and easier maintenance.",
    },
    {
      id: 8,
      question: "Explain the difference between SQL and NoSQL databases.",
      answer:
        "SQL databases are relational, use structured query language, have predefined schemas, and follow ACID properties. Examples: MySQL, PostgreSQL. NoSQL databases are non-relational, use various query languages, have flexible schemas, and often sacrifice some ACID properties for scalability. Types include document (MongoDB), key-value (Redis), column-family (Cassandra), and graph (Neo4j) databases.",
    },
  ],

  "System Design": [
    {
      id: 9,
      question: "What is horizontal vs vertical scaling?",
      answer:
        "Vertical scaling (scaling up) increases the power of existing machines by adding more CPU, RAM, or storage. It's simpler but has hardware limits and single points of failure. Horizontal scaling (scaling out) adds more machines to the resource pool. It's more complex but offers better fault tolerance, unlimited theoretical scaling, and is more cost-effective for large systems.",
    },
    {
      id: 10,
      question: "Explain the concept of load balancing and its types.",
      answer:
        "Load balancing distributes incoming requests across multiple servers to prevent overload and ensure high availability.\n\nTypes include:\n- Layer 4 (Transport): Routes based on IP and port\n- Layer 7 (Application): Routes based on content (HTTP headers, URLs)\n- Algorithms: Round-robin, least connections, weighted, IP hash\n- Types: Hardware vs software, active-passive vs active-active",
    },
  ],
};
