import "./SpeakerList.css";
import Speaker from "../Speaker/Speaker";
import { useState } from "react";

import Button from "../Button/Button";
export default function SpeakerList({
  speakers,
  onSelection,
  selectedSpeaker,
  onDelete,
  onEdit,
  onClearListSpeakers,
  handleAddShowSpeaker,
  showAddSpeaker,
}) {
  const [openId, setOpenId] = useState(null);
  const [sortBy, setSortBy] = useState("input");
  let sortedSpeakers;
  if (sortBy === "input") sortedSpeakers = speakers;
  if (sortBy === "name")
    sortedSpeakers = speakers
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "topic")
    sortedSpeakers = speakers
      .slice()
      .sort((a, b) => a.topic.localeCompare(b.topic));
  if (sortBy === "timeBalance")
    sortedSpeakers = speakers
      .slice()
      .sort((a, b) => Number(a.timeBalance) - Number(b.timeBalance));

  function handleSpeakerItemClick(id) {
    setOpenId((curId) => (curId === id ? null : id));
  }
  return (
    <div>
      <ul className="speaker-list">
        {sortedSpeakers.map((speaker) => (
          <Speaker
            speaker={speaker}
            key={speaker.id}
            onSelection={onSelection}
            selectedSpeaker={selectedSpeaker}
            onDelete={onDelete}
            onEdit={onEdit}
            isOpen={openId === speaker.id}
            onToggle={() => handleSpeakerItemClick(speaker.id)}
          />
        ))}
      </ul>
      {speakers.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input</option>
            <option value="name">Sort by name</option>
            <option value="topic">Sort by topic</option>
            <option value="timeBalance">Sort by time</option>
          </select>
          <Button onClick={handleAddShowSpeaker}>
            {showAddSpeaker ? "Close" : "Add speaker"}
          </Button>
          <Button onClick={onClearListSpeakers}>Clear list of speakers</Button>
        </div>
      )}
      {speakers.length === 0 && (
        <Button
          onClick={handleAddShowSpeaker}
          className={showAddSpeaker ? "close-btn" : ""}
        >
          {showAddSpeaker ? "Close" : "Add speaker"}
        </Button>
      )}
    </div>
  );
}
