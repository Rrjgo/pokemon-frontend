# Pokemons-Frontend

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Three](https://img.shields.io/badge/Three-v0.150.1-orange)

![Backend](https://img.shields.io/badge/Backend-SpringBoot-brightgreen) https://github.com/Rrjgo/pokemons

This is a sample Frontend application connects to the Java / Spring Boot / MongoDB tech demo backend.

## Table of Contents
  - [Overview](#overview)
  - [Running the Application](#running-the-application)
  - [ThreeJS](#threejs)


## Overview
The React frontend application provide a user interface for communicating with the backend API to fetch, add, and search for resources.



## Running the Application

 Install dependencies and start the dev environment:
 ```
npm install
npm run dev
 ```
- The application will be available at http://localhost:5173/.
 

## ThreeJS
This application also featured a 3D rendered Pokemon Center using ThreeJS. The view angle of the Pokemon Center will rotate as User hover left and right on the NavBar.

The rendering is done in the [Pokemon.jsx](/src/components/PokemonCenter/canvas/Pokemon.jsx). There are some key concepts around the 3D rendering:
  - Model: The `useGLTF` hook provided by `@react-three/drei` library load the 3D model and return the data that can be used in the `<primitive>` component
    -  GLTF is a standard 3D file format that supports multiple types of data that is efficient and flexible transmission and loading of 3D assets in web applications, game engines, and other 3D software.
 - Light: Lights are essential in 3D rendering. Two typed of lights are used here:
   - `<hemisphereLight>`: Used to create soft and even surrending light
   - `<pointLight>`: Used to create highlights and shadows
 - Cameras: Camera decides what perspective of the object is being viewed. The `camera` prop under `<Canvas>` component can config the camera with different setting. 




3D [Pokemon-Center](public/pokemon_center_scene) Model Source: https://sketchfab.com/3d-models/pokemon-center-scene-c497ebb33ca343a6a4cc4ab685b9235c



