export default function Pricing() {
    return (
        <section id="pricing" className="bg-gradient-to-r from-gold to-light py-20 px-6">
            <h3 className="text-4xl font-extrabold text-white text-center mb-12">Çmimet</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 text-center transition-all">
                    <h4 className="text-xl font-semibold text-gold mb-4">Gold Larje</h4>
                    <p className="text-lg text-dark mb-4">300 Lek / kg</p>
                    <p className="text-base text-gray-600">Për cilësi të lartë dhe kujdes të veçantë për rrobat tuaja.</p>
                </div>

                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 text-center transition-all">
                    <h4 className="text-xl font-semibold text-gold mb-4">Tharje</h4>
                    <p className="text-lg text-dark mb-4">200 Lek / kg</p>
                    <p className="text-base text-gray-600">Tharje efikase dhe shpejtë për çdo material.</p>
                </div>

                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 text-center transition-all">
                    <h4 className="text-xl font-semibold text-gold mb-4">Hekurosje</h4>
                    <p className="text-lg text-dark mb-4">150 Lek / copë</p>
                    <p className="text-base text-gray-600">Rroba të hekurosura perfekt dhe gati për t’u veshur.</p>
                </div>

                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 text-center transition-all">
                    <h4 className="text-xl font-semibold text-gold mb-4">Pastrim Kimik</h4>
                    <p className="text-lg text-dark mb-4">Nga 500 Lek</p>
                    <p className="text-base text-gray-600">Pastrim i veçantë për rrobat delikate dhe të veçanta.</p>
                </div>
            </div>
        </section>
    );
}
