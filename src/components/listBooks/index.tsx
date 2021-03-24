import React, { useEffect, useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';

import { Container, Books, Image } from './styles';

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

interface Props {
  filter: string;
}

const ListBooks: React.FC<Props> = ({ filter }) => {
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
      api.get(`volumes?q=${filter}`).then(response => {
        setBooks(response.data.items);
      });
    }
    loadBooks();
  }, [filter]);

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
          <Image>
            <img src={bookDetail?.volumeInfo.imageLinks.thumbnail} alt="Capa" />
          </Image>
          <p className="text">{bookDetail?.volumeInfo.description}</p>
          <span>{bookDetail?.volumeInfo.publishedDate ? bookDetail?.volumeInfo.publishedDate.substring(0, 4) : ''}</span>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ListBooks;
