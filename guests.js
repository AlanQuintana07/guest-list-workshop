const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";

const COHORT = "2501-FTB-ET-WEB-PT";

export async function fetchGuests() {
  try {
    const response = await fetch(`${API_URL}/${COHORT}/guests`);

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching guests:", error);
  }
}

export async function fetchGuest(id) {
  try {
    const response = await fetch(`${API_URL}/${COHORT}/guests/${id}`);

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching guest:", error);
  }
}
