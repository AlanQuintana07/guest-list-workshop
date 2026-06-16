import { useEffect, useState } from "react";
import GuestList from "./guests/GuestList";
import GuestDetails from "./guests/GuestDetails";
import { fetchGuests, fetchGuest } from "./api/guests";

export default function App() {
  const [guests, setGuests] = useState([]);

  const [selectedGuest, setSelectedGuest] = useState(null);

  // Fetch guest list
  useEffect(() => {
    async function loadGuests() {
      const guestData = await fetchGuests();

      setGuests(guestData);
    }

    loadGuests();
  }, []);

  // Select guest
  async function handleSelect(guestId) {
    const guest = await fetchGuest(guestId);

    setSelectedGuest(guest);
  }

  return (
    <div>
      <h1>Guest List</h1>

      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuest(null)}
        />
      ) : (
        <GuestList guests={guests} onSelect={handleSelect} />
      )}
    </div>
  );
}
