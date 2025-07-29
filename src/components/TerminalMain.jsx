import TerminalHeader from './TerminalHeader';
import TerminalBanner from './TerminalBanner';
import CommandHistory from './CommandHistory';
import TerminalInput from './TerminalInput';

const TerminalMain = ({
  terminalRef,
  inputRef,
  hackbuildBanner,
  commandHistory,
  currentPath,
  currentCommand,
  handleInputChange,
  handleKeyDown,
}) => (
  <div className="min-h-screen w-full bg-[#121313] text-[#c6d0f5] font-['IBM_Plex_Mono',monospace] p-4 sm:p-6 lg:p-8 flex flex-col items-start animate-fadein-terminal">
    <div
      ref={terminalRef}
      className="flex-1 overflow-y-auto w-full bg-none"
      style={{ maxWidth: '100%' }}
    >
      <TerminalHeader />
      <TerminalBanner banner={hackbuildBanner} className="gradient-banner" />
      <CommandHistory commandHistory={commandHistory} currentPath={currentPath} />
      <TerminalInput
        inputRef={inputRef}
        currentCommand={currentCommand}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        currentPath={currentPath}
      />
    </div>
  </div>
);

export default TerminalMain;