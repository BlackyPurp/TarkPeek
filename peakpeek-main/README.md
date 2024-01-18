# PeakPeek
Wiki zum Nachschlagen von Unterlagen an der Hochschule Worms

![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline-status/SparxDev/peakpeek?branch=main)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=Website&up_color=blue&up_message=online&url=https%3A%2F%2Fpeakpeek.sparxdev.de)
![API](https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=API&up_color=blue&up_message=online&url=https%3A%2F%2Fwatson.byflip.dev%2Fpeakpeek)
![Made with](https://img.shields.io/badge/made%20with-coffee-brown)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


## Usage
Visit [peakpeek.sparxdev.de](https://peakpeek.sparxdev.de) to get started with searching the wiki. More info in the future.

## Roadmap
- [ ] Add data for Touristik and Wirtschaftsinformatik to [module.json](./public/module.json)
- [ ] Mobile optimization
- [ ] Think of better UX for module selection
- [ ] Loading animations for search requests etc.
- [ ] Add page that displays all entries for a single module (good for exam prep)
- [ ] Cache data from module.json for better data-usage (SearchPage.vue, AddPage.vue)
- [ ] Back-button (ContentPage.vue) is currently taking anchors into account. Expected behavior: go back to search
- [ ] Footnotes in markdown appear twice (second ones without text)
- [ ] KaTeX CSS is currently CDN hosted; self-host recommended
- [ ] Anchors don't work if page is loaded normally -> needs to wait for content to load

## Contributing
Everyone is welcome to contribute to this project. The only requirement is that it is clean code and has [no linting errors](#lints-and-fixes-files).

More info in the future.

<!-- For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.-->

<!-- ## Authors and acknowledgment
Placeholder for later. -->

## License
Mozilla Public License Version 2.0
