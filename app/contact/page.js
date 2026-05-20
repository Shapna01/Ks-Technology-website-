"use client";

import { useState } from "react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PageHero from "../components/common/PageHero";

import {
  MapPin,
  Phone,
  Mail,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const [popupData, setPopupData] = useState({
    type: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    interest: "",
    message: "",
  });

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = "Organisation is required";
    }

    if (
      !formData.interest ||
      formData.interest === "Select a platform..."
    ) {
      newErrors.interest = "Please select an area of interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setPopupData({
        type: "error",
        title: "Incomplete ",
        message: "Please fill all mandatory fields correctly.",
      });

      setShowPopup(true);
      return;
    }

    console.log("Contact Form Data:", formData);

    setPopupData({
      type: "success",
      title: "We’ll Be in Touch Soon",
      message:
        "Thank you for contacting KS Smart. Our team will reach out to you shortly.",
    });

    setShowPopup(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      interest: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <main className="w-full bg-white overflow-hidden">
      <Navbar />

      <PageHero
        badge="— GET IN TOUCH"
        title="Contact Us"
        description="Reach out to discuss how KS Smart can build intelligence into your government systems."
      />

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-[28px] bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            
            <div
              className={`h-2 w-full ${
                popupData.type === "success"
                  ? "bg-purple-500"
                  : "bg-purple-500"
              }`}
            />

            <div className="p-8 relative">
              
              <button
                onClick={() => setShowPopup(false)}
                className="absolute right-5 top-5 text-gray-400 hover:text-black transition"
              >
                <X size={20} />
              </button>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  popupData.type === "success"
                    ? "bg-purple-100"
                    : "bg-purple-100"
                }`}
              > 
                {popupData.type === "success" ? (
                  <CheckCircle2
                    className="text-purple-600"
                    size={34}
                  />
                ) : (
                  <AlertCircle
                    className="text-purple-600"
                    size={34}
                  />
                )}
              </div>

              <h3 className="text-2xl font-bold text-black mb-3">
                {popupData.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {popupData.message}
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className={`mt-8 w-full h-12 rounded-full text-white font-semibold transition ${
                  popupData.type === "success"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">

            <div>

              <p className="text-[#A855F7] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5">
                LET&apos;S TALK
              </p>

              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
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

            <div className="bg-[#F4F4F4] border border-[#D8D8D8] rounded-[28px] p-6 sm:p-8 lg:p-10">

              <h3 className="text-2xl sm:text-2xl font-bold text-black mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>

                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Ramya"
                      className={`w-full h-14 rounded-xl border bg-white px-4 outline-none ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#A855F7]"
                      }`}
                    />

                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>

                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Dhamodharan"
                      className={`w-full h-14 rounded-xl border bg-white px-4 outline-none ${
                        errors.lastName
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#A855F7]"
                      }`}
                    />

                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organisation.gov.in"
                    className={`w-full h-14 rounded-xl border bg-white px-4 outline-none ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#A855F7]"
                    }`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisation *
                  </label>

                  <input
                    name="organisation"
                    type="text"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Government Department / Company Name"
                    className={`w-full h-14 rounded-xl border bg-white px-4 outline-none ${
                      errors.organisation
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#A855F7]"
                    }`}
                  />

                  {errors.organisation && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.organisation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>

                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full h-14 rounded-xl border bg-white px-4 outline-none ${
                      errors.interest
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#A855F7]"
                    }`}
                  >
                    <option value="">Select a platform...</option>
                    <option>AI Governance</option>
                    <option>Smart Infrastructure</option>
                    <option>Analytics</option>
                  </select>

                  {errors.interest && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.interest}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your infrastructure challenge or enquiry..."
                    className={`w-full rounded-xl border bg-white px-4 py-4 outline-none resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#A855F7]"
                    }`}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
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