import React, {useState} from 'react'

function DinnerVote(props) {

    const [ useStateVote, setStateFood] = useState(0)

    function add(){
      setStateFood(useStateVote + 1)
    }
    function subtract(){
      setStateFood(useStateVote - 1) 
    }
    var dinnerVoteStyle = {
        // From Friendly
        display: "inline-block",
        textAlign: "center",
        margin: 20,
        borderRadius: 10,
        height: 500,
        width: 300,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
      }
      var foodStyle = {
        height: 200,
        borderRadius: 10,
        width: 200,
        marginTop: 20
      }
    return (
        <div style={dinnerVoteStyle}>
            <img src={props.img} alt="food image" style={foodStyle}/>
            <h1>Dinner Time</h1>
            <p>Vote Here If You Want This</p>
            <button onClick={add}>+1</button>
            <p>Vote Here If You Do Not Want This</p>
            <button onClick={subtract}>-1</button>
            <p>Total: {useStateVote}</p>
          </div>
    )
}

export default DinnerVote
