import { Row, Col, Card } from "react-bootstrap";

 const newsData = [
        {
            id: 1,
            title: "Harga BBM Naik Awal Tahun 2026",
            summary: "Pemerintah diperkirakan menaikkan harga BBM di awal tahun 2026. Kenaikan ini berlaku untuk BBM nonsubsidi seperti Pertamax, Pertamax Turbo, dan Dexlite, sementara Pertalite dan Solar subsidi kemungkinan tetap stabil. Kenaikan dipicu oleh penyesuaian harga minyak dunia dan biaya produksi, yang berdampak pada transportasi, logistik, dan harga kebutuhan pokok.",
            category: "Nasional",
            image: "https://tse1.mm.bing.net/th/id/OIP._xYjH-g7ns6MmJ4iekxfCwHaDt?pid=Api&P=0&h=180",
            source: "Liputan6",
            time: " 2 jam lalu",
        },
        {
          id: 2,
            title: "Teknologi Ramah Lingkungan di Indonesia",
            summary: "Indonesia gencar terapkan teknologi ramah lingkungan, dari energi tembakau, transportasi listrik, pertanian organik, hingga pengelolaan sampah dan bangunan hijau, untuk kurangi dampak ekologis.",
            category: "Teknologi",
            image: "https://tse1.mm.bing.net/th/id/OIP.CgO_Jqsf0FlhSymboQhxMQHaE7?pid=Api&P=0&h=180",
            source: "Liputan6",
            time: "5 jam lalu",
        },
        {
            id: 3,
            title: "Timnas Indonesia Lolos Final",
            summary: "Timnas Indonesia berhasil menembus babak final setelah kemenangan impresif di semifinal. Keberhasilan ini disambut antusiasme tinggi dari suporter di seluruh negeri, menambah semangat tim jelang pertandingan puncak.",
            category: "Olahraga",
            image: "https://tse3.mm.bing.net/th/id/OIP.ehgdAR3Nqzx9Hc6xik2HqgHaEK?pid=Api&P=0&h=180",
            source: "Liputan6",
            time: "1 hari lalu",
        },
        {
            id: 4,
            title: "Kedatangan Valen di Gedung Negara Grahadi Surabaya",
            summary: "Achamad Valen Akbar, runner-up Dangdut Academy 7 (DA7) asal Pamekasan, tiba di Gedung Negars Grahadi, Surabaya, disambut antusias oleh Gubernur Jawa Timur Khofifah Indar Parawansa, Wagub Emil Dadak, dan ratusan warga yang memadati lokasi.",
            category: "Penyambutan Valen",
            image: "https://tse2.mm.bing.net/th?id=OIF.edBe%2bI0jCQH1NDoK9pnDlA&pid=Api&P=0&h=180",
            source: "Liputan6",
            time: "2 hari lalu",
        },
        {
            id: 5,
            title: "IHSG Dibuka Menguat",
            summary:"IHSG dibuka menguat pada perdagangan awal 2026, menguat sekitar 0,5% seiring optimisme investor terhadap pemulihan ekonomi dan kinerja emiten, meski masih ada sentimen dari harga komoditas dan kondisi global.",
            category: "Ekonomi",
            image: "https://tse1.mm.bing.net/th/id/OIP.A8Sgv1xgElQgdobody3C_wHaEK?pid=Api&P=0&h=180",
            source: "Liputan6",
            time: "3 hari lalu",
        },
        {
            id: 6,
            title: "Wisata Alam Jadi Tren 2026",
            summary: "Wisata alam diprediksi jadi tren utama 2026, dengan masyarakat semakin antusias menjelajahi destinasi alami, menikmati pengalaman outdoor, dan mendukung pariwisata ramah lingkungan.",
            category: "Lifestyle",
            image: "https://tse1.mm.bing.net/th/id/OIP.nWtSnA2I-xpYfWsITFs0UAAAAA?pid=Api&P=0&h=180",
            source: "Liputan6",
            time: "4 hari lalu",
        }
    ];

    function NewsList({ keyword, category }){
        const filtered = newsData.filter((news) => {
            const keywordLower= keyword.toLowerCase().trim();

            const searchMatch =
            news.title.toLowerCase().includes(keywordLower) ||
            news.summary.toLowerCase().includes(keywordLower);

        const categoryMatch= 
            category === "All" || news.category === category;
        
        if (keywordLower === ""){
            return categoryMatch;
        }
        return categoryMatch && searchMatch;
        });

        if (filtered.length === 0 ) {
            return (
            <p className="text-muted">
                Tidak ada berita untuk kata <b>"{keyword}"</b></p>
        );
    }

        const headline = filtered[0];

    return ( 
        <>
        <Card id={`news-${headline.id}`} className="mb-3 border-0 news-item">
            <Row className="g-0">
                <Col md={6}>
                  <img src={headline.image} className="headline-img alt={headline.title}" />
                </Col>

                <Col md={6} className="p-3">
                    <h4 className="fw-bold">{headline.title}</h4>
                    <p className="text-muted">{headline.summary}</p>
                  <small className="text-secondary">
                    {headline.source} . {headline.time}
                </small>
            </Col>
        </Row>
    </Card>

    {filtered.slice(1).map((news) => (
        <Card key={news.id} className="news-item border-0">
            <Row className="g-3 align-items-start">
                <Col xs={4} className="news-img-col">
                    <a href={`#news-${news.id}`}>
                    <img src={news.image} className="news-thumb" alt={news.title} />
                    </a>
                </Col>
              
                <Col xs={8}>
                    <a href={`#news-${news.id}`} className="news-link">
                        <h6 className="fw-bold mb-1">{news.title}</h6>
                    </a>

                    <p className="small text-muted mb-1">{news.summary}</p>

                    <small className="text-secondary">
                        {news.source} &bull; {news.time}
                    </small>
                </Col>
            </Row>
        </Card>
     ))}
    </>
 );
}
            
export default NewsList;