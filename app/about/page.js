import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <Head>
        <title>About Us | Support Sphere</title>
        <meta name="description" content="Learn more about Support Sphere, our mission, and our team." />
      </Head>

      <main className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-white">About Support Sphere</h1>

        <section className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300">
            At Support Sphere, we are dedicated to empowering creators by providing them with a platform where they can connect with their supporters, share exclusive content, and build a sustainable income. We believe in the power of creativity and are here to support creators in turning their passion into a thriving community.
          </p>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Exclusive content sharing</li>
            <li>Subscription-based membership</li>
            <li>Secure payment processing with Razorpay</li>
            <li>Seamless authentication with GitHub via NextAuth</li>
            <li>Creator-centric tools to manage and grow your community</li>
          </ul>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
          <p className="text-gray-300">
            Our team is a diverse group of passionate individuals who believe in the power of creativity. We are developers, designers, and strategists who are dedicated to building a platform that serves the needs of creators and their supporters.
          </p>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">
            Have questions or need support? Feel free to reach out to us at <a href="mailto:support@yourpatreonclone.com" className="text-blue-400">support@Supportsphere.com</a>. We are here to help you succeed.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;

export const metadata = {
    title: "About - Support Sphere",
  }