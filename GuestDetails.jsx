export default function GuestDetails({ guest, onBack }) {
  return (
    <div>
      <h2>{guest.name}</h2>

      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Bio: {guest.bio}</p>
      <p>Job: {guest.job}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}
