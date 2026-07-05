# Website Highlight Saver Chrome Extension

## Overview

Website Highlight Saver is a Chrome Extension that allows users to select text on any webpage and display a floating **"Save Highlight"** button near the selected text. This project was built using Chrome Extension Manifest V3.

## Features

* Detect text selection on any webpage.
* Show a floating "Save Highlight" button near the selected text.
* Chrome Extension popup UI.
* Started Chrome Storage integration for saving highlights.

## Tech Stack

* HTML
* CSS
* JavaScript
* Chrome Extension Manifest V3
* Chrome Storage API

## Project Structure

```text
website-highlight-saver/
│── manifest.json
│── content.js
│── popup.html
│── popup.js
│── popup.css
└── icon.png
```

## How to Run

1. Clone this repository.
2. Open Google Chrome.
3. Go to `chrome://extensions`.
4. Enable **Developer Mode**.
5. Click **Load unpacked**.
6. Select the project folder.
7. Open any webpage and select some text.

## Current Status

### Completed

* Chrome Extension setup
* Content script injection
* Text selection detection
* Floating Save Highlight button
* Popup UI

### In Progress

* Saving highlights using Chrome Storage API
* Displaying saved highlights in popup
* Delete highlights
* AI Summary (Optional)

## Author

**Pooja Gujwar**
