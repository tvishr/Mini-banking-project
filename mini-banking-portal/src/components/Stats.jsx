export default function StatsView({ stats }) {
  // Theme-Matched Constants from the SaBank Image
  const theme = {
    accentText: "text-[#4B39EF]", // The Deep Purple from the Logo/Buttons
    cardBg: "bg-white",
    cardShadow: "shadow-[0_20px_50px_rgba(0,0,0,0.05)]", // Soft, airy shadow
    cardCorners: "rounded-[40px]", // Large, "Pill-style" corners
  };

  return (
    <div className="bg-[#F8F9FF] py-16 px-6"> {/* Light grayish-blue background to make cards pop */}
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center gap-y-3 p-10 
                ${theme.cardBg} ${theme.cardCorners} ${theme.cardShadow} 
                border border-gray-50 transition-transform hover:scale-[1.02]`}
            >
              {/* 1. Label: Soft gray, uppercase tracking to match "BillPay" header */}
              <dt className="text-xs font-bold tracking-[0.1em] text-gray-400 uppercase">
                {stat.name}
              </dt>
              
              {/* 2. Value: Bold, Purple, and Hero-sized */}
              <dd className={`${theme.accentText} text-4xl font-black tracking-tight sm:text-4xl`}>
                {stat.value}
              </dd>
              
              {/* 3. Subtle Indicator: A tiny dot or line to anchor the design */}
              <div className="mt-2 h-1.5 w-12 rounded-full bg-gray-100" />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}