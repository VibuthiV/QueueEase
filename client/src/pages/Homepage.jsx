import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center shadow-inner">
        <h1 className="text-5xl font-bold mb-4">Welcome to QueueEase</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tired of chaotic queues? QueueEase helps you manage customers, events,
          and appointments effortlessly — so you can focus on what matters.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl text-white py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Why QueueEase Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why QueueEase Works</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Long lines frustrate customers and reduce satisfaction. Our platform
          offers a modern, streamlined solution to make waiting effortless.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Updates",
              desc: "Customers can track their position in line from any device.",
            },
            {
              title: "Time Efficiency",
              desc: "Reduce wait times and improve service flow.",
            },
            {
              title: "Customer Satisfaction",
              desc: "A smooth queue experience keeps customers happy.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Sign Up", desc: "Create your free account." },
            { step: "2", title: "Set Up Queue", desc: "Add details & customize." },
            { step: "3", title: "Share", desc: "Send link or QR code to users." },
            {
              step: "4",
              title: "Manage",
              desc: "Track, update, and control queues in real time.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <span className="block text-blue-500 text-4xl font-bold mb-2">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to revolutionize your queues?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Get started today and experience seamless, stress-free queue
          management.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
        >
          Sign Up Now
        </a>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At QueueEase, we believe time is one of the most valuable resources.
          Our mission is to eliminate the stress of waiting in lines by
          providing an intelligent, efficient, and user-friendly queue
          management system. Whether for clinics, banks, events, or restaurants,
          QueueEase is designed to make the experience faster, smoother, and
          hassle-free.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-2">📧 Email: support@queueease.com</p>
        <p className="mb-2">📞 Phone: +91 98765 43210</p>
        <p>📍 Address: 123, Tech Street, Bengaluru, India</p>
      </section>
    </div>
  );
};

export default HomePage;