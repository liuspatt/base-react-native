# Base react native 
Todo 
- add redux model
- add hooks model ( wating release 0.59)


# Setup 
- Format os ( new os is good )
- Install android studio 
    - You can have sdk folder for only download the installer 
        - Portable android studio have a lot of issues
        - For windows check intel virtualization
- Xcode ( just install )    
- Install node
- Install ( expo )
```
npm install -g expo-cli
```
## init your app 
```
expo init MyNewApp
```
Select blank option

## Set basic libs 
Yarn 
```
yarn add react-navigation
yarn add react-navigation-hooks
yarn add react-native-elements
```

npm 
```
npm i -s react-navigation 
npm i -s react-navigation-hooks
npm i -s react-native-elements

```

## Set base 
```
rm -r assets
rm App.js
git clone https://github.com/liuspatt/base-react-native ./_base
cp -R ./_base/src/* ./

```
Change app.json
```
#line icon
"icon": "./src/static_files/assets_app/icon.png",
```

```
#line slash image 
"splash":{
    "image": "./src/static_files/assets_app/splash.png",
```


