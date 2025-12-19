import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Ce tipuri de servicii de securitate oferă AKM SERV PRIVAT?",
            answer: "AKM SERV PRIVAT SECURITY SRL oferă servicii profesionale de pază umană, monitorizare video, monitorizare sisteme de alarmare, intervenție rapidă și securitate pentru evenimente publice sau private. Soluțiile sunt adaptate în funcție de tipul obiectivului și de cerințele fiecărui client."
        },
        {
            question: "În ce zone sunt disponibile serviciile de pază și securitate?",
            answer: "Oferim servicii de securitate pentru clienți din mai multe zone ale țării, cu acoperire extinsă în funcție de tipul contractului. Avem capacitatea de a extinde rapid aria de operare pentru proiecte speciale sau contracte cu acoperire regională ori națională."
        },
        {
            question: "Asigurați intervenție rapidă în caz de alarmă?",
            answer: "Da. Dispunem de echipaje mobile pregătite să intervină prompt în cazul declanșării unui sistem de alarmare sau al unui incident de securitate, conform procedurilor stabilite contractual."
        },
        {
            question: "Personalul de pază este avizat și instruit?",
            answer: "Da. Personalul AKM SERV PRIVAT SECURITY SRL este atent selecționat, avizat conform legislației în vigoare și instruit periodic pentru a asigura servicii de securitate la cele mai înalte standarde profesionale."
        },
        {
            question: "Cum pot solicita o ofertă personalizată?",
            answer: "Pentru a primi o ofertă adaptată nevoilor dumneavoastră, ne puteți contacta prin formularul de pe site, telefonic sau prin email. Un reprezentant AKM SERV PRIVAT SECURITY SRL vă va contacta pentru a analiza cerințele și a propune soluția optimă."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Generate FAQ Schema JSON-LD
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (

        <section className="faq-section" id="faq">
            {/* Inject JSON-LD for SEO */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
            <div className="container">
                <h2 className="section-title">Întrebări Frecvente</h2>

                <div className="faq-container">
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;
                        const questionId = `faq-question-${index}`;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    className="faq-question"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    id={questionId}
                                >
                                    <h3>{item.question}</h3>
                                    <span className="faq-icon" aria-hidden="true">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    id={answerId}
                                    className="faq-answer"
                                    role="region"
                                    aria-labelledby={questionId}
                                    hidden={!isOpen}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
