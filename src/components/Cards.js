import Card from "./Card";
import { useEffect, useState } from "react";

const ids = [];

function getRandomId(maxId) {
    // console.log(ids);
    let randID = randFrom(1, maxId);
    // let randID = 3;

    let idAlreadyInList = ids.some(id => id === randID);

    // If id already in list, get a new id
    while (idAlreadyInList) {
        randID = randFrom(1, maxId);
        // eslint-disable-next-line no-loop-func
        idAlreadyInList = ids.some(id => id === randID);
    }

    ids.push(randID);
    return randID;
}

function randFrom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // Returns random int from min to max
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Cards = props => {
    const [characters, setCharacters] = useState([]);

    function shuffleCharacters() {
        setCharacters(prev => {
            const prevCopy = JSON.parse(JSON.stringify(prev));

            for (let i = 1; i <= prev.length - 1; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [prevCopy[i], prevCopy[j]] = [prevCopy[j], prevCopy[i]];
            }

            return prevCopy;
        });
    }

    // On Mount and Level Change
    useEffect(() => {
        // This ensures that we get new cards on game reset
        if (props.gameover) return;

        setCharacters([]);

        // Get total number of characters available in API
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => data.info.count)
            .then(characterCount => {
                let i = 0;
                function fetchLoop() {
                    let randID = getRandomId(characterCount);
                    fetch(`https://rickandmortyapi.com/api/character/${randID}`)
                        .then(response => response.json())
                        .then(data => {
                            const character = {
                                id: data.id,
                                name: data.name,
                                image: data.image,
                            };
                            setCharacters(prev => prev.concat(character));
                            i++;

                            if (i < props.level + 2) {
                                fetchLoop();
                            }
                        });
                }
                fetchLoop();
            });
    }, [props.level, props.gameover]);

    // This effect only happens on game reset
    useEffect(() => {
        // reset ids length when seen cards have also been reset
        if (props.seenCardIds.length === 0) ids.length = 0;
    }, [props.seenCardIds]);

    return (
        <div className="p-2 sm:p-5 container flex-1 flex flex-col items-center border-4 2xl:border-8 rounded-md bg-green-500/75 border-lime-500 shadow-green-900 shadow-[inset_0_0_80px_80px]">
            <p className="pb-6 text-4xl font-handwriting text-gray-200">
                Level {props.level}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center h-fit">
                {characters.map(character => (
                    <Card
                        img={character.image}
                        name={character.name}
                        key={character.id}
                        onClick={() => {
                            props.cardClickHandler(character.id, ids);
                            shuffleCharacters();
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
