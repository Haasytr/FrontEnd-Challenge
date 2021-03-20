import React, { useEffect, useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';

import { Container, Books } from './styles';

import api from '../../services/api';

interface BooksDetail {
  id: string;
  volumeInfo: {
    title: string,
    imageLinks: {
      thumbnail: string,
    }
  }
}

interface BookDetail {
  volumeInfo: {
    title: string,
    description: string,
    publishedDate: string,
    imageLinks: {
      thumbnail: string,
    }
  }
}

const ListBooks: React.FC = () => {
  const [books, setBooks] = useState<BooksDetail[]>();
  const [show, setShow] = useState(false);
  const [bookDetail, setBook] = useState<BookDetail>();

  const handleClose = () => setShow(false);

  const handleShow = useCallback((book) => {
    setShow(true);
    setBook(book);
  }, []);

  useEffect(() => {
    async function loadBooks(): Promise<void> {
      api.get('volumes?q=DIARY%10OF%10A%10WIMPY%10KID').then(response => {
        setBooks(response.data.items);
      });
    }
    loadBooks();
  }, []);

  return (
    <Container>
      <Books>
        {books && books.map(book => (
          <div key={book.id} className="book">
            <a href="#javascript" onClick={() => handleShow(book)}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="aa" />
            </a>
          </div>
        ))}
      </Books>
      <button type="button" className="primary">SEE MORE</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{bookDetail?.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={bookDetail?.volumeInfo.imageLinks.thumbnail} alt="Capa" />
          <p className="text">{bookDetail?.volumeInfo.description}</p>
          <span>{bookDetail?.volumeInfo.publishedDate}</span>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ListBooks;
