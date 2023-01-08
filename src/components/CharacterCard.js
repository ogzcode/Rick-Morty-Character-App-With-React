function CharacterCard(props) {
    return (
        <div className='card border-light bg-dark text-white' style={{ width: "560px" }}>
            <div className='row g-0'>
                <div className='col-5'>
                    <img className='card-img' src={props.character.image} alt="Character" />
                </div>
                <div className='col-7'>
                    <div className='card-body'>
                        <h5 class="card-title">{props.character.name}</h5>
                        <small class="text-muted">Species:</small>
                        <p className='card-text mb-1'>{props.character.species}</p>
                        <small class="text-muted">Gender:</small>
                        <p className='card-text mb-1'>{props.character.gender}</p>
                        <small class="text-muted">Location:</small>
                        <p className='card-text mb-0'>{props.character.location.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;