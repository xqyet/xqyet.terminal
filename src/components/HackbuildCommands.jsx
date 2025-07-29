import React from 'react';

const HackbuildCommands = () => {
  const hackbuildBannerText = `
██╗  ██╗ ██████╗ ██╗   ██╗ ███████╗ ████████╗
╚██╗██╔╝██╔═████╗╚██╗ ██╔╝ ██╔════╝ ╚══██╔══╝
 ╚███╔╝ ██║██╔██║ ╚████╔╝  █████╗      ██║
 ██╔██╗ ████╔╝██║  ╚██╔╝   ██╔══╝      ██║
██╔╝ ██╗╚██████╔╝   ██║    ███████╗    ██║
╚═╝  ╚═╝     ╚═╝    ╚═╝    ╚══════╝    ╚═╝
`;

  // Hackbuild subcommands list
  const hackbuildSubcommands = [
    { cmd: "--domains", desc: " " },
    { cmd: "--registration", desc: " " },
    { cmd: "--rulebook", desc: " " },
    { cmd: "--dates", desc: " " },
    { cmd: "--prizes", desc: " " },
    { cmd: "--timeline", desc: " " },
    { cmd: "--sponsors", desc: " " }
  ];

  // Hackbuild subcommand responses
  const hackbuildResponses = {
    'info': [
    ],
    '--info': [
    ],
    '--domains': [
    ],
    '--registration': [
    ],
    '--rulebook': [
    ],
    '--dates': [
    ],
    '--prizes': [

    ],
    '--timeline': [

    ],
    '--sponsors': [

    ]
  };

  // Function to handle hackbuild commands
  const handleHackbuildCommand = (args) => {
    if (args.length === 0) {
      // Main hackbuild command without showing the banner
      return [
        <div key="hackbuild-main" className="output w-full text-[#c6d0f5] animate-fadein">
          <span key="hackbuild-title" className="font-bold text-[#f38ba8]"> </span>
          <span key="hackbuild-desc" className="text-[#fab387] block mt-2"> </span>
          <span key="hackbuild-subcmds" className="block mt-3 text-[#a6e3a1] font-semibold"> </span>
          <ul key="hackbuild-list" className="list-none pl-0 mt-2 space-y-1">
            <li className="text-[#c6d0f5] flex flex-col sm:flex-row">
              <span className="text-[#fab387] font-mono font-bold sm:w-56 flex-shrink-0"> </span>
              <span className="text-[#6c7086] sm:ml-2 mt-1 sm:mt-0">  </span>
            </li>
            {hackbuildSubcommands.map(({ cmd, desc }) => (
              <li key={cmd} className="text-[#c6d0f5] flex flex-col sm:flex-row">
                <span className="text-[#fab387] font-mono font-bold sm:w-56 flex-shrink-0">{cmd}</span>
                <span className="text-[#6c7086] sm:ml-2 mt-1 sm:mt-0"> - {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ];
    } else if (args[0] === 'info') {
      return hackbuildResponses['info'];
    } else if (args[0] === '--info') {
      return hackbuildResponses['--info'];
    } else if (hackbuildResponses[args[0]]) {
      return hackbuildResponses[args[0]];
    } else {
      return [
        <div key="unknown-cmd" className="output text-[#f38ba8] animate-fadein">
          Unknown subcommand for ' '.
          <span className="block"> .</span>
        </div>
      ];
    }
  };

  return {
    hackbuildBannerText,
    hackbuildSubcommands,
    handleHackbuildCommand
  };
};

export default HackbuildCommands;
