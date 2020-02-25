import React from "react";

const PokemonCard = ({ pokemon }) => {
  let { name, sprites, types } = pokemon;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div>name: {name}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Sprites:
        <img alt="front_default" src={sprites.front_default} />
        <img alt="back_default" src={sprites.back_default} />
      </div>

      <div>
        Types:{" "}
        {types.map((t, i) => (
          <span key={t.type.name}>
            {t.type.name}
            {i !== types.length - 1 && ", "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
