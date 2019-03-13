# Base react native 
Base app for init new proyects or testing functions. 

- React Navigation ( ok )
- Hooks only for react-native ( no expo ) ( testing )
- Apisauce ( ok )
# Setup Base
- Format os ( new os is good )
- Install android studio 
    - You can have sdk folder for only download the installer 
        - Portable android studio have a lot of issues
        - For windows check intel virtualization
- Xcode ( just install )    
- Install node
- Install python2
- Install jdk8 
- Install ( expo )

# Setup react native
React native compile directly to phones.
## Init your app
react-native init MyNewApp
## Set libs of demo 
Instal libs
```
npm i --save apisauce
npm i --save react-native-elements
npm i --save react-native-gesture-handler
npm i --save react-native-vector-icons
npm i --save react-navigation
npm i --save react-navigation-transitions

```

Link native reqs
```
react-native link react-native-gesture-handler
react-native link react-native-vector-icons
```

# Setup expo 
Expo help with link libs and deploy.
```
npm install -g expo-cli
```
## Init your app 
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
npm i --save react-navigation 
npm i --save react-navigation-hooks
npm i --save react-native-elements
npm i --save react-navigation-transitions

```


# Set base 
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


