import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RecommendedCard from '../components/RecommendedCard';
import menu from '../data/menu.json';
import './Menu.css';

const categories = [
    { key: 'all', label: 'الكل' },
    { key: 'trays', label: 'الصواني' },
    { key: 'broasted', label: 'البروستد' },
    { key: 'sandwiches', label: 'سندوتشات' },
    { key: 'boxes_and_grill', label: 'بوكسات ومشاوي' }
];

const Menu = () => {
    const [activeCat, setActiveCat] = useState('all');

    // flatten all except drinks
    const pool = [
        ...menu.trays,
        ...menu.broasted,
        ...menu.sandwiches,
        ...menu.boxes_and_grill
    ].map(item => ({
        ...item,
        image: `/public/${item.name}.png` // Assuming images are stored in public folder
    }));

    // filter logic
    const itemsToShow = activeCat === 'all'
        ? pool
        : pool.filter(item => {
            if (activeCat === 'trays') return menu.trays.some(d => d.name === item.name);
            if (activeCat === 'broasted') return menu.broasted.some(d => d.name === item.name);
            if (activeCat === 'sandwiches') return menu.sandwiches.some(d => d.name === item.name);
            if (activeCat === 'boxes_and_grill') return menu.boxes_and_grill.some(d => d.name === item.name);
            return false;
        });

    return (
        <>
            {/* Hero Banner */}
            <section className="menu-hero text-center text-white d-flex align-items-center justify-content-center" dir="rtl">
                <div className="overlay"></div>
                <Container>
                    <h1 className="fw-bold">قائمة الطعام</h1>
                    <p className="text-light">
                        اكتشف أشهى النكهات الشامية
                        <br />
                        Discover Our Menu
                    </p>
                </Container>
            </section>

            {/* Category Filters */}
            <section className="py-4" dir="rtl">
                <Container className="text-center">
                    {categories.map(cat => (
                        <Button
                            key={cat.key}
                            variant={activeCat === cat.key ? 'danger' : 'outline-danger'}
                            className="me-2 mb-2"
                            onClick={() => setActiveCat(cat.key)}
                        >
                            {cat.label}
                        </Button>
                    ))}
                </Container>
            </section>

            {/* Cards Grid */}
            <section className="pb-5" dir="rtl">
                <Container>
                    <Row className="g-4">
                        {itemsToShow.map((item, idx) => (
                            <Col key={idx} md={4} sm={6}>
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
        </>
    );
};

export default Menu;
