import React, { useRef, useState } from 'react';
import './App.css'; // A saját CSS fájlunk, amelyben esetleges további egyedi stílusokat definiálhatunk
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stílusok importálása
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Bootstrap komponensek importálása

function App() {
  const containerRef = useRef();
  const [showExtraRows, setShowExtraRows] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  const toggleExtraRows = () => setShowExtraRows(!showExtraRows);

  const exportPDF = () => {
    const exportButton = document.querySelector('.export-btn');
    const extraRowsCheckbox = document.querySelector('.extra-rows-checkbox');
  
    // Elrejtjük a checkboxot és az export gombot
    exportButton.style.display = 'none';
    extraRowsCheckbox.style.display = 'none';
  
    html2canvas(containerRef.current, {
      x: -20,
      y: -30,
      width: containerRef.current.offsetWidth + 40,
      height: containerRef.current.offsetHeight + 40,
    }).then((canvas) => {
      // Visszaállítjuk a checkboxot és az export gombot
      exportButton.style.display = 'block';
      extraRowsCheckbox.style.display = 'block';
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('fuvarmegbizas.pdf');
    });
  };

  const organizers = [
    {
      name: 'Pintér Gabriella',
      phone: '+36 20 324 84 89',
      email: 'pgconnect@roadistics.com'
    },
    {
      name: 'Gősi Melinda',
      phone: '+36 20 380 82 36',
      email: 'gmconnect@roadistics.com'
    },
    
  ];

  const handleOrganizerChange = (e) => {
    const selected = organizers.find(org => org.name === e.target.value);
    setSelectedOrganizer(selected);
  };

  return (
    <Container ref={containerRef} className='container'>
      <Row >       
      </Row>
      <Row >
        <Col  className="text-center">
          <img src="logo.png" alt="Company Logo" className="mb-0" />
        </Col>
      </Row>
      <Row id='fix'>
        <Col xs={6} sm={6} className='text-left'>
          <p><strong>Megbízó:</strong> Road-istics Connect Kft.</p>
          <p><strong>Cím:</strong> 3128 Vizslás, Kossuth Lajos utca 73.</p>
          <p><strong>Cégjegyzékszám:</strong> 12-09-011820</p>
          <p><strong>Adószám:</strong> 27350872-2-12</p>
        </Col>
        <Col xs={6} sm={6} className='text-left'>
          <p><strong>Ügyvezető:</strong> Bucsics Zoltán</p>
          <p><strong>E-mail:</strong> infoconnect@roadistics.com</p>
          <p><strong>Közösségi adószám:</strong> HU27350872</p>
        </Col>  
      </Row>
      
      <Row>
        <Col xs={12} sm={6}>
          <p><strong>Címzett:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Adószám:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col xs={12} sm={6}>
          <p><strong>Kontakt(Timo):</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Levelezési Cím:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      <Row id='fix' className="mt-1">
        <Col xs={12} sm={6}>
          <p><strong>Telefon:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col id='lastt' xs={12} sm={6}>
          <p><strong>E-mail:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      <Row className="mt-1">
        <p id='mission'><strong>Az alábbi fuvar elvégzésével bízzuk meg Önöket:</strong></p>
        <Col xs={12} sm={6}>
          <p><strong>Fuvarazonosító:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Fuvar iránya:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col xs={12} sm={6}>
          <p><strong>Rendszám:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Áru:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      {/* Opcionális extra sorok a Felrakás és Lerakás számára */}
      {showExtraRows && (
        <>
          <Row className="mt-1">
            <Col xs={12} sm={12}>
              <p><strong>Áru megjegyzés:</strong></p>
              <input type="text" className="form-control input-no-border" />
            </Col>
            
          </Row>
        </>
      )}
      <Row className="mt-1">
        <Col xs={12} sm={6}>
          <p><strong>Felrakás:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Lerakás:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>

      {/* Opcionális extra sorok a Felrakás és Lerakás számára */}
      {showExtraRows && (
        <>
          <Row className="mt-1">
            <Col xs={12} sm={6}>
              <p><strong>Felrakó 2:</strong></p>
              <input type="text" className="form-control input-no-border" />
            </Col>
            <Col xs={12} sm={6}>
              <p><strong>Lerakó 2:</strong></p>
              <input type="text" className="form-control input-no-border" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <p><strong>Felrakó 3:</strong></p>
              <input type="text" className="form-control nput-no-border" />
            </Col>
            <Col xs={12} sm={6}>
              <p><strong>Lerakó 3:</strong></p>
              <input type="text" className="form-control input-no-border" />
            </Col>
          </Row>
        </>
      )}

      <Row >
        <Col xs={12} sm={6}>
          <p><strong>Felrakás időpont:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Lerakás időpont:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      
      <Row id='fix' >
        <Col xs={12} sm={6}>
          <p><strong>Megjegyzés (Felrakás):</strong></p>
          <input id='lastt' type="text" className="form-control input-no-border" />
        </Col>
        <Col xs={12} sm={6}>
          <p><strong>Megjegyzés (Lerakás):</strong></p>
          <input id='lastt' type="text" className="form-control input-no-border" />
        </Col>
      </Row>

      {/* Opcionális extra megjegyzések sorok */}
      {showExtraRows && (
        <>
          <Row >
            <Col xs={12} sm={12}>
              <p><strong>Megjegyzés 2 :</strong></p>
              <input id='lastt' type="text" className="form-control input-no-border" />
            </Col>
            
          </Row>
          <Row >
            <Col xs={12} sm={12}>
              <p><strong>Megjegyzés 3 :</strong></p>
              <input id='lastt' type="text" className="form-control input-no-border" />
            </Col>
            
          </Row>
        </>
      )}

      <Row >
        <Col xs={12} sm={6}>
          <p><strong>Díj:</strong></p>
          <input type="text" className="form-control input-no-border" />
        </Col>
        <Col id='lastt' xs={12} sm={6}>
          <p><strong>Megbízás Kelt:</strong></p>
          <input id='lastt' type="text" className="form-control input-no-border" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3}>
          <p><strong>Fuvarszervező:</strong></p>
          <Form.Select onChange={handleOrganizerChange}>
            <option value="">Válassz fuvarszervezőt</option>
            {organizers.map((organizer, index) => (
              <option key={index} value={organizer.name}>{organizer.name}</option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={3}>
          <p><strong>Telefonszám:</strong></p>
          <input
            type="text"
            className="form-control input-no-border"
            value={selectedOrganizer?.phone || ''}
            readOnly
          />
        </Col>
        <Col xs={12} sm={3}>
          <p><strong>E-mail:</strong></p>
          <input
            type="text"
            className="form-control input-no-border"
            value={selectedOrganizer?.email || ''}
            readOnly
          />
        </Col>
      </Row>
      <Row >
        
        
        <p className='only'><strong>Kizárólag a megbízás szerinti Devizában tudjuk befogadni a számlát!</strong></p>
        <Row id='fix' >       
      </Row>
      </Row>

      {/* Opcionális sorok hozzáadása gomb */}
      <Row >
        <Col xs={12}>
          <Form.Check 
            type="checkbox"
            label="Opcionális extra sorok megjelenítése"
            onChange={toggleExtraRows}
            className="extra-rows-checkbox"
          />
        </Col>
      </Row>

      <Row >
        <Col xs={12}>
          <Button variant="primary" className="export-btn" onClick={exportPDF}>Export PDF</Button>
        </Col>
      </Row>     
    </Container>   
  );
}

export default App;






