# TTRPG Initiative Tracker
Simple turn tracking card created for running turn-based events during a table-top gaming session. It is intended to be used on a [Home Assistant](https://www.home-assistant.io/) dashboard, but it can also work as a standalone component.
<img width="1024" height="798" alt="ttrp-tracker-preview" src="https://github.com/user-attachments/assets/a27980b0-12e5-4ea3-9abd-49ac87a3a42e" />

## Features
- Add, Edit, and Delete entries in the turn order
- Sort entries by roll (highest at the top)
- Track which entry is the active turn
- forward and reverse turn progression
- Round tracking
- Quickly clear the list with the reset button
- light or dark mode can be set in the configuration

## Home Assistant Configuration
If you use this component in Home Assistant, basic settings can be changed by editing the configuration:
```yaml
type: custom:ttrpg-initiative-tracker
darkMode: true
items:
  - name: Nyssa
    roll: 20
  - name: Goruz
    roll: 15
  - name: Saphira
    roll: 5
```
1. __darkMode__ - _true_ to enable the dark mode CSS, _false_ to enable the light mode CSS. This is _true_ by default.
2. __items__ - A list of default entries that will be added when the card is rendered for the first time. this is empty by default.
   - __name__ - the name of the creature to display on the tracker
   - __roll__ - the numeric result of the initiative roll
