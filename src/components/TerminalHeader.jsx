import React from 'react';

const TerminalHeader = () => (
    <div className="mb-4 pb-2 bg-none flex items-center">
        <span className="text-[#d8dcff] font-bold text-sm sm:text-base md:text-lg tracking-wide break-words custom-terminal-font">
            <span className="hidden sm:inline">
                xqyet's terminal ~/
            </span>
            <span className="sm:inline">  type 'help' for commands.</span>
        </span>

    </div>
);

export default TerminalHeader;
