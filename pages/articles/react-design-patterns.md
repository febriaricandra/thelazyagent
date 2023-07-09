---
title: React Design Patterns
description: Here's how to code with patterns in React
cover: /test/type7.png
---

Author: [Febriari Candra Guritno](https://github.com/febriaricandra)

## React Design Patterns (HOC & Render Props)

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

Design Patterns are reusable solutions to common problems in software design. They are templates that can be applied to different situations. They are not finished designs that can be transformed directly into code. Instead, they are guidelines for solving problems in certain ways.

in react, there are many design patterns that can be used to solve problems. Here are some of the most common ones:

### Higher Order Components

Within our application, we often want to use the same logic in multiple components. This logic can include applying a certain styling to components, requiring authorization, or adding a global state.

One way of being able to reuse the same logic in multiple components, is by using the higher order component pattern. This pattern allows us to reuse component logic throughout our application.

A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the HOC returns the element with the additional logic.

***reference:*** [https://www.patterns.dev/posts/hoc-pattern](https://www.patterns.dev/posts/hoc-pattern)

Concretely, a higher-order component is a function that takes a component and returns a new component.

```jsx
import React, { useState } from 'react';

// Higher-Order Component (HOC) for Form Handling
const withFormHandling = (WrappedComponent) => {
  return () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [error, setError] = useState('');
    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = (e) => {
      if (!formData.name || !formData.password || !formData.email) {
        setError('Error');
        console.log(error);
      } else {
        setError('');
        console.log(error);
      }

      e.preventDefault();
      console.log('Form Data:', formData);
    };

    return (
      <WrappedComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    );
  };
};

// Component that will be wrapped with the Higher-Order Component
const Form = ({ formData, handleChange, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      {error}
      <button type="submit">Submit</button>
    </form>
  );
};

// Applying the Higher-Order Component to the component
const WrappedForm = withFormHandling(Form);

// Using the WrappedForm
const App = () => {
  return (
    <div>
      <WrappedForm />
    </div>
  );
};

export default App;
```

Output here: [StackBlitz](https://stackblitz-starters-yh1afd.stackblitz.io)

code above are example of HOC in react, we can use this pattern to handle form in react, so we don't need to write the same code over and over again.


### Render Props

after we know about HOC, we can use render props to solve the same problem. The render props pattern is a technique for sharing code between React components using a prop whose value is a function.

Another way of being able to reuse component logic, is by using the render props pattern. This pattern allows us to reuse component logic throughout our application.

```jsx
import React, { useState } from 'react';

// render props pattern
const Form = ({ render }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (!formData.name || !formData.password || !formData.email) {
      setError('Error');
      console.log(error);
    } else {
      setError('');
      console.log(error);
    }

    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      {render({
        formData,
        handleChange,
        handleSubmit,
        error,
      })}
    </div>
  );
};

// Using the Form component
const App = () => {
  return (
    <div>
      <Form
        render={({ formData, handleChange, handleSubmit, error }) => (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            {error}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default App;
```

Output here: [StackBlitz](https://stackblitz-starters-8pllep.stackblitz.io)

why we use render props instead of HOC? because render props is more flexible than HOC, we can use render props to handle form, or other things like fetching data from API, etc.

example of sidebar using render props:

```jsx
import React, { useState } from 'react';

const Sidebar = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {render({ isOpen, toggleSidebar })}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Sidebar
        render={({ isOpen, toggleSidebar }) => (
          <div>
            {isOpen && (
              <div>
                <h1>Sidebar</h1>
                <button onClick={toggleSidebar}>Close Sidebar</button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default App;
```


***references:*** [Patterns dev](https://www.patterns.dev/)

