import { Row, Col, Card } from "react-bootstrap";

 const newsData = [
        {
            id: 1,
            title: "Harga BBM Naik Awal Tahun 2026",
            summary: "Pemerintah menjelaskan alasan penyesuaian harga BMM.",
            source: "Liputan6",
            time: "2 jam lalu",
            category: "Nasional",
            image: "https://tse1.mm.bing.net/th/id/OIP._xYjH-g7ns6MmJ4iekxfCwHaDt?pid=Api&P=0&h=180",
        },
        {
          id: 2,
            title: "Teknologi Ramah Lingkungan di Indonesia",
            summary: "Teknologi Al mulai diterapkan di sekolah",
            source: "Liputan6",
            time: "5 jam lalu",
            category: "Teknologi",
            image: "https://tse1.mm.bing.net/th/id/OIP.CgO_Jqsf0FlhSymboQhxMQHaE7?pid=Api&P=0&h=180",
        },
        {
            id: 3,
            title: "Timnas Indonesia Lolos Final",
            summary: "Kemenangan dramastis di semifinal",
            source: "Liputan6",
            time: "1 hari lalu",
            category: "Olahraga",
            image: "https://tse3.mm.bing.net/th/id/OIP.ehgdAR3Nqzx9Hc6xik2HqgHaEK?pid=Api&P=0&h=180",
        },
        {
            id: 4,
            title: "Kedatangan Valen di Gedung Negara Grahadi Surabaya",
            summary: "Masyarakat diminta waspada",
            source: "Liputan6",
            time: "2 hari lalu",
            category: "Penyambutan Valen",
            image: "https://tse2.mm.bing.net/th?id=OIF.edBe%2bI0jCQH1NDoK9pnDlA&pid=Api&P=0&h=180",
        },
        {
            id: 5,
            title: "IHSG Dibuka Menguat",
            summary: "Sentimen global dorong pasar saham",
            source: "Liputan6",
            time: "3 hari lalu",
            category: "Ekonomi",
            image: "https://tse1.mm.bing.net/th/id/OIP.A8Sgv1xgElQgdobody3C_wHaEK?pid=Api&P=0&h=180",
        },
        {
            id: 6,
            title: "Wisata Alam Jadi Tren 2026",
            summary: "Liburan ke alam makin diminati",
            source: "Liputan6",
            time: "4 hari lalu",
            category: "Lifestyle",
            image: "https://tse1.mm.bing.net/th/id/OIP.nWtSnA2I-xpYfWsITFs0UAAAAA?pid=Api&P=0&h=180",
        }
    ];

    function NewsList({ keyword, category }){
        const filtered = newsData.filter(news => {
            const searchMatch= news.title.toLowerCase().includes(keyword.toLowerCase());
            const categoryMatch= category === "All" || news.category === category;
            return searchMatch && categoryMatch;
        });

        const headline= filtered.length > 0 ? filtered[0] : newsData[0];

    return ( 
        <>
        <Card className="mb-4 text-white headline">
            <Card.Img src={headline.image} />
                 <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                    <small>{headline.source} . {headline.time}</small>
                      <Card.Title>{newsData.title}</Card.Title>
                      <Card.Text>{newsData.summary}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                        <Row>
                            {filtered.slice(1).map(news => (
                             <Col md={4} key={news.id}>
                               <Card className="mb-4 shadow-sm">
                                 <Card.Img variant="top" src={news.image} />
                                 <Card.Body>
                                    <small className="text-muted">{news.source} . {news.time}</small>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.summary}</Card.Text>
                                 </Card.Body>
                              </Card>
                            </Col>
                          ))}
                       </Row>
                    </>
                 );
              };

export default NewsList;