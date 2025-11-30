import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import SpeakerList from "./components/SpeakerList/SpeakerList.jsx";
import FormAddSpeaker from "./components/AddSpeaker/FormAddSpeaker.jsx";
import FormSplitTime from "./components/SplitTime/FormSplitTime.jsx";
import Button from "./components/Button/Button.jsx";
const initialSpeakers = [
  {
    id: 781224,
    name: "Michael Anderson",
    company: "Global Markets Group",
    position: "Chief Economist",
    topic: "Global inflation trends and monetary policy outlook",
    image: "https://i.pravatar.cc/48?u=452914",
    timeBalance: 15,
  },
  {
    id: 452914,
    name: "Olivia Chen",
    company: "FinTech Innovations",
    position: "Head of Digital Banking",
    topic: "The future of digital payments and blockchain adoption",
    image: "https://i.pravatar.cc/48?u=781229",
    timeBalance: 25,
  },
  {
    id: 992314,
    name: "Carlos Ramirez",
    company: "EcoInvest Capital",
    position: "Sustainability Investment Director",
    topic: "Green investments and economic growth opportunities",
    image: "https://i.pravatar.cc/48?u=992314",
    timeBalance: 18,
  },
];

export default function App() {
  const [speakers, setSpeakers] = useState(initialSpeakers);
  const [showAddSpeaker, setShowAddSpeaker] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  function handleAddNewSpeaker(speaker) {
    setSpeakers((speakers) => [...speakers, speaker]);
    setShowAddSpeaker(false);
  }
  function handleAddShowSpeaker() {
    setShowAddSpeaker((show) => !show);
  }
  function handleSelection(speaker) {
    setSelectedSpeaker((cur) => (cur?.id === speaker.id ? null : speaker));
    setShowAddSpeaker(false);
  }
  function handleSplitTime(value) {
    setSpeakers((speakers) =>
      speakers.map((speaker) =>
        speaker.id === selectedSpeaker.id
          ? { ...speaker, timeBalance: speaker.timeBalance + value }
          : speaker
      )
    );
    setSelectedSpeaker(null);
  }
  return (
    <div className="app">
      <Logo />
      <div className="sidebar">
        <div className="split-info">
          <SpeakerList
            speakers={speakers}
            onSelection={handleSelection}
            selectedSpeaker={selectedSpeaker}
          />
          {showAddSpeaker && (
            <FormAddSpeaker onAddSpeaker={handleAddNewSpeaker} />
          )}
          <Button onClick={handleAddShowSpeaker}>
            {showAddSpeaker ? "Close" : "Add speaker"}
          </Button>
        </div>

        {selectedSpeaker && (
          <FormSplitTime
            selectedSpeaker={selectedSpeaker}
            onSplitTime={handleSplitTime}
          />
        )}
      </div>
    </div>
  );
}
