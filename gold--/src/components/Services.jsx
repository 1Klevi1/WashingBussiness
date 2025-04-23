import { FaTshirt, FaFan, FaSteam, FaRecycle } from 'react-icons/fa'; // Updated with valid icons

export default function Services() {
    const services = [
        { title: "Larje", desc: "Rroba të pastra me teknologji moderne.", icon: <FaTshirt /> },
        { title: "Tharje", desc: "Tharje e shpejtë dhe e butë për çdo lloj materiali.", icon: <FaFan /> },
        { title: "Hekurosje", desc: "Rroba të rregullta, gati për t’u veshur.", icon: <FaSteam /> },
        { title: "Pastrim Kimik", desc: "Kujdes i veçantë për rroba delikate.", icon: <FaRecycle /> },
    ];

    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-r from-gold to-light">
            <h3 className="text-4xl font-extrabold text-center text-white mb-12">Shërbimet</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        <div className="text-4xl text-gold mb-4">{service.icon}</div> {/* Display icon */}
                        <h4 className="text-2xl font-semibold text-gold mb-4">{service.title}</h4>
                        <p className="text-gray-700 text-lg">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
