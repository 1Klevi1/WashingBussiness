export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-darkgray via-lightblack to-darkgray text-white pt-36 pb-12 px-6 min-h-[90vh] flex items-center justify-center">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start md:space-x-12 px-4">

                {/* Left: Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight transition duration-300 ease-in-out hover:text-gold">
                        Mirësevini në Gold Lavanderi
                    </h2>

                    <p className="text-lg md:text-xl mb-4 opacity-80 transition duration-300 ease-in-out hover:text-gold max-w-md">
                        Larje, tharje, hekurosje dhe pastrim kimik me standarde të larta profesionale.
                    </p>

                    <p className="text-md text-black mb-8 opacity-70 max-w-md">
                        Me shërbimet tona të shpejta dhe të sigurta, jemi këtu për t’ju ofruar kujdesin që meritojnë rrobat tuaja!
                    </p>

                    {/* Button */}
                    <a
                        href="#services"
                        className="inline-block bg-gold text-black py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-yellow-600 shadow-lg"
                    >
                        Zbuloni Shërbimet
                    </a>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <img
                        src="/image5.jpg"
                        alt="Our Services"
                        className="rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>
        </section>
    );
}
