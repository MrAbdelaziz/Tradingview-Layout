chartId = TradingViewApi.activeChart()._chartWidget._layoutId
clone_chartId = "__ID_PUBLIC_CHART_"

fetch("https://www.tradingview.com/deletechart/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-language": "en",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrerPolicy": "origin-when-cross-origin",
  "body": "uid%5B%5D="+chartId,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((response) => fetch("https://www.tradingview.com/charts/"+clone_chartId+"/clone/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "text/plain;charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-language": "en",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrerPolicy": "origin-when-cross-origin",
  "body": "{\"name\":\"New Chart\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((res)=> document.location ="/chart"));


