const Footer: React.FC = () => {
  return (
    <div className="w-full py-8 bg-[#494949] pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="font-extrabold text-2xl md:text-4xl">MY CONTACT</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="mb-6">Banjarmasin, South Kalimantan</div>
            <div className="mb-6">muhammadridlasetiadi@gmail.com</div>
            <div className="mb-6">0895-6058-53720</div>
          </div>
          <div>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-white bg-[#494949] outline-none placeholder-white w-full py-2 px-2"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border border-white bg-[#494949] outline-none placeholder-white w-1/2 py-2 px-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border border-white bg-[#494949] outline-none placeholder-white w-1/2 py-2 px-2"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-white bg-[#494949] outline-none placeholder-white w-full py-2 px-2"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="message"
                placeholder="Type your message here..."
                className="border border-white bg-[#494949] outline-none placeholder-white w-full py-2 px-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
