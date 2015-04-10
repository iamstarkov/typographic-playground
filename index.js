import { compose }           from 'ramda';

import ellipses              from 'typographic-ellipses';
import singleSpaces          from 'typographic-single-spaces';

import apostrophes           from 'typographic-apostrophes';
import quotes                from 'typographic-quotes';
import apostrophesForPlurals from 'typographic-apostrophes-for-possessive-plurals';

import copyright             from 'typographic-copyright';
import trademark             from 'typographic-trademark';
import registeredTrademark   from 'typographic-registered-trademark';

import endashes              from 'typographic-en-dashes';
import emdashes              from 'typographic-em-dashes';

export const typographer = compose(
  apostrophes,
  quotes,
  apostrophesForPlurals,

  endashes,
  emdashes,

  copyright,
  trademark,
  registeredTrademark,

  ellipses,
  singleSpaces
);

/**
 * Thanks to http://semver.org/ for text
 * Btw, I modified them to reflect all used modules
 */
export const sampleInput = `
In "the 'world' of software management" there exists a dread place called
"dependency hell."  The bigger your system grows and the more packages you
integrate into your software —  the more likely you are to find yourself,
one day, in this pit of despair...

'This is not a new or "revolutionary" idea'.  In fact,  you probably do something
close to this already in 1999-2014.  The problem -- that "close" isn't good enough.
Without compliance to some sort of formal specification,  version numbers
are essentially useless for dependency management.  By giving a name and
clear definition to the above ideas,  it becomes easy to communicate your
intentions to the users of your software.  Once these intentions are clear,
flexible (but not too flexible) dependency specifications' can finally be made.

This instructional goatherding video is (c) 2013 MegaCorp Inc (tm).
This instructional goatherding video is (c) 2013 MegaCorp Inc (r).
`;

export const sampleOutput = `
In “the ‘world’ of software management” there exists a dread place called
“dependency hell.” The bigger your system grows and the more packages you
integrate into your software — the more likely you are to find yourself,
one day, in this pit of despair…

“This is not a new or ‘revolutionary’ idea”. In fact, you probably do something
close to this already in 1999–2014. The problem — that “close” isn’t good enough.
Without compliance to some sort of formal specification, version numbers
are essentially useless for dependency management. By giving a name and
clear definition to the above ideas, it becomes easy to communicate your
intentions to the users of your software. Once these intentions are clear,
flexible (but not too flexible) dependency specifications’ can finally be made.

This instructional goatherding video is © 2013 MegaCorp Inc™.
This instructional goatherding video is © 2013 MegaCorp Inc ®.
`;
