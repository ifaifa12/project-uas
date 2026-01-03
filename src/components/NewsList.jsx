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

        if (filtered.length === 0) return <p>Berita tidak ditemukan</p>;

        const headline = filtered[0];

    return ( 
        <>
        <Card className="mb-4 border-0">
            <Card.Img src={headline.image} />
                 <Card.ImgOverlay className="bg-dark bg-opacity d-flex flex-column justify-content-end text-white">
                    <small>{headline.source} . {headline.time}</small>
                      <h3 className="fw-bold">{headline.title}</h3>
                      <p>{headline.summary}</p>
                  </Card.ImgOverlay>
                </Card>

                {filtered.slice(1).map((news) => (
                    <Card key={news.id} className="mb-3 border-0">
                        <Row className="g-2">
                            <Col xs={4}>
                              <img src={news.image} className="img-fluid rounded" alt={newa.title} />
                              </Col>
                              <Col xs={8}>
                                <small className="text-muted">
                                    {news.source} . {news.time}
                                </small>
                                <h6 className="fw-bold mb-1">{news.title}</h6>
                                <h6 className="mb-0 small">{news.summary}</h6>
                              </Col>
                        </Row>
                    </Card>
                ))}
            </>
        );
    }
            
export default NewsList;