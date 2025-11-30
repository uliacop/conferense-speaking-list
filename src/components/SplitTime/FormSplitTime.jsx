import { useState } from "react";
import "./FormSplitTime.css";
export default function FormSplitTime({ selectedSpeaker, onSplitTime }) {
  const [time, setTime] = useState("");
  const [speechByUser, setSpeechByUser] = useState("");
  const speakingBySpeaker = time ? time - speechByUser : "";
  const [whoIsSpeaking, setWhoIsSpeakeng] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!time || !speechByUser) return;
    onSplitTime(whoIsSpeaking === "user" ? speakingBySpeaker : -speechByUser);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Split time with {selectedSpeaker.name}</h2>
      <label>Duration speech</label>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      ></input>
      <label>Your time</label>
      <input
        type="text"
        value={speechByUser}
        onChange={(e) =>
          setSpeechByUser(
            Number(e.target.value) > time
              ? speechByUser
              : Number(e.target.value)
          )
        }
      ></input>
      <label>{selectedSpeaker.name}`s time</label>
      <input type="text" disabled value={speakingBySpeaker}></input>
      <label>Who is speaking speech</label>
      <select
        value={whoIsSpeaking}
        onChange={(e) => setWhoIsSpeakeng(e.target.value)}
      >
        <option value="user">You</option>
        <option value="speaker">{selectedSpeaker.name}</option>
      </select>
      <button>Split time</button>
    </form>
  );
}
