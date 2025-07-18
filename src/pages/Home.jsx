import React from 'react';
import './Home.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, PeopleFill, AwardFill, ClockFill } from 'react-bootstrap-icons';
import menu from '../data/menu.json';
import RecommendedCard from '../components/RecommendedCard';


const Home = () => {

    const pool = [
        ...menu.trays,
        ...menu.broasted,
        ...menu.sandwiches,
        ...menu.boxes_and_grill
    ];
    const pickNames = [
        "تكيه الابطال",
        "فرخه بروستد",
        "تنين سورى فراخ",
        "بوكس الكرم لحمه",
        "مشكل كباب وكفته كيلو",
        "تنين زنجر"
    ];
    const recommendedItems = pickNames
        .map(name => pool.find(item => item.name === name))
        .filter(Boolean)
        .map(item => ({
            ...item,
            image: `/public/${item.name}.png` // Assuming images are stored in public folder
        }));
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center justify-content-center text-center text-white" dir="rtl">
                <Container>
                    <h1 className="hero-title mb-3">كرم الشام</h1>
                    <h4 className="hero-subtitle mb-2">طعم دمشق الأصيل في قلب مصر</h4>
                    <p className="hero-desc mb-4 text-light">Authentic Syrian Taste in the Heart of Egypt</p>
                    <Button variant="warning" className="hero-btn">
                        <ArrowLeft className="ms-2" />
                        شاهد القائمة
                    </Button>
                </Container>
            </section>

            {/* Story Section */}
            <section className="story-section py-5" dir="rtl">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col md={6}>
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                                alt="Dining"
                                className="img-fluid rounded shadow"
                            />
                        </Col>

                        <Col md={6}>
                            <h2 className="text-main fw-bold mb-3">قصتنا مع الطعم الأصيل</h2>
                            <p className="mb-3">
                                في كرم الشام، نحن نقدم لكم تجربة طعام استثنائية تجمع بين النكهات الشامية الأصيلة والضيافة العربية الدافئة.
                                منذ تأسيسنا نحرص على استخدام أجود المكونات وأفضل الوصفات التقليدية التي توارثناها عبر الأجيال.
                            </p>
                            <p className="text-muted">
                                At Karam Al-Sham, we bring you an exceptional dining experience that combines authentic Syrian flavors
                                with warm Arab hospitality, using the finest ingredients and traditional recipes passed down through generations.
                            </p>

                            <div className="d-flex flex-wrap justify-content-between mt-4">
                                <div className="d-flex flex-column align-items-center text-center mx-2">
                                    <PeopleFill size={28} className="text-warning mb-1" />
                                    <span className="fw-bold text-main">+1000</span>
                                    <small>عميل راضي</small>
                                </div>
                                <div className="d-flex flex-column align-items-center text-center mx-2">
                                    <AwardFill size={28} className="text-warning mb-1" />
                                    <span className="fw-bold text-main">5</span>
                                    <small>سنوات خبرة</small>
                                </div>
                                <div className="d-flex flex-column align-items-center text-center mx-2">
                                    <ClockFill size={28} className="text-warning mb-1" />
                                    <span className="fw-bold text-main">طازج</span>
                                    <small>يومياً</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* — Recommended Dishes — */}
            <section className="recommended-section py-5" dir="rtl">
                <Container>
                    <h2 className="text-main fw-bold text-center mb-2">أطباقنا المميزة</h2>
                    <p className="text-center text-muted mb-5">
                        تذوقوا أشهى الأطباق الشامية المحضرة بحب وعناية فائقة<br />
                        Taste our most popular Syrian dishes prepared with love and care
                    </p>
                    <Row className="g-5">
                        {recommendedItems.map((item, idx) => (
                            <Col key={idx} md={4}>
                                <RecommendedCard
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* — Testimonials Section — */}
            <section className="testimonials-section py-5" dir="rtl">
                <Container>
                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold ">آراء عملائنا</h2>
                        <p className="text-muted">
                            ما يقوله عملاؤنا الكرام عن تجربتهم معنا
                        </p>
                    </div>

                    <Row className="g-4">
                        {[{
                            quote: "أفضل مطعم شامي في القاهرة! الطعم أصيل والخدمة ممتازة",
                            nameAr: "أحمد محمد",
                            nameEn: "Ahmed Mohamed",
                            rating: 5
                        }, {
                            quote: "الشاورما هنا تذكرني بطعم دمشق الأصيل. ممتاز جداً!",
                            nameAr: "فاطمة علي",
                            nameEn: "Fatima Ali",
                            rating: 5
                        }, {
                            quote: "المكان نظيف والطعام لذيذ جداً. أنصح بتجربة الكباب الشامي",
                            nameAr: "محمود حسن",
                            nameEn: "Mahmoud Hassan",
                            rating: 5
                        }].map((item, idx) => (
                            <Col key={idx} md={4}>
                                <div className="card testimonial-card h-100 p-4">
                                    <p className="testimonial-quote mb-3">“{item.quote}”</p>
                                    <div className="mb-2">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <span key={i} className="text-warning">&#9733;</span>
                                        ))}
                                    </div>
                                    <h5 className="fw-bold mb-1">{item.nameAr}</h5>
                                    <small className="text-muted">{item.nameEn}</small>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
