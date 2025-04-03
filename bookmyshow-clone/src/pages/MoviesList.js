import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const MoviesList = () => {
  const movies = [
    { name: "Movie 1", genre: "Action", releaseDate: "01-02-2024", rating: "4.5", price: "₹250" },
    { name: "Movie 2", genre: "Comedy", releaseDate: "10-05-2025", rating: "4.0", price: "₹300" },
  ];

  return (
    <Container className="mt-4">
      <h2>Available Movies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Ratings</th>
            <th>Ticket Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="success" className="me-2">Book Now</Button>
                <Button variant="info">Watch Trailer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MoviesList;
