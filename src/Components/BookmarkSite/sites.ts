export const SITES = new Map()
SITES.set('element-plus', 'https://element-plus.org/zh-CN/component/overview.html')
SITES.set('github', 'https://github.com/')
const api = 'https://api.iowen.cn/favicon/'

export const getICO = (site: string) => {
    return api + site + '.png'
}
