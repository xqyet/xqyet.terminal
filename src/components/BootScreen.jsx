import React from 'react';

const BootScreen = ({ bootMessages, gdgBanner }) => (
    <div className={`min-h-screen bg-[#121313] text-[#708fff] font-['IBM_Plex_Mono',monospace] p-4 sm:p-6 lg:p-8 flex flex-col`}>
        <div className="flex-1 flex flex-col justify-start items-start w-full">
            <pre className={`w-full text-left text-xs sm:text-sm md:text-base leading-relaxed bg-none m-0 font-['IBM_Plex_Mono',monospace] overflow-x-auto`}>
                {bootMessages.map((line, idx) => (
                    <span
                        key={idx}
                        className={
                            idx === 0
                                ? "text-blue-300"
                                : idx === 5
                                    ? "text-pink-300"
                                    : idx === 7
                                        ? "mb-2 w-full text-left font-bold text-[0.5rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg gradient-banner select-none drop-shadow leading-[1.05] whitespace-pre-wrap"
                                        : idx === 9
                                            ? "text-[#B5BFE2]"
                                            : idx === 11
                                                ? "text-[#f2d5cf]"
                                                : "text-[#c6d0f5]"
                        }
                        style={{
                            display: "block",
                            fontWeight: idx === 7 ? 700 : 500,
                            animation: `fade 2s ${idx * 0.13 + 0.2}s both`
                        }}
                    >
                        {line}
                    </span>
                ))}
            </pre>
        </div>
        <style>{`
      @keyframes fade {
        0% { opacity: 0}
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fadeout {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      .animate-fadeout {
        animation: fadeout 0.8s ease-in 0.1s forwards;
      }
    `}</style>
    </div>
);

export default BootScreen;