import { useState } from "react";
import "./App.css";

import GithubLogo from "./assets/github-logo.svg";
import GameTitle from "./assets/memory-rick.png";
import Cards from "./components/Cards";
import GameoverScreen from "./components/GameoverScreen";

function arraysAreEqual(array1, array2) {
    return array1.sort().toString() === array2.sort().toString();
}

const App = () => {
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [seenCardIds, setSeenCardIds] = useState([]);
    const [level, setLevel] = useState(1);
    const [gameover, setGameover] = useState(false);

    function handleCardClick(cardId, IdList) {
        if (seenCardIds.includes(cardId)) {
            if (score > best) setBest(score);
            setGameover(true);
        } else {
            const seenCardsCopy = JSON.parse(JSON.stringify(seenCardIds));
            seenCardsCopy.push(cardId);

            // TODO: change cards level if seenCardsCopy and IdList are equal
            if (arraysAreEqual(seenCardsCopy, IdList)) {
                setLevel(prev => prev + 1);
            }

            setSeenCardIds(seenCardIds.concat(cardId));
            setScore(prevScore => prevScore + 1);
        }
    }

    function resetGame() {
        setScore(0);
        setSeenCardIds([]);
        setLevel(1);
        setGameover(false);
    }

    return (
        <>
            {gameover && <GameoverScreen onClick={resetGame} />}

            <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
                <div className="mt-10 md:mt-7 lg:mt-5 flex flex-col justify-center items-center gap-2">
                    <img
                        src={GameTitle}
                        alt="Memory Rick!"
                        className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] 2xl:w-[40%]"
                    />

                    <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-200 font-handwriting">
                        A Rick and Morty Memory Card Game
                    </p>
                </div>

                <div>
                    <p className="text-center text-2xl lg:text-3xl text-gray-200 font-handwriting">
                        Score: {score} - Best: {best}
                    </p>
                </div>

                <Cards
                    level={level}
                    seenCardIds={seenCardIds}
                    gameover={gameover}
                    cardClickHandler={handleCardClick}
                />

                <div className="-mt-5 p-2 md:p-3 2xl:p-5 text-white font-handwriting text-base xl:text-xl 2xl:text-2xl flex justify-center items-center">
                    <p>
                        Karan Dalsania @{" "}
                        <a
                            href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TheOdinProject
                        </a>
                    </p>

                    <a
                        href="https://github.com/Karan053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3"
                    >
                        <img
                            src={GithubLogo}
                            alt="Github Logo"
                            className="xl:w-[25px] 2xl:w-[30px]"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default App;
