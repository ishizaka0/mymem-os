export default function Slide5() {
  return (
    <div className="h-full w-full flex flex-col p-16 pb-24">
      <div className="mb-12">
        <h2 className="text-3xl font-light text-gray-800">解決（Solution）</h2>
      </div>

      <div className="flex items-center justify-center gap-6 max-w-7xl w-full mx-auto flex-1">
        {/* Left side - Original human-AI interaction image */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/image.png" alt="Human and AI interaction illustration" className="w-full h-auto" />
          </div>
        </div>

        {/* Right side - TCP/IP diagram */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src="/images/tcpip.jpg" alt="TCP/IP state transition diagram" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Text content at bottom */}
      <div className="text-center space-y-3 mt-8">
        <p className="text-5xl font-bold text-[#2A6DF5] whitespace-nowrap">mymem は、思考の手順を開放する仕組み。</p>
        <p className="text-xl text-gray-800 leading-relaxed">AIとの対話を通じて、より深く考えられる道具となる。</p>
      </div>
    </div>
  )
}
