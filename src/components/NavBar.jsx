import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="flex justify-center py-12">
            <nav className="bg-sky-500 text-center px-8 py-4 shadow rounded-lg">
                <Link to={"/all"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">All</Link>
                <Link to={"/female"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">Female</Link>
                <Link to={"/male"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">Male</Link>
                <Link to={"/unknown"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">Unknown</Link>
                <Link to={"/alive"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">Alive</Link>
                <Link to={"/dead"} className="text-white font-medium py-2 px-4 mx-8 border-white hover:border-b-2">Dead</Link>
            </nav>
        </header>
    );
}

export default NavBar;