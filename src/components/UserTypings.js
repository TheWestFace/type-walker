import TextCursor from "./TextCursor.js"

const UserTypings = ({ userInput, className }) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            <TextCursor>
            {typedCharacters.map((char, index) => {
                return <span key={`${char}_${index}`}>{char}</span>;
            })}    
            </TextCursor>
        </div>
    );
};

const Character = ({ char }) => {
    return <span className="text-blue-400">{char}</span>;
};

export default UserTypings;
