export default function GuestList({ guests, onSelect }) {
  return (
    <div>
      <h2>Guests</h2>

      {guests.map((guest) => (
        <div
          key={guest.id}
          onClick={() => onSelect(guest.id)}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <h3>{guest.name}</h3>
          <p>{guest.email}</p>
        </div>
      ))}
    </div>
  );
}
