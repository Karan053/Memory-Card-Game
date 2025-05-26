import GameOver from "../assets/game-over.png";

const GameoverScreen = props => {
    return (
        <div className="animate-fade-in z-10 fixed left-0 top-0 w-screen h-screen bg-black/80 grid gap-5 place-items-center">
            <img
                src={GameOver}
                alt="Memory Rick!"
                className=" w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] 2xl:w-[40%] self-end"
            />

            <button
                onClick={props.onClick}
                className="animate-[fade-in_1s_2s_forwards] opacity-0 bg-lime-700/25 active:bg-lime-300/25 outline outline-lime-500 outline-2 outline-offset-4 hover:outline-offset-8 transition-[outline-offset] self-start"
            >
                <p className="px-9 py-1 font-handwriting text-sm sm:text-lg text-gray-200 bg-lime-600 active:bg-lime-600/75 rounded-sm">
                    Play Again?
                </p>
            </button>
        </div>
    );
};

export default GameoverScreen;
