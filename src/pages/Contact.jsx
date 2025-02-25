export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Contact Me</h1>
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700">Or reach out directly:</p>
          <p className="text-gray-700">Email: <a href="mailto:catch.ayodhya@gmail.com" className="text-blue-600 hover:underline">catch.ayodhya@gmail.com</a></p>
          <p className="text-gray-700">Phone: +94 70 3366939</p>
        </div>
      </div>
    );
  }