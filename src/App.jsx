import Header from "./components/Header";
import Team from "./components/Team";
import Battle from "./components/Battle";

import { pokemons } from "./data/pokemons";
import { splitTeams, calcExp } from "./helpers/helpers";

function App() {
  const [team1, team2] = splitTeams(pokemons);

  const exp1 = calcExp(team1);
  const exp2 = calcExp(team2);

  return (
    <div className="min-h-screen p-6">
      <Header />

      <Team team={team1} total={exp1} isWinner={exp1 > exp2} />

      <Battle />

      <Team team={team2} total={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

export default App;
