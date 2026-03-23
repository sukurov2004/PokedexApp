// helpers/helpers.js

export const shuffle = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const splitTeams = (pokemons) => {
  const shuffled = shuffle(pokemons);
  return [shuffled.slice(0, 4), shuffled.slice(4)];
};

export const calcExp = (team) => {
  return team.reduce((sum, p) => sum + p.base_experience, 0);
};