const API_URL =
  'https://eldenring.fanapis.com/api/bosses?limit=106';

export async function getBosses() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar bosses');
  }

  const data = await response.json();

  return data.data;
}