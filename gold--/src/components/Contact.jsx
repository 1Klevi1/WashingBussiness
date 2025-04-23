import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="bg-gradient-to-r from-gold to-light py-20 px-6 text-white">
            <h3 className="text-4xl font-extrabold text-center mb-12">Kontakt</h3>
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-6">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <FaPhoneAlt className="text-3xl text-gold" />
                        <p className="text-lg"><strong>Telefon:</strong> <span className="text-lg">+355 68 123 4567</span></p>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <FaEnvelope className="text-3xl text-gold" />
                        <p className="text-lg"><strong>Email:</strong> <span className="text-lg">info@goldlavanderi.al</span></p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <FaMapMarkerAlt className="text-3xl text-gold" />
                        <p className="text-lg"><strong>Adresa:</strong> <span className="text-lg">Rr. e Dibrës, Tiranë, Shqipëri</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
