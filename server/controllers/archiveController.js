import axios from 'axios';

export const fetchBooksFromArchive = async (req, res) => {
  try {
    const response = await axios.get('https://openlibrary.org/subjects/science_fiction.json?limit=10');

    const books = response.data.works.map((book) => ({
      title: book.title,
      authors: book.authors.map(a => a.name).join(', '),
      cover: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
      key: book.key,
      link: `https://openlibrary.org${book.key}`
    }));

    res.json(books);
  } catch (error) {
    console.error('Failed to fetch books:', error.message);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};
