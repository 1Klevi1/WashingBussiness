export default function Pricing() {
    return (
        <section id="pricing" className="bg-gradient-to-r from-gold to-light py-24 px-6">
            <h3 className="text-4xl font-extrabold text-white text-center mb-16">Çmimet</h3>

            <div className="max-w-6xl mx-auto">
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transition-transform transform hover:scale-105">
                        <h4 className="text-2xl font-bold text-gold mb-4">Peshqirat</h4>
                        <p className="text-lg text-dark mb-4">120 Lek</p>
                        <p className="text-base text-gray-600">Për pastrim dhe kujdes të peshqirave.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transition-transform transform hover:scale-105">
                        <h4 className="text-2xl font-bold text-gold mb-4">Carcafet</h4>
                        <p className="text-lg text-dark mb-4">150 Lek</p>
                        <p className="text-base text-gray-600">Pastrim dhe kujdes i veçantë për carcafet.</p>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-center gap-10 flex-wrap">
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transition-transform transform hover:scale-105 w-full sm:w-80">
                        <h4 className="text-2xl font-bold text-gold mb-4">Të Tjera</h4>
                        <p className="text-lg text-dark mb-4">180 Lek</p>
                        <p className="text-base text-gray-600">Pastrim për rroba të tjera.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transition-transform transform hover:scale-105 w-full sm:w-80">
                        <h4 className="text-2xl font-bold text-gold mb-4">Xhupat me Pambuk</h4>
                        <p className="text-lg text-dark mb-4">600 Lek</p>
                        <p className="text-base text-gray-600">Pastrim i kujdesshëm për xhupat me pambuk.</p>
                    </div>
                </div>

                {/* Third Row */}
                <div className="flex justify-center gap-10 mt-8 flex-wrap">
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transition-transform transform hover:scale-105 w-full sm:w-80">
                        <h4 className="text-2xl font-bold text-gold mb-4">Xhupat me Pëpel</h4>
                        <p className="text-lg text-dark mb-4">800 Lek</p>
                        <p className="text-base text-gray-600">Pastrim për xhupat me pëpel për cilësi të lartë.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
