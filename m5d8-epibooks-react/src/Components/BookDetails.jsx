import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea.jsx'; // Aggiungi l'estensione del file
import fantasy from '../books/fantasy.json';


const BookDetails = () => {
    const paramas = useParams()
    const foundBook = fantasy.find((book) => book.asin === paramas.asin)

    return (
        <Row className="justify-content-center">
            <Col md={8}>
                <Card>
                    <Card.Img variant="top" src={foundBook.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>
                            {foundBook.title}
                        </Card.Title>
                    </Card.Body>
                </Card>
                <CommentArea asin={paramas.asin}/>
            </Col>
        </Row>
    )
}

export default BookDetails