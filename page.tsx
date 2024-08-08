import Head from 'next/head';
import Navigation from '../components/navigation'; // Adjust the path to go up one level

const Services = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Our Services - ICT Solutions</title>
        <meta name="description" content="Explore the services offered by ICT Solutions." />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-black py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">ICT Solutions</h1>
          <Navigation />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-12 bg-white">
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
            {/* Add more services as needed */}
          </div>
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
};

export default Services;
