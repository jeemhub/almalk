import Head from 'next/head'

export default function SupportPage() {
  return (
    <div>
      <Head>
        <title>Support - My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900 text-center">Support</h1>
          </div>
          <div className="max-w-md mx-auto my-2 bg-primary-yellow p-6 rounded-lg sm:px-8 lg:max-w-2xl">
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2 text-sm sm:text-base"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2 text-sm sm:text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2 text-sm sm:text-base"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                id="message"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <button
              className="bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline text-sm sm:text-base"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
