import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const NewsList = () => {
    const newsData = [
        {
            id: 1,
            title: "Pendidikan di Era Digital Meningkat Pesat",
            category: "Pendidikan",
            date: "2025-12-25",
            image: "https://tse4.mm.bing.net/th/id/OIP.Id7bAgApaYEvsZGbBEFrggHaFO?pid=Api&P=0&h=180",
            content: "Peningkatan kualitas pendidikan di era digital terus berkembang dengan pemanfaatan teknologi di sekolah-sekolah"
        },
        {
            id: 2,
            title: "Teknologi Ramah Lingkungan di Indonesia",
            category: "Lingkungan",
            date: "2025-12-24",
            image: "https://tse4.mm.bing.net/th/id/OIP.F2j6_1fOyxYNfk8KAOAeRgHaFj?pid=Api&P=0&h=180",
            content: "Indonesia mulai mengembangkan teknologi ramah lingkungan untuk mengurangi polusi dan meningkatkan efisiensi energi"
        },
        {
            id: 3,
            title: "Ekonomi Kreatif Tumbuh di Masa Pandemi",
            category: "Ekonomi",
            date: "2025-12-23",
            image: "https://tse4.mm.bing.net/th/id/OIP.jq6BNILjsM1JwJYQX3IHKgHaE7?pid=Api&P=0&h=180",
            content: "Industri kreatif di Indonesia menunjukkan pertumbuhan yang signifikan meski menghadapi tantangan pandemi global"
        },
        {
            id: 4,
            title: "Olahraga Nasional Mempersiapkan Atlet Muda",
            category: "Olahraga",
            date: "2025-12-22",
            image: "https://tse4.mm.bing.net/th/id/OIP.Z-v2ZwEx1U93YzOWTn4MKgHaE8?pid=Api&P=0&h=180",
            content: "Persiapan atlet muda Indonesia semakin matang menjelang kompetisi internasional tahun depan"
        },
        {
            id: 5,
            title: "Kebudayaan Lokal Tetap Terjaga",
            category: "Budaya",
            date: "2025-12-21",
            image: "https://tse1.mm.bing.net/th/id/OIP.QB1gY8ogkNxNBqvYFS6vJwHaEO?pid=Api&P=0&h=180",
            content: "Upaya pelestarian kebudayaan lokal terus dilakukan agar generasi muda tetap mengenal warisan budaya bangsa"
        }
    ];

    return (
        <Container className="mt-4">
            
            <Row>
                {newsData.map((news) => (
                <Col md={4} className="mb-4" key={news.id} id={news.category.toLowerCase()}>
                    <Card>
                        <Card.Img variant="top" src={news.image} />
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                            <Card.Text>
                                <small>{news.date} | {news.category}</small>
                            </Card.Text>
                            <Card.Text>{news.content}.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                  ))}
            </Row>
        </Container>
    );
};

export default NewsList;