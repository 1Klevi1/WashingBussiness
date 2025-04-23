export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-darkgray via-lightblack to-darkgray text-white py-32 px-6 text-center relative">
            <div className="relative z-10">
                {/* Title with Hover Effect */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight transform transition duration-300 ease-in-out hover:scale-110 hover:text-gold animate-fadeIn">
                    Mirësevini në Gold Lavanderi
                </h2>

                {/* Subheading (Tagline) */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-80 transition duration-300 ease-in-out hover:text-gold">
                    Larje, tharje, hekurosje dhe pastrim kimik me standarde të larta profesionale.
                </p>

                {/* Additional Text (Tagline) */}
                <p className="text-md text-black max-w-xl mx-auto mb-10 opacity-70">
                    Me shërbimet tona të shpejta dhe të sigurta, jemi këtu për t’ju ofruar kujdesin që meritojnë rrobat tuaja!
                </p>

                {/* Call-to-Action Button */}
                <div className="mt-8">
                    <a href="#services" className="bg-gold text-black py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-600">
                        Zbuloni Shërbimet
                    </a>
                </div>
            </div>
        </section>
    );
}
