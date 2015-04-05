# typographic-playground

[![Build Status][travis-image]][travis-url]

> Playground for my typographic modules

This project suppoused to be playground for testing my typography modules in real world.


## Install

```sh
git clone git@github.com:matmuchrapna/typographic-playground.git
cd typographic-playground
npm install
```


## Usage

Run `npm test` to test typographer once or `npm run tdd` to test it while you are writing new test and developing new features.

Check *index.js* for list of used typographic modules and for text samples for processing. Check *test.js* for understanding test environment.

## Real world tests

Thanks to http://semver.org/ for text sample. Btw, I modified them to reflect all used modules.

### Input

> In "the 'world' of software management" there exists a dread place called
"dependency hell."  The bigger your system grows and the more packages you
integrate into your software,  the more likely you are to find yourself,
one day, in this pit of despair...

> 'This is not a new or "revolutionary" idea'.  In fact,  you probably do something
close to this already.  The problem is that "close" isn't good enough.
Without compliance to some sort of formal specification,  version numbers
are essentially useless for dependency management.  By giving a name and
clear definition to the above ideas,  it becomes easy to communicate your
intentions to the users of your software.  Once these intentions are clear,
flexible (but not too flexible) dependency specifications' can finally be made.

### Output

> In “the ‘world’ of software management” there exists a dread place called
“dependency hell.” The bigger your system grows and the more packages you
integrate into your software, the more likely you are to find yourself,
one day, in this pit of despair…

> “This is not a new or ‘revolutionary’ idea”. In fact, you probably do something
close to this already. The problem is that “close” isn’t good enough.
Without compliance to some sort of formal specification, version numbers
are essentially useless for dependency management. By giving a name and
clear definition to the above ideas, it becomes easy to communicate your
intentions to the users of your software. Once these intentions are clear,
flexible (but not too flexible) dependency specifications’ can finally be made.


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-playground
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-playground.svg
