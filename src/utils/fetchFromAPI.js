import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': "40dfce4876msh4c5a4adbfdf261cp17777fjsn4502f7129263",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};