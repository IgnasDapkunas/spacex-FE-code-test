export default async function launchesData(apiUrl) {
  const response = await fetch(`${apiUrl}/launches`);
  return response.json();
}
