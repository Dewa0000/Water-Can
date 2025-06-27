import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Components/Navbar'; // Import the Navbar from previous response
import Footer from '../Components/Footer'; // Import the Footer from previous response

function ContactPage() {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add API call or other submission logic here
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">

                {/* Main Content */}
                <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Contact Us Heading */}
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Contact Us
                            </p>
                        </div>
                        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our team is dedicated to providing excellent customer
                            service and ensuring your satisfaction.
                        </p>

                        {/* Contact Information */}
                        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Contact Information
                        </h3>
                        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                            {[
                                { label: 'Phone', value: '+91-987-654-3210' },
                                { label: 'Email', value: 'support@aquaswift.in' },
                                { label: 'Address', value: '123, Water Street, Mumbai, Maharashtra, India' },
                            ].map((item, index) => (
                                <div key={index} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe1e6] py-5">
                                    <p className="text-[#617989] text-sm font-normal leading-normal">{item.label}</p>
                                    <p className="text-[#111518] text-sm font-normal leading-normal">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Contact Form
                        </h3>
                        <form onSubmit={handleSubmit}>
                            {[
                                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
                                { label: 'Email', name: 'email', type: 'email', placeholder: 'Your Email' },
                                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Your Phone Number' },
                            ].map((field, index) => (
                                <div key={index} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-[#111518] text-base font-medium leading-normal pb-2">{field.label}</p>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleInputChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#617989] p-4 text-base font-normal leading-normal"
                                            required
                                        />
                                    </label>
                                </div>
                            ))}
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#111518] text-base font-medium leading-normal pb-2">Message</p>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none min-h-36 placeholder:text-[#617989] p-4 text-base font-normal leading-normal"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="flex px-4 py-3 justify-start">
                                <button
                                    type="submit"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1292e7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                                >
                                    <span className="truncate">Submit</span>
                                </button>
                            </div>
                        </form>

                        {/* Our Location */}
                        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Our Location
                        </h3>
                        <div className="flex px-4 py-3">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-2JXA0V-FScvNQ7JZmTEpRJsBeIFv2QFZA4rq6VLZ1PVof51_cBDeZhFeMcT0jMAQGzyOhiK6TnhJOvDK3YqfqjiO4ssuEgCrHgp-d0tq4mY2PTEPdoYda_XOcnLH6AyO0Ncg6Uq42bnDUY3Unyqmn9dDUN5YBZIhZZLSFA-27RGk8KW2xrFHB7-bO24F39ZHBN7bN0cUjBFhkdMehvCAYZP0S0A7xEXwIZytDpdTL6JW0Li-mr3HpiCOAJbHcWga5ZhufAkIZ8o")',
                                }}
                            />
                        </div>

                        {/* Customer Service Hours */}
                        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Customer Service Hours
                        </h3>
                        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Our customer service team is available Monday to Saturday, from 9 AM to 6 PM. We aim to respond to all inquiries within 24 hours.
                        </p>

                        {/* Follow Us */}
                        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Follow Us
                        </h3>
                        <div className="@container">
                            <div className="gap-2 px-4 flex flex-wrap justify-start">
                                {[
                                    {
                                        name: 'Instagram',
                                        icon: <FaInstagram size={20} />,
                                        href: 'https://www.instagram.com/yourusername',
                                    },
                                    {
                                        name: 'WhatsApp',
                                        icon: <FaWhatsapp size={20} />,
                                        href: 'https://wa.me/91XXXXXXXXXX', // Replace with real WhatsApp number
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20 hover:bg-[#f0f3f4]"
                                        aria-label={`${social.name} link`}
                                    >
                                        <div className="rounded-full bg-[#f0f3f4] p-2.5">{social.icon}</div>
                                        <p className="text-[#111518] text-sm font-medium leading-normal">{social.name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ContactPage;