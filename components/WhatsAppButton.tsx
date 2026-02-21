"use client";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917012003092?text=Hi%20Hygia!%20I%27m%20interested%20in%20your%20cleaning%20services.%20Could%20you%20please%20share%20more%20details%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110">
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.773L0 32l8.469-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.773-1.853l-.485-.288-5.027 1.191 1.216-4.896-.317-.503A13.265 13.265 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.261-9.984c-.397-.199-2.352-1.16-2.717-1.293-.365-.133-.631-.199-.896.199-.265.397-1.029 1.293-1.261 1.558-.232.265-.465.299-.862.1-.397-.199-1.676-.618-3.194-1.972-1.18-1.053-1.977-2.352-2.208-2.749-.232-.397-.025-.611.174-.809.179-.178.397-.465.596-.698.199-.232.265-.397.397-.662.133-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.956-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.397-1.393 1.361-1.393 3.32s1.427 3.852 1.626 4.117c.199.265 2.808 4.284 6.802 6.009.951.41 1.693.655 2.271.839.954.303 1.823.26 2.509.158.765-.114 2.352-.961 2.683-1.889.332-.928.332-1.724.232-1.889-.099-.165-.365-.265-.762-.464z" />
          </svg>
        </div>
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us
        </span>
      </div>
    </a>
  );
};
