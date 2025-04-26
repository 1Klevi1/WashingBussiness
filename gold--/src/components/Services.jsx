import { FaTshirt, FaFan, FaPumpSoap, FaRecycle, FaTruck } from 'react-icons/fa'; // Added FaTruck for Delivery

export default function Services() {
    const services = [
        { title: "Larje", desc: "Rroba të pastra me teknologji moderne.", icon: <FaTshirt /> },
        { title: "Tharje", desc: "Tharje e shpejtë dhe e butë për çdo lloj materiali.", icon: <FaFan /> },
        { title: "Hekurosje", desc: "Rroba të rregullta, gati për t’u veshur.", icon: <FaPumpSoap /> },
        { title: "Pastrim Kimik", desc: "Kujdes i veçantë për rroba delikate.", icon: <FaRecycle /> },
        { title: "Shërbim Transporti", desc: "Dorëzim i rrobave në adresën tuaj.", icon: <FaTruck /> },
    ];

    return (
        <section id="services" className="py-24 px-6 bg-gradient-to-r from-gold to-light">
            <h3 className="text-4xl font-extrabold text-center text-white mb-16">Shërbimet</h3>

            <div className="max-w-7xl mx-auto">
                {/* First Row - 3 services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                    {services.slice(0, 3).map((service, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
                        >
                            <div className="text-5xl text-gold mb-6">{service.icon}</div>
                            <h4 className="text-2xl font-bold text-darkgray mb-4">{service.title}</h4>
                            <p className="text-gray-600 text-md">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Second Row - 2 services centered */}
                <div className="flex justify-center gap-10 flex-wrap">
                    {services.slice(3).map((service, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 text-center w-full sm:w-80"
                        >
                            <div className="text-5xl text-gold mb-6">{service.icon}</div>
                            <h4 className="text-2xl font-bold text-darkgray mb-4">{service.title}</h4>
                            <p className="text-gray-600 text-md">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
