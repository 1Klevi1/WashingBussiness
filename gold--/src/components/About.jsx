export default function About() {
    return (
        <section id="about" className="bg-gradient-to-r from-darkgray via-lightblack to-darkgray text-white py-16 px-6 text-center relative">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-extrabold text-center text-white mb-12">Rreth Nesh</h3>

                <p className="text-lg text-dark leading-relaxed max-w-3xl mx-auto mb-12">
                    Gold Lavanderi ofron shërbime profesionale të larjes dhe pastrimit të rrobave me përkushtim dhe cilësi
                    të lartë. Ne besojmë se çdo rrobë meriton kujdesin më të mirë, dhe për këtë arsye, ne përdorim teknologji moderne dhe
                    metodologji të avancuara për çdo shërbim.
                </p>

                {/* Image Gallery or Collage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <img src="/image1.jpg" alt="Service 1" className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <img src="/image2.jpg" alt="Service 2" className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <img src="/image3.jpg" alt="Service 3" className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <img src="/image4.jpg" alt="Service 4" className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
