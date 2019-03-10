# Base react native 


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
```

npm 
```
npm install react-navigation --save
npm install react-navigation-hooks --save
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
"icon": "./src/static_files/assets/icon.png",
```

```
#line slash image 
"splash":{
    "image": "./src/static_files/assets/splash.png",
```


