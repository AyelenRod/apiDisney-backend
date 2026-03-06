//Logica y mapeo
const getItems = async (req, res) => {
  try {
    const response = await fetch('https://api.disneyapi.dev/character');
    const result = await response.json();
    
    const transformed = result.data.map((char) => ({
      id: char._id,
      title: char.name,
      image: char.imageUrl || 'https://via.placeholder.com/150',
      tag: 'Disney Character',
      subtitle: char.films.length > 0 ? char.films[0] : 'Disney Plus',
      details: [
        { label: 'TV Shows', value: char.tvShows.length },
        { label: 'Video Games', value: char.videoGames.length }
      ],
      stats: [
        { name: 'Popularity', value: Math.floor(Math.random() * 90) + 10 }
      ]
    }));

    res.json(transformed);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos' });
  }
};

module.exports = { getItems };