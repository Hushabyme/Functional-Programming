const fail = thing => {throw new Error(thing)};

const warn = thing => {console.log(['Waring:', thing].join(' '))};

const note = thing => {console.log(['Note:', thing].join(' '))};