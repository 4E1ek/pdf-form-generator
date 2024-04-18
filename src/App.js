import React, { useRef } from 'react';
import './App.css'; // A saját CSS fájlunk, amelyben esetleges további egyedi stílusokat definiálhatunk
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stílusok importálása
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Bootstrap komponensek importálása

function App() {
  const containerRef = useRef();
  const exportPDF = () => {
    const exportButton = document.querySelector('.export-btn');
    exportButton.style.display = 'none';

    html2canvas(containerRef.current, {
      x: -20,
      y: -30,
      width: containerRef.current.offsetWidth + 40,
      height: containerRef.current.offsetHeight + 40,
    }).then((canvas) => {
      exportButton.style.display = 'block';
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('fuvarmegbizas.pdf');
    });
  };
  return (
    <Container ref={containerRef} className='container'>
      <Row id='fix' className="mt-2">       
      </Row>
      <Row  className="mt-2">
        <Col id='fix' className="text-center">
          <img src="logo.png" alt="Company Logo" className="mb-0" />
        </Col>
      </Row>
      <Row id='fix' className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Megbízó:</strong> Road-istics Connect Kft.</p>
          <p><strong>Cím:</strong> 3128 Vizslás, Kossuth Lajos utca 73.</p>
          <p><strong>Cégjegyzékszám:</strong> 12-09-011820</p>
          <p><strong>Adószám:</strong> 27350872-2-12</p>
          <p><strong>Közösségi adószám:</strong> HU27350872</p>
          <p><strong>Ügyvezető:</strong> Bucsics Zoltán</p>
          <p><strong>Telefonszám:</strong> +36204131238</p>
          <p><strong>E-mail:</strong> infoconnect@roadistics.com</p>
        </Col>  
      </Row>
      
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Címzett:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Adószám:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Kontakt(Timo):</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Levelezési Cím:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row id='fix' className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Telefon:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col id='lastt' xs={12} sm={6}>
          <p><strong>E-mail:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row className="mt-2">
      <p id='mission'><strong>Az alábbi fuvar elvégzésével bízzuk meg Önöket:</strong></p>
        <Col xs={12} sm={6}>
          <p><strong>Fuvarazonosító:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Fuvar iránya:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Rendszám:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Áru:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Felrakás:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Lerakás:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Felrakás időpont:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Lerakás időpont:</strong></p>
          <input type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row id='fix' className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Megjegyzés:</strong></p>
          <input id='lastt' type="text" className="form-control mb-1 input-no-border" />
        </Col>
        <Col id='lastt' xs={12} sm={6}>
          <p><strong>Megjegyzés:</strong></p>
          <input id='lastt' type="text" className="form-control mb-1 input-no-border" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <p><strong>Díj:</strong></p>
          <input type="text" className="form-control mb-3 input-no-border" />
        </Col>
      </Row>
      <Row  className="mt-2">
        <Col  xs={12} sm={6}>
          <p><strong>Megbízás Kelt:</strong></p>
          <input id='lastt' type="text" className="form-control mb-3 input-no-border" />
        </Col>
        <Row id='fix' className="mt-2">       
      </Row>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <Button variant="primary" className="export-btn" onClick={exportPDF}>Export PDF</Button>
        </Col>
      </Row>     
    </Container>   
  );
}
export default App;





