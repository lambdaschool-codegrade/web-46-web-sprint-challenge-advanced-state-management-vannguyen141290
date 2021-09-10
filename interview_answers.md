# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API allows developers to store and pass data down a React Component tree without writing the props in every single layer in the hierarchy, but to directly pass data down even to a deeply nested Component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- store is an object that contains all the data in a global scope of an application. Any Component in an application can have access to the data in store. It is known as 'single source of truth' because the data stored in store is the root of the state tree. It is the single source of all the states in the application and pass down to all layers of components.
- actions are plain objects containing information of what type of action the application has to do.
- reducers check the type of dispatched actions from action creators and execute the action which is normally to manipulate the data in store.


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
- redux-thunk allows us to write an action creator that returns a function instead of an action. The Thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
- I love all of them before they all have their own purpose. But using Redux might be the best because it's consistant and easy to implement.