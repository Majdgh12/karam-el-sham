import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, ClockFill, Instagram, Facebook, Twitter } from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section text-white" dir="rtl">
            <Container className="pt-5 pb-3">
                <Row className="text-center text-md-start gy-4">
                    {/* Branding */}
                    <Col md={3}>
                        <div className="brand-box-footer fw-bold fs-5 text-white mb-2">كش</div>
                        <div className="fw-bold">كرم الشام</div>
                        <p className="small">تقدم لكم أشهى الأكلات الشامية الأصيلة في قلب مصر</p>
                        
                    </Col>

                    {/* Contact Info */}
                    <Col md={3}>
                        <h5 className="text-warning">معلومات التواصل</h5>
                        <p><GeoAltFill className="me-2" /> شارع التحرير، القاهرة، مصر</p>
                        <p><EnvelopeFill className="me-2" /> info@karamalsham.com</p>
                        <p>+20 123 456 7890</p>
                    </Col>

                    {/* Working Hours */}
                    <Col md={3}>
                        <h5 className="text-warning">أوقات العمل</h5>
                        <p><ClockFill className="me-2" /> السبت - الخميس: 10:00AM - 11:00PM</p>
                        <p><ClockFill className="me-2" /> الجمعة: 12:00PM - 12:00AM</p>
                    </Col>

                    {/* Social & CTA */}
                    <Col md={3}>
                        <h5 className="text-warning">تابعونا</h5>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4 mb-3">
                            <Twitter />
                            <Instagram />
                            <Facebook />
                        </div>
                        <Button variant="warning" className="text-danger fw-bold">اتصل بنا</Button>
                    </Col>
                </Row>

                <hr className="border-light mt-4" />
                <p className="text-center small mt-3">© 2024 كرم الشام - جميع الحقوق محفوظة</p>
            </Container>
        </footer>
    );
};

export default Footer;
