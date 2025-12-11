import "./Filter.css";
export default function Filter({ value, onFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search speaker by name"
      />
    </div>
  );
}
