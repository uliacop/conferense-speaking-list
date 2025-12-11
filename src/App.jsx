import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import SpeakerList from "./components/SpeakerList/SpeakerList.jsx";
import FormAddSpeaker from "./components/AddSpeaker/FormAddSpeaker.jsx";
import FormSplitTime from "./components/SplitTime/FormSplitTime.jsx";
import FormEditSpeaker from "./components/EditSpeaker/FormEditSpeaker.jsx";
import Button from "./components/Button/Button.jsx";
import Filter from "./components/Filter/Filter.jsx";
import { AiFillSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";

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
  const [editingSpeaker, setEditingSpeaker] = useState(null);
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  function handleAddNewSpeaker(speaker) {
    setSpeakers((speakers) => [...speakers, speaker]);
    setShowAddSpeaker(false);
  }
  function handleUpdateSpeaker(updatedSpeaker) {
    setSpeakers((speakers) =>
      speakers.map((speaker) =>
        speaker.id === updatedSpeaker.id ? updatedSpeaker : speaker
      )
    );
    setEditingSpeaker(null);
  }
  function handleEditSpeaker(speaker) {
    setEditingSpeaker(speaker);
    setSelectedSpeaker(null);
    setShowAddSpeaker(false);
  }
  function handleCancelEditSpeaker() {
    setEditingSpeaker(null);
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
  function handleDeleteSpeaker(id) {
    setSpeakers((cur) => cur.filter((speaker) => speaker.id !== id));
  }
  const visibleSpeakers = speakers.filter((speaker) =>
    speaker.name.toLocaleLowerCase().includes(filter.toLowerCase())
  );
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  function handleClearListSpeakers() {
    setSpeakers([]);
  }
  return (
    <div className="app">
      <Logo />
      <Filter value={filter} onFilter={setFilter} />
      <button
        onClick={toggleDarkMode}
        className={`icon-mode ${darkMode ? "dark-button" : ""}`}
      >
        {darkMode ? <FaRegMoon /> : <AiFillSun />}
      </button>
      <div className="sidebar">
        <div className="split-info">
          <SpeakerList
            speakers={visibleSpeakers}
            onSelection={handleSelection}
            selectedSpeaker={selectedSpeaker}
            onDelete={handleDeleteSpeaker}
            onEdit={handleEditSpeaker}
            onClearListSpeakers={handleClearListSpeakers}
            handleAddShowSpeaker={handleAddShowSpeaker}
            showAddSpeaker={showAddSpeaker}
          />
          {showAddSpeaker && (
            <FormAddSpeaker onAddSpeaker={handleAddNewSpeaker} />
          )}
        </div>
        {speakers.length > 0 && (
          <>
            {editingSpeaker && (
              <FormEditSpeaker
                speaker={editingSpeaker}
                onUpdate={handleUpdateSpeaker}
                onCancel={handleCancelEditSpeaker}
              />
            )}
            {selectedSpeaker && !editingSpeaker && (
              <FormSplitTime
                selectedSpeaker={selectedSpeaker}
                onSplitTime={handleSplitTime}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
