# holiday-box.github.io
A simple, interactive Advent Calendar that makes for a nice sentimental gift.

Basically, click on a day and see it's corresponding message

## How to run
- Fork this repository and clone it to your machine
- inside root folder
  - To install packages:
  ```bash
  npm i
  ```
  - To host locally:
  ```bash
  npm run dev
  ```

## How to customize calendar content
Locate `src\components\dayMessages.ts`

Each day's corresponding message is stored inside the `getDayMessage()` function.

`getDayMessage()` contains a switch statement where each number passed through calls the alert function for that day.

> [!NOTE]
> `case 0` is used for the About Button at the bottom of the page


## Deploying on github pages
You must change 2 files to include the new URL of your site. If you are not using a custom domain, include your repository url as the domain.

- `package.json`
	- edit the `homepage:` key to have a value of `"https://your-github-username.github.io/your-repository-name/`
- `vite.config.ts`
  - edit the `base:` key to have a value of `"/your-repository-name"`

> [!NOTE]
> Commit all changes to the main branch before Deploying
> Preview what errors may arrise with
> ```bash
> npm run predeploy
> ```
> Predeploy will compile all deployable files into the `dist` directory

> [!IMPORTANT]
> If there is a `build` directory instead of `dist` after compilation,
> change `package.json` to rerflect the `build` directory name
> ```bash
>"scripts": {
>		...
>		"deploy": "gh-pages -d build"
>	},
>```

Deploy changes using
```bash
npm run deploy
```

