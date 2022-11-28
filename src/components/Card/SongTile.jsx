import { SongIcon, SongInfo, TileContainer } from "./SongTile.style";
import { FaPlay } from "react-icons/fa";


const Tile = (props) => {
	return (
    <TileContainer>
      <div>
        <SongIcon src={props.image} />
        <button onClick={console.log(props.name)}>
          <FaPlay size={25} color="#74f2ce" />
        </button>
      </div>
      <SongInfo>
        <h4>{props.name}</h4>
        <h5>{props.artists}</h5>
      </SongInfo>
    </TileContainer>
  );
};

export default Tile;