# Hack & Furious

This HackJam will drive you through React and TypeScript and help you grasp their main features.

Preview : https://hackandfurious.netlify.com/

## Getting Started

- `yarn` or `npm install`

- `yarn start` or `npm run start`

- Navigate to http://localhost:3000/

- Have fun!

## Your mission, should you choose to accept it

### FIXING AND TYPING

The app is completely broken. Find all the problems and missing types and fix them.

> ProTip 1: Use the console for rich error details

> ProTip 2: you can create a typing.ts file in the src folder to store recurrent types and import them where needed.

> ProTip 3: Use the cheatsheet below to help you in your typing quest.

A car looks like this: 
```
{
  id: 1,
  brand: "Hennessey",
  model: "Venom F5",
  price: 1600000,
  image: venomf5,
  topSpeed: 301,
  hp: 1600,
  year: 2017,
  country: "USA",
  engine: "7.6L V8",
  curbWeight: 2950,
  speeds: 7
}
```

the properties hp, engine, cubeWeight, and speeds are optionnal.

### IMPLEMENTING

- Add a unit converter

> It would be nice to be able to switch the car datas to European units.
> Add a button on the CarInfoPanel to toggle units.

- Implement the search feature

> The header has a search feature but it is not working.
> TypeScript might give you a hard time on this one.
> The cheatsheet is there for that.

- Enhance the Throttle and let the magic begin

> ProTip: although `onClick` is used toroughly in React, you might want to look at different DOM events for this one.

### Bonus

- Convert class components in functionnal components using hook

### Hungry for more?

- Add a Speedometer to the Car details screen. (You'll need to use an interval that adds speed while the throttle is on). You're on your own for the design part.

## Cheatsheet

- https://devhints.io/typescript
- https://github.com/sw-yx/react-typescript-cheatsheet

