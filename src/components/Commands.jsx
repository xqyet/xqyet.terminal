import React from 'react';

const Commands = () => {
  const availableCommands = {
    'help': 'Show available commands',
    'id xqyet': 'About XQYET',
    'boot system': 'The xqyet.dev virtual machine',
    'curl discord.xqyet': 'The redacted.bio dev page',
    'fetch socials': 'my links',
    'clear': 'Clear terminal',
    'whoami': 'Current user info',
    'date': 'Show current date',
    'cat resources': 'catalogue of notes I use',
    'init music.library': 'some music I listen to',
  };

  const resourceCommands = {
    'gitsheet basic': {
      description: 'git cheat sheet - basic Git commands',
      url: 'https://education.github.com/git-cheat-sheet-education.pdf',
      info: 'Quick reference for Git version control commands'
      },
      'gitsheet edge': {
          description: 'better Git cheat sheet - edge cases',
          url: 'https://gist.github.com/cferdinandi/ef665330286fd5d7127d',
          info: 'Quick reference for Git version control commands'
      },
      'gitsheet meta': {
          description: 'my go-to Git cheat sheet',
          url: 'https://www.geeksforgeeks.org/git/git-cheat-sheet/',
          info: 'Quick reference for Git version control commands'
      },
    'jsguide': {
      description: 'javaScript resources to study',
      url: 'https://www.w3schools.com/js/',
      info: 'Comprehensive JavaScript tutorial by W3Schools'
    },
    'reactdocs': {
      description: 'react resource to study',
      url: 'https://www.w3schools.com/react/default.asp',
      info: 'Easy for beginners to learn React with examples'
    },
    'pythonref': {
      description: 'python reference guide',
      url: 'https://docs.python.org/3/tutorial/',
      info: 'Official Python tutorial and documentation'
    },
    'cssguide': {
      description: 'CSS complete guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      info: 'Complete CSS documentation and tutorials'
    },
    'htmlref': {
      description: 'HTML reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      info: 'HTML elements and attributes reference'
    },
    'algorithms': {
      description: 'data structures and algorithms',
      url: 'https://www.programiz.com/dsa',
      info: 'Comprehensive guide to DSA concepts'
    },
    'apidesign': {
      description: 'REST API design guide',
      url: 'https://restfulapi.net/',
      info: 'Best practices for designing REST APIs'
    },
    'dockerguide': {
      description: 'Docker containerization guide',
      url: 'https://docs.docker.com/get-started/',
      info: 'Learn containerization with Docker from basics'
    },
    'flutterdev': {
      description: 'Flutter app development',
      url: 'https://docs.flutter.dev/get-started/install',
      info: 'Cross-platform mobile app development with Flutter'
    },
    'cppref': {
      description: 'C++ programming reference',
      url: 'https://www.geeksforgeeks.org/cpp/cpp-tutorial/',
      info: 'Complete C++ programming tutorial and reference'
    },
    'cpalgos': {
      description: 'competitive programming algorithms',
      url: 'https://cp-algorithms.com/navigation.html',
      info: 'These are some competitive programming algorithms that will help you in your journey',
    },
    'computernetworks': {
      description: 'computer Networks fundamentals',
      url: 'https://www.geeksforgeeks.org/computer-network-tutorials/',
      info: 'Complete guide to networking concepts and protocols'
    },
    'dbms': {
      description: 'database Management Systems',
      url: 'https://drive.google.com/file/d/1LOnuwOCraDs69DVJOt7Bq0LxcWxGFXL_/view?usp=sharing',
      info: 'Quick resource to learn DBMS concepts'
    },
    'oops': {
      description: 'Object Oriented Programming',
      url: 'https://drive.google.com/file/d/1UaADlGwNFm4si3OmL0Jym7Si4ch8cCbR/view?usp=sharing',
      info: 'OOP concepts with practical examples'
    },
    'operatingsystems': {
      description: 'Operating Systems concepts',
      url: 'https://www.geeksforgeeks.org/operating-systems/',
      info: 'OS fundamentals including processes, memory, and scheduling'
    },
    'pgbooks': {
      description: 'some programming books',
      url: 'https://books.goalkicker.com/',
      info: 'For book nerds, this is a resource to some programming books'
    },
  };

  const socialsList = [
    {
      name: 'Website',
      className: 'website',
          url: 'https://xqyet.dev/',
      label: 'Twitter: @gdgvit'
    },
    {
      name: 'GitHub',
      className: 'github',
        url: 'https://github.com/xqyet',
      label: 'GitHub: /xqyet'
      },
      {
          name: 'Telegram',
          className: 'telegram',
          url: 'https://redacted.bio/xqyet',
          label: 'Telegram: /NC_CORPO'
      },
      {
          name: 'Steam',
          className: 'steam',
          url: 'https://steamcommunity.com/id/xqyet/', 
              label: 'Steam: /xqyet'
      },
  ];

  const commandResponses = {
    'id xqyet': [
      'I am a developer.',
     
    ],
      'boot system': [
          'Booting XQYET virtual system...',
          'Launching web interface...',
          '[✅ Opening https://xqyet.dev in new tab]'
      ],
    'curl discord.xqyet': [
          'Launching web interface...',
          '[✅ Opening https://redacted.bio/xqyet in new tab]'
      ],
    'fetch socials': [
      <div key="gdg-socials-list" className="output w-full text-[#c6d0f5] animate-fadein">
            
        <ul className="links list-none pl-0 mt-2 mb-2">
          {socialsList.map((social, idx) => (
            <li key={social.name} className="mb-1 text-[#c6d0f5] font-medium">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#f38ba8] transition-colors break-all"
                style={{ color: '#c6d0f5', fontWeight: 500 }}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ],
    'whoami': ['You should know who you are.'],
    'cat resources': [
      <div key="resources-list" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="mt-3 mb-3">
          <div className="text-[#c6d0f5] mb-3">catalogue of notes, guides, pdf's, etc</div>
          <ul className="list-none pl-0 mt-2 space-y-1">
            {Object.entries(resourceCommands).map(([command, resource]) => (
              <li key={command} className="text-[#c6d0f5] flex flex-col sm:flex-row">
                <span className="text-[#a6e3a1] font-mono font-normal sm:w-36 lg:w-40 flex-shrink-0">{command}</span>
                <span className="text-[#6c7086] sm:ml-2 mt-1 sm:mt-0"> - {resource.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ],
    'date': ['' + new Date().toString(), '(Maybe you should go to one too)'],
      'npm uninstall xqyet': [
          <div
              key="guestbook-video"
              className="mt-2 w-[200px] h-auto"
          >
              <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  playsInline
                  className="pointer-events-none m-0 p-0"
                  style={{ outline: 'none', border: 'none' }}
              >
                  <source src="/try.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
      ],



  };

  const hackbuildBanner = `
██╗  ██╗  █████╗   ██████╗ ██╗  ██╗ ██████╗  ██╗   ██╗ ██╗ ██╗      ██████╗ 
██║  ██║ ██╔══██╗ ██╔════╝ ██║ ██╔╝ ██╔══██╗ ██║   ██║ ██║ ██║      ██╔══██╗
███████║ ███████║ ██║      █████╔╝  ██████╔╝ ██║   ██║ ██║ ██║      ██║  ██║
██╔══██║ ██╔══██║ ██║      ██╔═██╗  ██╔══██╗ ██║   ██║ ██║ ██║      ██║  ██║
██║  ██║ ██║  ██║ ╚██████╗ ██║  ██╗ ██████╔╝ ╚██████╔╝ ██║ ███████╗ ██████╔╝
╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═════╝  ╚═╝ ╚══════╝ ╚═════╝ 
`;

  const hackbuildSubcommands = [
    { cmd: 'gdg hackbuild --domains', desc: 'Show Hackbuild domains' },
    { cmd: 'gdg hackbuild --registration', desc: 'Register for Hackbuild' },
    { cmd: 'gdg hackbuild --rulebook', desc: 'View Hackbuild rulebook' },
    { cmd: 'gdg hackbuild --dates', desc: 'Show Hackbuild dates' },
    { cmd: 'gdg hackbuild --prizes', desc: 'Show Hackbuild prizes' },
    { cmd: 'gdg hackbuild --timeline', desc: 'Show Hackbuild timeline' },
    { cmd: 'gdg hackbuild --sponsors', desc: 'Show Hackbuild sponsors' },
  ];

  return {
    availableCommands,
    resourceCommands,
    socialsList,
    commandResponses,
    hackbuildBanner,
    hackbuildSubcommands,
  };
};

export default Commands;