const UserTypings = ({ userInput, className }) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <span key={`${char}_${index}`}>{char}</span>;
            })}
        </div>
    );
};

const Character = ({ char }) => {
    return <span className="text-yellow-400">{char}</span>;
};

export default UserTypings;
