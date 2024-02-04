# uRun - Bypass bookmarklet restrictions with and adblocker
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
