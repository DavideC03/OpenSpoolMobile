# OpenSpoolMobile

[![Discord](https://img.shields.io/discord/1298381115706576907?logo=discord)](https://discord.gg/4EaXHu9CEj) [![Reddit](https://img.shields.io/badge/reddit-join-orange?logo=reddit)](https://www.reddit.com/r/openspool)  


Companion app for the OpenSpool Project https://github.com/spuder/OpenSpool

---

## Android: https://play.google.com/store/apps/details?id=io.openspool&utm_source=na_Med

## iOS: https://apps.apple.com/us/app/openspool/id6740551901


---

## Usage

Reads/Writes NFC tags for 3d printer filament. 

![](./images/Screenshot%202025-01-03%20at%2020.57.15.png)

![](./images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-14%20at%2022.13.24.png)

![](./images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-14%20at%2022.14.44.png)

![](./images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-14%20at%2022.13.50.png)

![](./images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-14%20at%2022.13.31.png)

# Development

## GitHub Actions CI/CD

This repository includes automated workflows:

- **CI**: Runs on every push and PR to lint the code
- **Android Build**: Builds Android APK and AAB artifacts on every push and PR

The Android build workflow:
- Sets up Node.js 18, Java 17, and Android SDK
- Installs dependencies and runs linting
- Builds both release APK and AAB (Android App Bundle)
- Uploads build artifacts for download

## Releasing

```
Change version number in android/app/build.gradle
make android
```

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/openspool)
