import React from 'react';

const CommandHistory = ({ commandHistory, currentPath }) => (
  <>
    {commandHistory.map((entry, index) => (
      <div key={index} className="mb-2 w-full">
        <div className="flex items-center w-full">
          <span className="text-red-400 font-bold">guest@xqyet.terminal</span>
          <span className="text-[#c6d0f5] ml-1">:</span>
          <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
          <span className="text-[#c6d0f5] ml-2">$</span>
          <span className="text-[#B5BFE2] font-medium ml-2">{entry.command}</span>
        </div>
        <div className="ml-0 mt-1 w-full">
          {entry.response.map((line, lineIndex) =>
            React.isValidElement(line) ? (
              <React.Fragment key={lineIndex}>{line}</React.Fragment>
            ) : (
              <div
                key={lineIndex}
                className="output w-full max-w-[80ch] text-[#c6d0f5] animate-fadein"
              >
                {line}
              </div>
            )
          )}
        </div>
      </div>
    ))}
  </>
);

export default CommandHistory;