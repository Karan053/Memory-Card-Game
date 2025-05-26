const Card = props => {
    return (
        <div
            onClick={props.onClick}
            className="select-none py-2 w-[100px] sm:w-[135px] md:w-[180px] 2xl:w-[220px] h-[170px] sm:h-[200px] md:h-[270px] 2xl:h-[330px] bg-lime-700/25 active:bg-lime-300/25 border-lime-500 border-4 2xl:border-[6px] grid grid-rows-[min-content_1fr] place-items-center gap-2 hover:cursor-pointer hover:scale-[1.025] transition-[scale_background-color]"
        >
            <img
                src={props.img}
                alt={props.name}
                className="w-[80%] border-lime-500 border-2 2xl:border-4 pointer-events-none"
            />
            <p className="px-2 bg-lime-600 w-[90%] h-full rounded-sm font-handwriting text-[0.65rem] sm:text-sm md:text-lg 2xl:text-2xl text-center text-gray-200 grid place-items-center">
                {props.name}
            </p>
        </div>
    );
};

export default Card;
