import React from "react";

function CharacterCard(props) {
    let characterValue = {
        "Species": props.character.name,
        "Gender": props.character.gender,
        "Location": props.character.location.name
    };
    return (
        <div className='card border-light bg-dark text-white' style={{ width: "560px" }}>
            <div className='row g-0'>
                <div className='col-5'>
                    <img className='card-img' src={props.character.image} alt="Character" />
                </div>
                <div className='col-7'>
                    <div className='card-body'>
                        <h5 className="card-title">{props.character.name}</h5>
                        {
                            Object.keys(characterValue).map((d, i) => (
                                <React.Fragment key={i}>
                                    <small className="text-muted">{d}</small>
                                    <p className="card-text mb-1">{characterValue[d]}</p>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;