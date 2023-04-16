function CharacterCard({ name, status, species, image, location }) {
    let statusStyle = "";

    if (status === "Alive") {
        statusStyle = "bg-green-500";
    }
    else if (status === "Dead") {
        statusStyle = "bg-red-500";
    }
    else {
        statusStyle = "bg-gray-300";
    }
    return (
        <div className="w-[480px] h-[240px] flex border-[1px] border-gray-300 rounded-lg overflow-hidden">
            <div className="relative w-1/2 h-full">
                {/* <img src={avatar} className="w-[200px] " /> */}
                <img src={image} className="w-full h-full object-cover"/>
                <p className="absolute bottom-0 left-0 py-2 w-full bg-white/80 uppercase text-slate-700 text-center font-black">{species}</p>
            </div>
            <div className="p-4 relative w-1/2">
                <h1 className="text-slate-700 font-bold text-2xl mb-2">{name}</h1>
                <p className={`inline-block text-white px-4 text-sm py-1 mb-4 rounded-full ${statusStyle}`}>{status}</p>

                <small className="text-gray-500 text-base italic block">Location:</small>
                <p className="text-slate-700 text-lg">{location}</p>

                <a href="" className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center bg-sky-500 text-white hover:bg-sky-600">See More</a>
            </div>
        </div>
    );
}

export default CharacterCard;