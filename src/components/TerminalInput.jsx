import React from 'react';

const TerminalInput = ({
  inputRef,
  currentCommand,
  onInputChange,
  onKeyDown,
  currentPath
}) => (
  <div className="flex flex-wrap items-center w-full mt-2 min-w-0">
    <div className="flex items-center flex-shrink-0 mr-2 mb-1 sm:mb-0">
      <span className="text-red-400 font-bold text-sm sm:text-base">guest@xqyet.terminal</span>
      <span className="text-[#c6d0f5] ml-1">:</span>
      <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
      <span className="text-[#c6d0f5] ml-2">$</span>
    </div>
    <input
      ref={inputRef}
      type="text"
      value={currentCommand}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      className="bg-transparent border-none outline-none text-[#B5BFE2] font-['IBM_Plex_Mono',monospace] font-medium flex-1 min-w-0 text-sm sm:text-base focus:outline-[#babbf1] caret-[#f2d5cf]"
      autoComplete="off"
      spellCheck="false"
      style={{ minWidth: '120px' }}
    />
  </div>
);

export default TerminalInput;