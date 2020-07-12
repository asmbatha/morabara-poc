export function ksort(obj) {
    let keys = Object.keys(obj).sort(), sortedObj = {}

    for (let i in keys) {
        sortedObj[keys[i]] = obj[keys[i]]
    }

    return sortedObj
}

export function inArray(needle, haystack) {
    let length = haystack.length
    for(let i = 0; i < length; i++) {
        if (haystack[i] === needle) return true
    }
    return false
}

export function random(arr) {
    let randIndex = Math.floor(Math.random() * (arr.length - 1))
    return arr[randIndex]
}

export function basename(str) {
    let strArray = str.split('/')
    return strArray[strArray.length - 1]
}

export function isRobot() {
    let botPattern = '(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)'
    let re = new RegExp(botPattern, 'i')
    let userAgent = navigator.userAgent
    return re.test(userAgent)
}
export function debounce (fn, delay) {
    let timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        let args = arguments
        let that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}

export function throttled(fn, delay) {
    let lastCall = 0;
    return function () {
        let that = this
        let args = arguments
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now

        return fn.apply(that, args)
    }
}

export function safeGet(keys, baseForm, index = 0, currentObj = []) {
    let currentValue = currentObj[keys[index]]
    if (!index) {
        currentValue = keys[index]
    }

    if (typeof currentValue === undefined) return baseForm

    if (index + 1 >= keys.length) return currentValue
    
    return safeGet(keys, baseForm, index + 1, currentValue)
}
