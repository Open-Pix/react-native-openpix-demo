# OpenPix React Native Integration Example

Pix Example Using the [OpenPix](https://openpix.com.br/) Platform. [OpenPix Developers](https://developers.openpix.com.br/)

Basic OpenPix React Native Integration Example

Before QRCode           |  BRCode EMV QRCode
:-------------------------:|:-------------------------:
![](img/ios1.png)  |  ![](img/ios2.png)

## Setup
Generate a [App ID](https://developers.openpix.com.br/docs/plugin/app-id) in your OpenPix Account

Create a .env file with the following data

```jsx
APP_ID=<your app id>
```

## How it works?

This code uses [@openpix/react](https://www.npmjs.com/package/@openpix/react) package to generate a new charge and check when the charge is paid

## How to run on Android

```jsx
yarn android
```

## How to run on iOS

```jsx
yarn ios
```

## How to run on Web

```jsx
yarn web
```
