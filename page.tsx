import Head from 'next/head';
import Navigation from './components/navigation';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>ICT Solutions</title>
        <meta name="description" content="Your partner for innovative ICT solutions." />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-black py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">ICT Solutions</h1>
          <Navigation />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black">Welcome to Our ICT Services</h2>
          <p className="mt-4 text-lg text-black">Innovative solutions for your digital needs.</p>
          <a href="#services" className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-black">Our Services</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black">Software Development</h4>
              <p className="mt-2 text-black">Custom software solutions tailored to your business needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black">IT Support</h4>
              <p className="mt-2 text-black">Reliable support for all your technical issues.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black">Cloud Solutions</h4>
              <p className="mt-2 text-black">Scalable cloud solutions to enhance your operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-black">About Us</h3>
          <p className="mt-4 text-center max-w-2xl mx-auto text-black">
            We are a dedicated team of ICT professionals committed to delivering high-quality solutions to our clients. Our expertise spans software development, IT support, and cloud solutions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">© 2024 ICT Solutions. All rights reserved.</p>
          <p className="text-white">Contact us: info@ictsolutions.com</p>
        </div>
      </footer>
    </div>
  );
}
