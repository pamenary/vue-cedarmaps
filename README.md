![Map.ir](http://api.cedarmaps.com/docs/img/cedarmaps-api.png)

# CedarMaps SDK for Vue

## What is CedarMaps?

CedarMaps is the location data platform for mobile and web applications. We provide [building blocks](https://www.cedarmaps.com) to add location features like maps, search, and navigation into any experience you create. Use our simple and powerful APIs & SDKs and our open source libraries for interactivity and control.

## Sign up for CedarMaps

Not a CedarMaps user yet? [Sign up for an account here](https://www.cedarmaps.com/#demo). Once you’re signed in, all you need to start building is a CedarMaps access token.

---

This guide will take you through the process of integrating CedarMaps into your Vue application.

This package is a wrapper over [Vue Mapbox](https://soal.github.io/vue-mapbox/) library.

## Table of Contents

- [Installation](#installation)

- [Use global](#use-global-component)

- [Manual import](#manual-import)

- [Rendering Component](#rendering-component)

- [Adding Markers](#adding-markers)

- [Example](#example)

## Installation

**Npm**

```
npm install vue-cedarmaps mapbox-gl --save
```

**Yarn**

```
yarn add vue-cedarmaps mapbox-gl
```

### use global component

```js
import CedarMaps from 'vue-cedarmaps'
import Vue from 'vue'
import 'mapbox-gl/dist/mapbox-gl.css'

Vue.use(CedarMaps) // this will add CedarMaps ... global components
```

### manual import

```js
import { Cedarmaps, MglMarker, MglNavigationControl, MglFullscreenControl } from 'vue-cedarmaps'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  // ...
  components: { Cedarmaps, MglMarker, MglNavigationControl, MglFullscreenControl },
  // ...
}
```

## Rendering Component

```js
<template>
  <div id="app">
    <div class="map-container">
        <Cedarmaps
          style="height: 600px"
          :center="center"
          token="token"
          :zoom="12"
        >
          <MglMarker :coordinates="marker" color="blue"/>
          <MglNavigationControl position="top-right" />
          <MglFullscreenControl />
        </Cedarmaps>
      </div>
  </div>
</template>

<script>
import { Cedarmaps, MglMarker, MglNavigationControl } from "vue-cedarmaps";
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: "app",
  components: {
    Cedarmaps,
    MglNavigationControl,
    MglMarker
  },
  data() {
    return {
      center:{ lng: '51.652878', lat: '32.60999' }
      marker: [51.652878, 32.60999]
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.map-container {
  height: 600px;
}
</style>
```

You can read more about `Vue Mapbox` in [Vue Mapbox Documentation](https://soal.github.io/vue-mapbox/)

## Example

You can consult [this example](https://codesandbox.io/s/epic-grothendieck-kfd5x?fontsize=14&hidenavigation=1&theme=dark) for getting acquainted with our package.
