"use client";

import Footer from "../components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import PageHero from "../components/common/PageHero";
export default function ContactPage() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      organisation: e.target.organisation.value,
      interest: e.target.interest.value,
      message: e.target.message.value,
    };

    console.log("Contact Form Data:", formData);

    alert("Saved Successfully!");
  };

  return (
    <main className="w-full bg-white overflow-hidden">
      <Navbar />

      <div >
      <PageHero
  badge="— GET IN TOUCH"
  title="Contact Us"
  description="Reach out to discuss how KS Smart can build intelligence into your government systems."
/></div>

      
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
            
            
            <div>
              
              <p className="text-[#A855F7] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5">
                LET&apos;S TALK
              </p>

              <h2 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
                Partner With Us
              </h2>

              <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mb-10">
                Whether you're a government authority exploring intelligence
                systems, or a strategic investor looking at the future of
                governance — we'd like to hear from you.
              </p>

              
              <div className="space-y-8">

                
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-[56px] h-[56px] rounded-2xl bg-purple-100 flex items-center justify-center">
                    <MapPin className="text-[#A855F7]" size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Our Office
                    </h4>

                    <p className="text-gray-500 leading-7 text-sm sm:text-base">
                      12B, Anna Salai, Thiru Vi Ka Kudiyiruppu,
                      Teynampet, Chennai, Tamil Nadu 600018
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-[56px] h-[56px] rounded-2xl bg-purple-100 flex items-center justify-center">
                    <Phone className="text-[#A855F7]" size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Phone
                    </h4>

                    <p className="text-gray-500 text-sm sm:text-base">
                      +044 4708 5271
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-[56px] h-[56px] rounded-2xl bg-purple-100 flex items-center justify-center">
                    <Mail className="text-[#A855F7]" size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Email
                    </h4>

                    <p className="text-gray-500 text-sm sm:text-base break-all">
                      hello@kssmartsolutions.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            
            <div
              className="bg-[#F4F4F4] border border-[#D8D8D8] rounded-[28px] p-6 sm:p-8 lg:p-10"
            >
              
              <h3 className="text-2xl sm:text-2xl font-bold text-black mb-8">
                Send Us a Message
              </h3>

              
              <form className="space-y-6" onSubmit={handleSubmit}>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">

                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>

                    <input
                      name="firstName"
                      type="text"
                      placeholder="Ramya"
                      className="w-full h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#A855F7]"
                    />
                  </div>

                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>

                    <input
                      name="lastName"
                      type="text"
                      placeholder="Dhamodharan"
                      className="w-full h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#A855F7]"
                    />
                  </div>
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@organisation.gov.in"
                    className="w-full h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#A855F7]"
                  />
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisation
                  </label>

                  <input
                    name="organisation"
                    type="text"
                    placeholder="Government Department / Company Name"
                    className="w-full h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#A855F7]"
                  />
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>

                  <select
                    name="interest"
                    className="w-full h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#A855F7] text-gray-500"
                  >
                    <option>Select a platform...</option>
                    <option>AI Governance</option>
                    <option>Smart Infrastructure</option>
                    <option>Analytics</option>
                  </select>
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your infrastructure challenge or enquiry..."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none resize-none focus:border-[#A855F7]"
                  />
                </div>

                
                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-[#A855F7] text-white font-semibold text-lg hover:bg-[#9333EA] transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}