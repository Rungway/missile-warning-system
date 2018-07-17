# The Anything Warning System

Just keep adding objects in the following format to the state `data` array in `App.js` (or, you know, if you were to continue to work on this, in some sort of data file or provider) to create as many warning systems as you'd like. 🙂

```
{
  type: "Missile",
  value: '',
  error: false,
  stage: 1,
  active: {
    test: false,
    live: false
  }
}
```


## Original Instructions

### Installation

Just do `npm install` mate.

### Running

Run `npm start` from your command line to launch the development build.

### Missile Warning System

This app allows operators to notify all the residents of Rungway Island of an impending missile attack, most likely from our arch nemesis Tim Young-One. Tim is fiercely jealous of our beautiful hoodies, and he'll do anything to destroy us because hooded clothes are banned in his country. 

Sadly, this system isn't quite up-to-scratch. We've had a few instances where our operators have accidentally sent live missile warnings instead of tests because they clicked the wrong button. So, we'd like you to make a few improvements:

- Adjust the UX for triggering the warning so as to reduce the tendancy for errors
- Allow the operator to see open warnings, and to close them if they'd like

We'd also like to alert the residents of Rungway Island about other things, such as flash Nutella sales. Add a few more alerts to the system which you think might be appropriate.
