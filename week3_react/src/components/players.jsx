//to retrieve values from an array, you can use map
import Player from "./player";
const Players = ({ players }) => {
  if (players.length === 0) return <h3>There are no players to render</h3>;
  return players.map((player, index) => <Player name={player} />);
};

export default Players;
