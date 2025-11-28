export default function RequestACall() {
  return (
    <section id="home" className="w-full bg-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold leading-tight style_header_left_title_1__GZZNu">
            INDEPENDENT <br />
            <span className="text-blue-600">DISPATCHING SERVICES</span> FOR <br />
            <span className="style_header_left_title_4__o24vT">OWNER OPERATORS</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-md style_header_left_description__e3MAu">
            Get access to thousands of contract free loads suitable to your truck type.
          </p>

          <button className="mt-8 w-[200px] bg-blue-600 text-white py-3 px-6 rounded-sm font-medium hover:bg-blue-700">
            Request a Callback
          </button>
        </div>

        {/* Right Video */}
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aJJh0rTsWr8" 
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md w-full max-w-xl"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
