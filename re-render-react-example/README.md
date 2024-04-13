# React-re-render

- This shows how we can reduce re-render in react
- It happens when:
    - A state variable that is being used inside a component changes.
    - A parent component re-render triggers all children to re-rendering

- Ways to solve:
    - If all the changing code with render is pushed out of parent then it can minimise re-render. Make a different component for the state that changes and add it to the parent component it will reduce re-render. Although the parent re-renders despite all the static code will remain identical
    - Another way is to use **React.memo**.
