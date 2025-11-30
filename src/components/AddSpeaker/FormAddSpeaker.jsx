import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import "./FormAddSpeaker.css";
export default function FormAddSpeaker({ onAddSpeaker }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [topic, setTopic] = useState("");
  const [time, setTime] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image || !company || !topic) return;
    const id = uuidv4();
    const newSpeaker = {
      name,
      image: `${image}?=${id}`,
      company,
      topic,
      id,
      position,
      timeBalance: Number(time),
    };
    onAddSpeaker(newSpeaker);
    setName("");
    setImage("https://i.pravatar.cc/48");
    setCompany("");
    setTopic("");
    setCompany("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}
