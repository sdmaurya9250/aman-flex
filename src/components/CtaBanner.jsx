export default function CtaBanner({ text, subtext, buttonText = "Get a Quote Now", onNavigate }) {
  return (
    <section className="bg-blue-700 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{text}</h2>
          {subtext && <p className="text-blue-200 text-sm">{subtext}</p>}
        </div>
        <button
          onClick={() => onNavigate('Contact')}
          className="bg-white text-blue-700 font-bold px-8 py-3 rounded hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap shadow-md"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
