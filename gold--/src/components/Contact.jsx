import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="bg-gradient-to-r from-gold to-light py-24 px-6 text-white">
            <h3 className="text-4xl font-extrabold  text-center mb-16">Kontakt</h3>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Contact Information */}
                <div className="flex-1 space-y-8 text-center lg:text-left bg-white p-8 rounded-xl shadow-xl ">
                    <div className="flex justify-start items-center space-x-6">
                        <FaPhoneAlt className="text-4xl text-gold" />
                        <p className="text-lg text-black">
                            <strong>Telefon:</strong> +355 069 204 1046
                        </p>
                    </div>

                    <div className="flex justify-start items-center space-x-6">
                        <FaEnvelope className="text-4xl text-gold" />
                        <p className="text-lg text-black">
                            <strong>Email:</strong> goldlavanderi@gmail.com
                        </p>
                    </div>

                    <div className="flex justify-start items-center space-x-6">
                        <FaMapMarkerAlt className="text-4xl text-gold" />
                        <p className="text-lg text-black">
                            <strong>Adresa:</strong> Rruga Veledin Kollozi, Vlorë, Shqipëri
                        </p>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="flex-1 w-full lg:w-[70%] mt-12 lg:mt-0">
                    <iframe
                        title="Gold Lavanderi Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11990.096721251795!2d19.4832768!3d40.4685531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13453e6d5fdc23bb%3A0x6c9722e5f2c85d14!2sRruga%20Veledin%20Kollozi%2C%20Vlor%C3%AB%2C%20Albania!5e0!3m2!1sen!2s!4v1714140401234!5m2!1sen!2s"
                        width="100%"
                        height="250px" // Set a fixed height for the map
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
