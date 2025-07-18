import React from 'react';
import './About.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {

    const milestones = [
        {
            year: '2024',
            titleAr: 'الحاضر',
            titleEn: 'Present',
            descriptionAr: 'نخدم الآلاف شهرياً باعلى معايير الجودة',
            color: '#8B1538'
        },
        {
            year: '2022',
            titleAr: 'الجوائز',
            titleEn: 'Awards',
            descriptionAr: 'حصلنا على جائزة أفضل مطعم شامي في القاهرة',
            color: '#8B1538'
        },
        {
            year: '2020',
            titleAr: 'التوسع',
            titleEn: 'Expansion',
            descriptionAr: 'زيادة القائمة وتطوير الخدمات',
            color: '#8B1538'
        },
        {
            year: '2019',
            titleAr: 'البداية',
            titleEn: 'The Beginning',
            descriptionAr: 'افتتحنا أول فرع لكرم الشام في قلب القاهرة',
            color: '#8B1538'
        }
    ];
    return (
        <>
            {/* Hero Banner */}
            <section className="hero-banner  d-flex align-items-center justify-content-center text-center text-white">
                <div>
                    <h1 className="fw-bold display-5">قصتنا</h1>
                    <p className="lead">
                        رحلة الطعم الأصيل · <span className="text-white-50">Our Story</span>
                    </p>
                </div>
            </section>

            {/* About Content Section */}
            <section className="py-5 bg-white about-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Image Column */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="/public/about1.png"
                                alt="Cultural Heritage"
                                className="img-fluid rounded shadow"
                            />
                        </div>

                        {/* Text Column */}
                        <div className="col-md-6 text-md-end text-center">
                            <h3 className="text-main fw-bold mb-3">من دمشق إلى القاهرة</h3>
                            <p>
                                بدأت قصة كرم الشام من شوارع دمشق العتيقة، حيث تعلمنا أسرار الطبخ الشامي الأصيل من الجدات والأمهات
                                اللواتي نقلن حضارة المطبخ السوري عبر الأجيال. انتقلنا إلى مصر لنقدم طعماً فريداً من نوعه، ونشارك هذه
                                النكهات الأصيلة مع الشعب المصري الذواق.
                            </p>
                            <p>
                                في كرم الشام، لا نقدم مجرد طعام. بل نقدم تجربة ثقافية كاملة تعكس عبق التاريخ ودفء الضيافة العربية،
                                بكل وجبة تحمل معها ذكريات الأصيل وأصالته.
                            </p>
                            <p className="text-muted small">
                                Our journey began in the ancient streets of Damascus, where we learned the secrets of authentic Syrian cuisine
                                from grandmothers and mothers who carried this rich culinary heritage through generations. We brought this
                                tradition to Egypt to share these authentic flavors with the Egyptian people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-center py-5">
                    {/* Section Title */}
                    <h2 className="fw-bold mb-2" style={{ color: '#8b1538' }}>قيمنا ومبادئنا</h2>
                    <p className="text-muted mb-5">المبادئ التي نؤمن بها ونعمل عليها كل يوم</p>

                    {/* Bootstrap Icons CDN */}
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                        rel="stylesheet"
                    />

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-award',
                                titleAr: 'التميز',
                                titleEn: 'Excellence',
                                descriptionAr: 'نسعى للتميز في كل تفصيلة',
                                color: '#D4AF37'
                            },
                            {
                                icon: 'bi-people',
                                titleAr: 'الضيافة',
                                titleEn: 'Hospitality',
                                descriptionAr: 'نستقبل ضيوفنا بأرقى مستويات الخدمة',
                                color: '#D4AF37'
                            },
                            {
                                icon: 'bi-star',
                                titleAr: 'الجودة',
                                titleEn: 'Quality',
                                descriptionAr: 'نستخدم أجود المكونات الطازجة فقط',
                                color: '#D4AF37'
                            },
                            {
                                icon: 'bi-heart',
                                titleAr: 'الأصالة',
                                titleEn: 'Authenticity',
                                descriptionAr: 'نحافظ على الطعم الشامي الأصيل في كل طبق',
                                color: '#D4AF37'
                            }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="card-body text-center p-4">
                                        {/* Circular Icon */}
                                        <div
                                            className="icon-circle mb-3 mx-auto d-flex justify-content-center align-items-center"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                backgroundColor: item.color
                                            }}
                                        >
                                            <i
                                                className={`${item.icon} text-white`}
                                                style={{ fontSize: '2rem' }}
                                            ></i>
                                        </div>

                                        <h3
                                            className="card-title mb-2"
                                            style={{
                                                color: '#8b1538',
                                                fontWeight: 'bold',
                                                fontSize: '1.5rem',
                                                direction: 'rtl'
                                            }}
                                        >
                                            {item.titleAr}
                                        </h3>

                                        <h5 className="mb-3" style={{ color: item.color }}>
                                            {item.titleEn}
                                        </h5>

                                        <p
                                            className="card-text text-muted"
                                            style={{
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6',
                                                direction: 'rtl'
                                            }}
                                        >
                                            {item.descriptionAr}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-5 ">
                {/* Bootstrap Icons CDN */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                    rel="stylesheet"
                />

                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Content */}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="pe-lg-4">
                                {/* Chef Title */}
                                <div className="d-flex align-items-center mb-4" style={{ direction: 'rtl' }}>
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#D4AF37'
                                        }}
                                    >
                                        <i className="bi-person-badge text-white" style={{ fontSize: '1.5rem' }}></i>
                                    </div>
                                    <div>
                                        <h2 className="mb-1" style={{ color: '#8b1538', fontWeight: 'bold' }}>
                                            الشيف أحمد الحلبي
                                        </h2>
                                        <p className="text-muted mb-0" style={{ color: '#D4AF37' }}>
                                            Chef Ahmad Al-Halabi
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4" style={{ direction: 'rtl', textAlign: 'right' }}>
                                    <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
                                        الشيف أحمد الحلبي، هو الروح الإبداعية وراء مطبخنا. كرم الشام، فألف في حلب وترعرع على حب الطبخ منذ صغره. حيث تعلم من جدته أسرار الطبخ الشامي الأصيل.
                                    </p>
                                    <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
                                        بخبرة تزيد عن 20 عاماً في المطابخ السورية واللبنانية، يحرص الشيف أحمد على تقديم أطباق تحمل عبق الذكريات وتعكة الأصالة.
                                    </p>
                                    <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                                        "الطبخ ليس مهنة بالنسبة لي، بل فن وضع أسراره مع كل من نار المطعم. كل طبق أحضره يحمل قطعة من قلبي وذكريات طفولتي في أزقة حلب العتيقة."
                                    </p>
                                </div>

                                {/* Credentials */}
                                <div
                                    className="p-4 rounded"
                                    style={{
                                        backgroundColor: '#f8f9fa',
                                        border: '1px solid #e9ecef',
                                        direction: 'rtl'
                                    }}
                                >
                                    <h5 className="mb-3" style={{ color: '#8b1538', fontWeight: 'bold' }}>
                                        الخبرات والشهادات:
                                    </h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2 d-flex align-items-center">
                                            <i className=" text-success me-2"></i>
                                            <span className="text-muted">+20 سنة خبرة في الطبخ الشامي</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-center">
                                            <i className=" text-success me-2"></i>
                                            <span className="text-muted">شهادة في فنون الطبخ من معهد حلب للطهي</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-center">
                                            <i className=" text-success me-2"></i>
                                            <span className="text-muted">عمل في أفضل المطاعم السورية واللبنانية</span>
                                        </li>
                                        <li className="mb-0 d-flex align-items-center">
                                            <i className=" text-success me-2"></i>
                                            <span className="text-muted">متخصص في الشاورما والمشاوي التقليدية</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Chef Image */}
                        <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                            <div className="position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Chef Ahmad Al-Halabi"
                                    className="img-fluid rounded shadow-lg"
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded"
                                    style={{
                                        backgroundColor: '#8b1538',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <i className="bi-award me-2"></i>
                                    شيف متخصص
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-white">
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                    rel="stylesheet"
                />

                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <h2 className="mb-3" style={{ color: '#8B1538', fontWeight: 'bold', direction: 'rtl' }}>
                            رحلتنا عبر السنين
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                            محطات مهمة في تاريخ كرم الشام
                        </p>
                    </div>

                    {/* Timeline Cards */}
                    <div className="row g-4 ">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
                                    <div className="text-center pt-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: milestone.color,
                                                color: 'white',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {milestone.year}
                                        </div>
                                    </div>

                                    <div className="card-body text-center px-4 pb-4">
                                        <h4 className="card-title mb-2" style={{ color: '#8B1538', fontWeight: 'bold', direction: 'rtl' }}>
                                            {milestone.titleAr}
                                        </h4>
                                        <h6 className="text-muted mb-3" style={{ color: '#D4AF37', fontWeight: '500', fontSize: '0.9rem' }}>
                                            {milestone.titleEn}
                                        </h6>
                                        <p className="card-text" style={{ color: '#6c757d', fontSize: '0.95rem', lineHeight: '1.6', direction: 'rtl' }}>
                                            {milestone.descriptionAr}
                                        </p>
                                    </div>

                                    {/* Decorative Top Line */}
                                    <div
                                        className="position-absolute top-0 start-0 w-100"
                                        style={{ height: '4px', backgroundColor: milestone.color }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Connector */}
                    <div className="d-none d-lg-block position-relative mt-5">
                        <div
                            className="position-absolute top-50 start-0 translate-middle-y w-100"
                            style={{ height: '2px', backgroundColor: '#e9ecef', zIndex: 1 }}
                        ></div>
                        <div className="row">
                            {milestones.map((_, index) => (
                                <div key={index} className="col-3 text-center">
                                    <div
                                        className="rounded-circle mx-auto position-relative"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: '#8B1538',
                                            zIndex: 2,
                                            border: '3px solid white',
                                            boxShadow: '0 0 0 2px #8B1538'
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default About;
