![Logo](https://raw.githubusercontent.com/humboldt123/sharickpen/main/logo.png)

# Sharickpen

Try out Sharick++ right in your browser; our submission for CodeFest III.

**If you do not wish to selfhost this project, you can still try it out using [this convenient link](https://sharickpen.skrub.dev)**

## Hello World
Here is a simple "Hello World" program in Sharick++
```cs
Console.WriteLine("Hello, World!")
```
You can read up more on Sharick++ by reading the docs [here](https://github.com/bmcq-0/Sharick/blob/master/README.md#sharick-syntax--api)

## Installation

### Prerequisites 

- [git](https://git-scm.com/downloads) (Optional)
- [node-js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [Sharick++](https://github.com/bmcq-0/Sharick)

You can download most of them on their respective websites on Windows and Mac, or use a Package Manager on Linux. You can view instructions to install Sharick++ [here](https://github.com/bmcq-0/Sharick/blob/master/README.md#sharick-syntax--api)

### Setup

You can download the project in two ways:
1.  `git clone` the [repository](https://github.com/humboldt123/sharickpen) 
```bash
git clone https://github.com/humboldt123/sharickpen
```

2. Alternatively you can download the [zip file](https://codeload.github.com/humboldt123/sharickpen/zip/main) and unzip it.

Next, open up your terminal of choice and head into the project directory.

```bash
cd sharickpen
```

### Dependencies with Node

Install all dependencies for node with `npm i`:
```bash
npm i
```

### Sharick++
Build Sharick++ and locate the Sharick++ executable. This file will most likely be found in `Sharick.CLI/bin/Debug/netcoreapp3.1`. For windows users it would be called `Sharick.CLI.exe` or for Linux users, simply `Sharick.CLI`. Remember the path of this file relative to the `index.js`.

### Config
Open into the `config.json` file and set `sharicklang_path` to the aforementioned path. Set `sharicklang_debug` to true if you want nerd stats displaying with when you do anything. Keep `http.port` as 80 unless you want it on a different port for some reason.

Set `https.enabled` to true if you want https and keep the `https.port` as 443 unless you want it as a different one. Also set `https.key_path` and `https.cert_path`. **Https is optional and if you are is most likely unnecessary unless you plan to host this project on your own VPS.**


## Usage
Run with `npm run run`
```bash
npm run run
```
Linux users may have to use `sudo`
```bash
sudo npm run run
```

## External Libraries
All of the code and art was made for this codefest. That being said, we utilize some external libraries.

- [`Scientifica`](https://github.com/NerdyPepper/scientifica) (Pixel art font)
- [`Ace`](https://github.com/ajaxorg/ace) (Code Editor used for syntax highlighting)
- [`Sharick++`](https://github.com/bmcq-0/Sharick); While most of Sharick++ was rewritten, it is still the same language as seen in Codefest α

## License
[MIT](https://choosealicense.com/licenses/mit/)
