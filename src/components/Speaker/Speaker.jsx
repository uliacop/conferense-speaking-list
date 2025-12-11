import { AiOutlineUser } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillSignature } from "react-icons/ai";
import { AiFillFileWord } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";
import { ImMan } from "react-icons/im";

import "./Speaker.css";
export default function Speaker({
  speaker,
  onSelection,
  selectedSpeaker,
  onDelete,
  onEdit,
  isOpen,
  onToggle,
}) {
  const isSelected = selectedSpeaker?.id === speaker.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <div>
        <img src={speaker.image} alt={speaker.name} />
        <div
          className={`accordion-container ${isOpen ? "open" : ""}`}
          onClick={onToggle}
        >
          <h3 className="name-container">
            <AiOutlineUser />
            Name: {speaker.name}
          </h3>
          <p className="icon">
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </p>
        </div>
        {isOpen && (
          <div>
            <p className="name-container">
              <AiFillCalendar />
              Company: {speaker.company}
            </p>
            <p className="name-container">
              <ImMan />
              Position: {speaker.position}
            </p>
          </div>
        )}

        <p className="name-container">
          <AiFillFileWord />
          Topic of speech: {speaker.topic}
        </p>
        <p className="name-container">
          <AiOutlineClockCircle />
          Time: {speaker.timeBalance} min
        </p>
      </div>
      <div className="button-container">
        <button type="button" onClick={() => onSelection(speaker)}>
          {isSelected ? (
            <>
              <AiOutlineClose /> Close
            </>
          ) : (
            <>
              <AiOutlineCheck />
              Select
            </>
          )}
        </button>
        <button type="button" onClick={() => onEdit(speaker)}>
          <AiFillSignature /> Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(speaker.id)}
          className="button"
        >
          <VscTrash />
          Delete
        </button>
      </div>
    </li>
  );
}
