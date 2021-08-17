import  chromium from "chrome-aws-lambda";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
};

const exePath = chromeExecPaths[process.platform];

export async function getOptions(isDev) {
  const executablePath = await chromium.executablePath

  if (!executablePath) {
		// running locally
		const puppeteer = require('puppeteer')
		return puppeteer.launch({
			args: chromium.args,
			headless: true,
			defaultViewport: {
				width: 1280,
				height: 720
			},
			ignoreHTTPSErrors: true
		})
	}

	return chromium.puppeteer.launch({
		args: chromium.args,
		defaultViewport: {
			width: 1280,
			height: 720
		},
		executablePath,
		headless: chromium.headless,
		ignoreHTTPSErrors: true
	})

  // let options;

  // // let options = {
  // //     args: chrome.args,
  // //     executablePath: await chrome.executablePath,
  // //     headless: chrome.headless
  // // };

  // // return options;

  // if (isDev) {
  //   options = {
  //     args: [],
  //     executablePath: exePath,
  //     headless: true
  //   };
  // } else {
  //   options = {
  //     args: chrome.args,
  //     executablePath: await chrome.executablePath,
  //     headless: chrome.headless
  //   };
  // }

  // return options;
}
