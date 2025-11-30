import "./Speaker.css";
export default function Speaker({ speaker, onSelection, selectedSpeaker }) {
  const isSelected = selectedSpeaker?.id === speaker.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <div>
        <img src={speaker.image} alt={speaker.name} />
        <h3>Name: {speaker.name}</h3>
        <p>Company: {speaker.company} </p>
        <p>Position: {speaker.position}</p>
        <p>Topic of speech: {speaker.topic}</p>
        <p>Time: {speaker.timeBalance} min</p>
      </div>
      <button onClick={() => onSelection(speaker)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
