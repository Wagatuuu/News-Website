import React from 'react';

function NewsFeed() {
  const articles = [
    {
      id: 1,
      title: 'Breaking News: Kimutai Headline',
      image: 'https://via.placeholder.com/150',
      summary: 'Microbiology students from the great University of Nairobi riot due to ladies shortage.',
      date: 'March 16, 2023',
      uri: '/news/1',
    },
    {
      id: 2,
      title: 'Another News Article',
      image: 'https://via.placeholder.com/150',
      summary: 'Microbiology students from the great University of Nairobi riot due to ladies shortage.',
      date: 'March 16, 2023',
      uri: '/news/2',
    },
  ];

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} />
          <p>{article.summary}</p>
          <p>{article.date}</p>
          <a href={article.uri}>Read More</a>
        </li>
      ))}
    </ul>
  );
}

export default NewsFeed;
