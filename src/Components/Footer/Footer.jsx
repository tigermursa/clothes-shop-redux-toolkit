import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-8 mt-96">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <h4 className="text-lg font-bold">Contact Us</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <h4 className="text-lg font-bold">Subscribe to Our Newsletter</h4>
                        <form className="flex items-center">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
