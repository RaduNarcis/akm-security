import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/radunarcis123@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: "Mesaj Nou - AKM SERV Website",
                    ...formData
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert("A apărut o eroare. Vă rugăm să încercați din nou.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("A apărut o eroare de conexiune.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contactează-ne</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Informații de contact</h3>
                        <p>Suntem aici pentru a răspunde la orice întrebare legată de securitatea dumneavoastră.</p>

                        <div className="contact-item">
                            <div className="icon">📍</div>
                            <div className="details">
                                <h4>Adresă</h4>
                                <p>Bd. Chimiei, nr. 12, Iasi, România</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon">📞</div>
                            <div className="details">
                                <h4>Telefon</h4>
                                <p>+40 751 294 070</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon">✉️</div>
                            <div className="details">
                                <h4>Email</h4>
                                <p>akm.securitis@yahoo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        {isSubmitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Mesaj Trimis!</h3>
                                <p>Vă mulțumim pentru interes. Un reprezentant AKM SERV vă va contacta în cel mai scurt timp.</p>
                                <button className="btn btn-outline-dark" onClick={() => setIsSubmitted(false)}>Trimite alt mesaj</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Numele Dumneavoastră"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Adresa de Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Număr de Telefon"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <CustomSelect
                                        value={formData.service}
                                        onChange={(val) => setFormData(prev => ({ ...prev, service: val }))}
                                        placeholder="Selectați Serviciul Dorit"
                                        options={[
                                            { value: "paza", label: "Pază Umană" },
                                            { value: "monitorizare", label: "Monitorizare Video" },
                                            { value: "interventie", label: "Intervenție Rapidă" },
                                            { value: "evenimente", label: "Securitate Evenimente" }
                                        ]}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Mesajul Dumneavoastră"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                                    {isSubmitting ? 'Se trimite...' : 'Trimite Mesaj'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
