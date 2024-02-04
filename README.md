# uRun - Bypass bookmarklet restrictions with an adblocker
## Why
Recently Google, cracked down on bookmarklets and now they don't work (Its based on the [DeveloperToolsAvailability](https://chromeenterprise.google/policies/?policy=DeveloperToolsAvailability) policy). I wanted to run scripts still so I started making this, inspired by [3kh0/Ext-Remover's uBlock exploit](https://github.com/3kh0/Ext-Remover?tab=readme-ov-file#ublock-run-run-code-on-pages), but with more features, like saving scripts.
## Installation
1. Open uBlock settings
2. Enable advanced settings, and click the gear ⚙️ button
> ![image](https://github.com/Inglan2/uRun/assets/117789688/e7d21961-4d76-45a8-afe1-f97479763928)

> [!CAUTION]
> DO MODIFY ANYTHING ELSE ON THIS PAGE, UNLESS YOU KNOW WHAT YOU ARE DOING (you probably don't), AS YOU COULD BREAK SOMETHING.

> [!TIP]
> If you mess up, go to the home of settings and at the bottom click reset to default settings

3. Add the script
> Change
> ```
> userResourcesLocation unset
> ```
> to
> ```
> userResourcesLocation https://inglan2.github.io/uRun/urun.js
> ```

> [!TIP]
> It's down the bottom
4. Set a filter to load uRun
> After closing the advanced settings tab, go to the filters tab and add this:
> ```
> *##+js(urun.js)
> ```

## Usage
Simply press Ctrl + Shift + \` to open the menu and from there you can run and create scripts. To add a script, press the ➕ button up the top right, and enter the code you would like to add (without the `javascript:` part).

## My favourite bookmarklets
Edit Page:
```
document.designMode=(document.designMode=="on"?%22off%22:%22on%22);void%200;
```
What is this site built with (Wappalyzer):
```
window.open('https://wappalyzer.com/lookup/'+location.host, '', "width=500,height=600")
```
WebXRay Goggles (Page Editor):
```
(function(){var a=document.createElement("script");a.src="https://x-ray-goggles.mouse.org/webxray.js";a.className="webxray";a.setAttribute("data-lang","en-US");a.setAttribute("data-baseuri","https://x-ray-goggles.mouse.org");document.body.appendChild(a);}());
```
Wayback Machine (Archive.org):
```
location.href='https://web.archive.org/web/*/'+location.href
```
Cookie Editor:
```
(function()%7Bvar%20scriptTag%20%3D%20document.createElement('script')%3BscriptTag.setAttribute('src'%2C%20'https%3A%2F%2Frawgit.com%2Fvbachevhx%2Fcookie-bookmarklet%2Fmaster%2Fdist%2Fcookie_bookmarklet.js')%3Bdocument.body.appendChild(scriptTag)%3B%7D)()
```
Youtube Unblock:
```
(function () {if (window.location.toString().includes('www.youtube.com/watch?v%27))%20{%20window.open(%27https://www.youtube-nocookie.com/embed/%27%20+%20window.location.toString().split(%27=%27)[1])%20}})()
```
Resize:
```
void((function(d){if(self!=top||d.getElementById('toolbar')&&d.getElementById('toolbar').getAttribute('data-resizer'))return false;d.write('<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/></head><body><a data-viewport="320x480" data-icon="mobile">Mobile (e.g. Apple iPhone)</a><a data-viewport="320x568" data-icon="mobile" data-version="5">Apple iPhone 5</a><a data-viewport="375%C3%97667" data-icon="mobile" data-version="7">Apple iPhone 7</a><a data-viewport="414%C3%97736" data-icon="mobile" data-version="7+">Apple iPhone 7 Plus</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">Tablet (e.g. Apple iPad 2-3rd, mini)</a><a data-viewport="1280x800" data-icon="notebook">Widescreen</a><a data-viewport="1920%C3%971080" data-icon="tv">HDTV 1080p</a><script src="https://lab.maltewassermann.com/viewport-resizer/resizer.min.js"></script></body></html>')})(document));
```
Disable Tab Close:
```
(function () {window.onbeforeunload = function() { return 1; };})()
```
Share to classroom:
```
window.open(`https://classroom.google.com/share?url=${location}`,%20%22classroom%22,%20%22width=300,height=300%22)
```
[INGOT](https://github.com/3kh0/ext-remover?tab=readme-ov-file#ingot):
```
(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())
```