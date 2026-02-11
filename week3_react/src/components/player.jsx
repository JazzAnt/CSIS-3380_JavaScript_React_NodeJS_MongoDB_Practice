const Player = ({name}) => {
    //styling your components
    const myStyle = {
        height: "100px",
        backgroundColor: "lightblue",
        margin: "1em",
        border: "1px black solid",
        textAlign: "center",
    }

    //badge badge-primary are bootstrap classes
    //look up bootstrap docs
    return ( <div className="player" style={myStyle}>
        <span className="badge badge-danger">{name}</span>
        <span className="badge badge-primary">Score is 0</span>
        <button>Increment</button>
        <button>Decrement</button>
    </div> );
}
 
export default Player;