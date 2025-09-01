# GitHub Actions Workflows

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### CI Workflow (`.github/workflows/ci.yml`)
- Triggered on: Push and Pull Requests to main/master branches
- Runs: Code linting with ESLint
- Duration: ~2-3 minutes

### Android Build Workflow (`.github/workflows/android.yml`)
- Triggered on: Push and Pull Requests to main/master branches  
- Environment: Ubuntu latest with Node.js 18, Java 17, Android SDK
- Builds: Release APK and AAB (Android App Bundle)
- Uploads: Build artifacts for download
- Duration: ~10-15 minutes

## Build Requirements

- Node.js >= 18
- Java 17 (for Android builds)
- Android SDK API 35
- Android Build Tools 35.0.0
- Android NDK 26.1.10909125

## Artifacts

The Android build workflow produces:
- `android-release-apk` - Unsigned release APK
- `android-release-aab` - Release Android App Bundle

These can be downloaded from the GitHub Actions run page.