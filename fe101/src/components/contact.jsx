import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function AppContact() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact us</h2>
                    <div className='subtitle'> get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your contact message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Subnit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4175.028427073175!2d-0.12560467031555436!3d51.52263145464843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1739668280258!5m2!1sen!2suk" loading="lazy" allowFullScreen='' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li><i className='fas fa-envelope'></i>hello@company.com</li>
                        <li><i className='fas fa-phone'></i>+44 207 5555 555</li>
                        <li><i className='fas fa-map-marker-alt'></i>London, United Kingdom</li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default AppContact