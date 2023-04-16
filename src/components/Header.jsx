import { useState } from "react";
import bg from "../img/peakpx.jpg";
import { useDispatch } from "react-redux";

function Header() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async () => {

    };

    return (
        <div className="bg-cover bg-top bg-no-repeat h-[100vh] flex justify-center items-end" style={{ backgroundImage: `url(${bg})` }} >
            <div className="bg-white/50 backdrop-blur-sm p-10 rounded-lg text-center mb-4">
                <h1 className="text-slate-800 text-5xl mb-8 uppercase font-black">Search characters by name</h1>
                <form>
                    <input type="text" placeholder="Search for characters" className="p-2 text-slate-700 w-2/3 rounded" />
                </form>
            </div>
        </div>
    );
}

export default Header;