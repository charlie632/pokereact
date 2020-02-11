# Pokemon Quest

The idea is to list the first 20 pokemons using React classes and React hooks.

The data will be fetched as a GET request from

```
https://pokeapi.co/api/v2/pokemon

```

Which will return a JSON with the following schema:

```json
{
  ...
  "results": [
    {"name": "bulbasaur", "url": "a URL"}
  ]
}
```

_Note: Results will contain an array with 20 objects, each containing a pokemon._

Your task will be to render the name of all pokemons... twice. One using a class component and another with hooks!

The resulting `App.js` file needs to be like this:

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Kewl Pokèdex</h1>
      <div className="pokedex">
        <div className="class-pokedex">
          <h3>PokeClasses!</h3>
          <PokeClasses />
        </div>
        <div className="hooks-pokedex">
          <h3>PokeHooks!</h3>
          <PokeHooks />
        </div>
      </div>
    </div>
  );
}
```

_Note: You need to create `PokeClasses` and `PokeHooks`. You decide if you want it in another file or in the same file. Whatevs._

## Note

Please, fork the Sandbox and submit its URL somewhere. Maybe in the slack channel.
