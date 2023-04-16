import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

function CharacterList() {
    const characters = useSelector(state => state.data.characterData);
    return (
        <div className="flex flex-wrap justify-center py-6 gap-12">
            {
                characters.map((d, i) => 
                    <CharacterCard 
                        name={d.name} 
                        species={d.species} 
                        status={d.status} 
                        location={d.location.name}
                        image={d.image}
                        key={i}
                    />
                )
            }
        </div>
    );
}

export default CharacterList;