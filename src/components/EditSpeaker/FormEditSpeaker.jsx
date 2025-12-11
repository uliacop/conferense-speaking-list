import { useState } from "react";
import "./FormEditSpeaker.css";
export default function FormEditSpeaker({ onUpdate, onCancel, speaker }) {
  const [name, setName] = useState(speaker.name ?? "");
  const [image, setImage] = useState(speaker.image ?? "");
  const [company, setCompany] = useState(speaker.company ?? "");
  const [position, setPosition] = useState(speaker.position ?? "");
  const [topic, setTopic] = useState(speaker.topic ?? "");
  const [time, setTime] = useState(speaker.timeBalance ?? 0);
  function handleSubmit(e) {
    e.preventDefault();
    const updateSpeaker = {
      ...speaker,
      name,
      image,
      company,
      topic,
      position,
      timeBalance: Number(time),
    };
    onUpdate(updateSpeaker);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit speaker </h3>
      <label>Speaker name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <label>Name of company</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      ></input>
      <label>Title of speech</label>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      ></input>
      <label>Position`s speaker</label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      ></input>
      <label>Time</label>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      ></input>
      <div className="form-actions">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
