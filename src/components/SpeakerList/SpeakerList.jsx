import "./SpeakerList.css";
import Speaker from "../Speaker/Speaker";
export default function SpeakerList({
  speakers,
  onSelection,
  selectedSpeaker,
}) {
  return (
    <ul className="speaker-list">
      {speakers.map((speaker) => (
        <Speaker
          speaker={speaker}
          key={speaker.id}
          onSelection={onSelection}
          selectedSpeaker={selectedSpeaker}
        />
      ))}
    </ul>
  );
}
