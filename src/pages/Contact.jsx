import React from 'react';

const Contact = () => {
    const schedule = [
        {
            dayAr: 'السبت - الأربعاء',
            dayEn: 'Saturday - Wednesday',
            time: '10:00 ص - 11:00 م'
        },
        {
            dayAr: 'الخميس',
            dayEn: 'Thursday',
            time: '10:00 ص - 12:00 ص'
        },
        {
            dayAr: 'الجمعة',
            dayEn: 'Friday',
            time: '12:00 ص - 12:00 م'
        }
    ];

    const contactInfo = [
        {
            icon: 'bi-chat-dots',
            titleAr: 'واتساب',
            titleEn: 'WhatsApp',
            info: '7890 456 123 20+',
            subtitle: 'للتواصل السريع',
            color: '#D4AF37'
        },
        {
            icon: 'bi-envelope',
            titleAr: 'البريد الإلكتروني',
            titleEn: 'Email',
            info: 'info@karamalsham.com',
            subtitle: 'للاستفسارات الخاصة',
            color: '#D4AF37'
        },
        {
            icon: 'bi-telephone',
            titleAr: 'الهاتف',
            titleEn: 'Phone',
            info: '7890 456 123 20+',
            subtitle: 'للحجز والاستفسارات',
            color: '#D4AF37'
        },
        {
            icon: 'bi-geo-alt',
            titleAr: 'العنوان',
            titleEn: 'Address',
            info: 'شارع التحرير وسط البلد، القاهرة، مصر',
            subtitle: 'Tahrir Street, Downtown, Cairo, Egypt',
            color: '#D4AF37'
        }
    ];

    return (
        <div>
            {/* Bootstrap Icons CDN */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                rel="stylesheet"
            />

            {/* Hero Banner */}
            <div
                className="position-relative"
                style={{
                    height: '60vh',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 1
                    }}
                ></div>

                {/* Hero Content */}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ zIndex: 2 }}>
                    <h1 className="display-4 mb-4" style={{
                        fontWeight: 'bold',
                        direction: 'rtl',
                        fontSize: '3.5rem'
                    }}>
                        تواصل معنا
                    </h1>
                    <p className="lead mb-0" style={{
                        fontSize: '1.3rem',
                        opacity: 0.9

                    }}>
                        نحن هنا لخدمتك - Get In Touch
                    </p>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="container py-5">
                <div className="row g-4">
                    {contactInfo.map((contact, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="card h-100 shadow-sm border-0 text-center">
                                <div className="card-body p-4">
                                    {/* Icon Circle */}
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundColor: contact.color
                                        }}
                                    >
                                        <i
                                            className={`${contact.icon} text-white`}
                                            style={{ fontSize: '2rem' }}
                                        ></i>
                                    </div>

                                    {/* Arabic Title */}
                                    <h4 className="card-title mb-2" style={{
                                        color: '#8B1538',
                                        fontWeight: 'bold',
                                        direction: 'rtl'
                                    }}>
                                        {contact.titleAr}
                                    </h4>

                                    {/* English Title */}
                                    <h6 className="text-muted mb-3" style={{
                                        color: contact.color,
                                        fontWeight: '500'
                                    }}>
                                        {contact.titleEn}
                                    </h6>

                                    {/* Contact Information */}
                                    <div className="mb-3">
                                        <p className="mb-2" style={{
                                            color: '#2c3e50',
                                            fontWeight: '600',
                                            fontSize: '1rem'
                                        }}>
                                            {contact.info}
                                        </p>
                                        <p className="text-muted small mb-0" style={{
                                            fontSize: '0.9rem',
                                            direction: contact.titleAr === 'العنوان' ? 'rtl' : 'ltr'
                                        }}>
                                            {contact.subtitle}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-4">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <div className="card shadow-sm border-0 h-100">
                                {/* Form Header */}
                                <div
                                    className="card-header text-center text-white py-3"
                                    style={{
                                        backgroundColor: '#8B1538',
                                        border: 'none'
                                    }}
                                >
                                    <h4 className="mb-1" style={{
                                        fontWeight: 'bold',
                                        direction: 'rtl'
                                    }}>
                                        أرسل لنا رسالة
                                    </h4>
                                    <p className="mb-0" style={{
                                        fontSize: '0.9rem',
                                        opacity: 0.9
                                    }}>
                                        Send us a Message
                                    </p>
                                </div>

                                <div className="card-body p-4">
                                    <form>
                                        <div className="row g-3">
                                            {/* Name Field */}
                                            <div className="col-md-6">
                                                <label className="form-label" style={{
                                                    color: '#8B1538',
                                                    fontWeight: '500',
                                                    direction: 'rtl'
                                                }}>
                                                    الاسم *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="اكتب اسمك الكامل"
                                                    style={{
                                                        border: '2px solid #e9ecef',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        direction: 'rtl'
                                                    }}
                                                    required
                                                />
                                            </div>

                                            {/* Email Field */}
                                            <div className="col-md-6">
                                                <label className="form-label" style={{
                                                    color: '#8B1538',
                                                    fontWeight: '500',
                                                    direction: 'rtl'
                                                }}>
                                                    البريد الإلكتروني *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="your@email.com"
                                                    style={{
                                                        border: '2px solid #e9ecef',
                                                        borderRadius: '8px',
                                                        padding: '12px'
                                                    }}
                                                    required
                                                />
                                            </div>

                                            {/* Subject Field */}
                                            <div className="col-12">
                                                <label className="form-label" style={{
                                                    color: '#8B1538',
                                                    fontWeight: '500',
                                                    direction: 'rtl'
                                                }}>
                                                    الموضوع *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="موضوع رسالتك"
                                                    style={{
                                                        border: '2px solid #e9ecef',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        direction: 'rtl'
                                                    }}
                                                    required
                                                />
                                            </div>

                                            {/* Message Field */}
                                            <div className="col-12">
                                                <label className="form-label" style={{
                                                    color: '#8B1538',
                                                    fontWeight: '500',
                                                    direction: 'rtl'
                                                }}>
                                                    الرسالة *
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    placeholder="اكتب رسالتك هنا..."
                                                    style={{
                                                        border: '2px solid #e9ecef',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        direction: 'rtl',
                                                        resize: 'vertical'
                                                    }}
                                                    required
                                                ></textarea>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="col-12 text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg px-5 py-3 text-white"
                                                    style={{
                                                        backgroundColor: '#8B1538',
                                                        border: 'none',
                                                        borderRadius: '25px',
                                                        fontWeight: 'bold',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    إرسال الرسالة
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="col-lg-6">
                            <div className="card shadow-sm border-0 h-100">
                                {/* Map Header */}
                                <div
                                    className="card-header text-center text-white py-3"
                                    style={{
                                        backgroundColor: '#8B1538',
                                        border: 'none'
                                    }}
                                >
                                    <h4 className="mb-1" style={{
                                        fontWeight: 'bold',
                                        direction: 'rtl'
                                    }}>
                                        موقعنا على الخريطة
                                    </h4>
                                    <p className="mb-0" style={{
                                        fontSize: '0.9rem',
                                        opacity: 0.9
                                    }}>
                                        Find Us on the Map
                                    </p>
                                </div>

                                <div className="card-body p-0">
                                    {/* Google Maps Embed */}
                                    <div className="position-relative h-100" style={{ minHeight: '400px' }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0157775932536!2d31.23362997616457!3d30.044420374896753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d4c6b0b4b1%3A0x3a3e27c4f8a9f4c8!2sTahrir%20Square%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1703071234567!5m2!1sen!2seg"
                                            width="100%"
                                            height="100%"
                                            style={{
                                                border: 0,
                                                minHeight: '400px'
                                            }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Karam Al-Sham Location"
                                        ></iframe>

                                        {/* View Larger Map Button */}
                                        <div className="position-absolute top-0 end-0 m-3">
                                            <a
                                                href="https://www.google.com/maps/place/Tahrir+Square,+Cairo,+Egypt"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm btn-light shadow-sm"
                                                style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                <i className="bi-arrows-fullscreen me-1"></i>
                                                View larger map
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5" style={{ backgroundColor: '#FAFAF3' }}>
                <div className="container text-center">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <div
                            className="rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: '50px', height: '50px', backgroundColor: '#c59d28' }}
                        >
                            <i className="bi bi-clock" style={{ fontSize: '1.5rem', color: '#8B1538' }}></i>
                        </div>
                        <h2 className="mt-3 fw-bold text-main">أوقات العمل</h2>
                        <p className="text-muted">Opening Hours</p>
                    </div>

                    <div className="bg-white shadow rounded p-4 text-end">
                        {schedule.map((item, index) => (
                            <div key={index}>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="fw-bold text-main">
                                        {item.dayAr}
                                        <div className="text-muted small">{item.dayEn}</div>
                                    </div>
                                    <div className="fw-bold text-main">{item.time}</div>
                                </div>
                                {index < schedule.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Contact;