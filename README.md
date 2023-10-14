# Spotify Embed React

[NPM](https://www.npmjs.com/package/spotify-embed-react) 

[Currently not working in nextjs]
Use this component to create a Spotify embed for a given Spotify link. In
Spotify, click ••• > Copy Link, and paste it in the `<Spotify url={...}>` prop.

Any link should work (albums, songs, playlist, podcast episode etc.).

**alternateTheme: will display the alternate theme (specify true) as given in the example below**
**height: you can specify height as a string | compact(152) as given in the example below**
**width: you can specify width as a string | wide(100%) | compact(40%) as given in the example below**
**borderRadius: you can specify border radius as a string(eg. 20px)**

```tsx
import {Spotify} from 'spotify-embed-react';
// Displaying a playlist.
<Spotify url={"https://open.spotify.com/playlist/4bnhYSeIKgBlCVLtUbafYQ"} alternateTheme='true' height="520" width="1000px | wide | compact"  key={""} />

// Displaying an album.
<Spotify url="https://open.spotify.com/album/1xa8z4YzzzSY9cewekGxPa?si=zllAa75zRfudB_4PjNLeKA" />

```

**Demo: Normal playlist/song/album link, and with alternate theme**

<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot1.png">
<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot2.png">
<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot3.png">
<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot4.png">
<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot5.png">
<img width="400px" height="auto" src="https://github.com/krutk/spotify-embed/raw/master/public/Screenshot6.png">

### Example

This repository itself is a Next project demonstrating the use of this
component.