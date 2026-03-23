export const getImage = (id) => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(id).padStart(3, "0")}.png`;
};
