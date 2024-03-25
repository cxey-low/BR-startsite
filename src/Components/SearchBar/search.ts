export const DefaultSearch = new Map()
DefaultSearch.set('mcmod', 'https://search.mcmod.cn/s?key=$')
DefaultSearch.set('mc_wiki', 'https://zh.minecraft.wiki/?search=$')
DefaultSearch.set('bing', 'https://cn.bing.com/search?q=$')
DefaultSearch.set('github', 'https://github.com/search?q=$&type=repositories')

export function getURL(input: string, type: String) {
    const url = DefaultSearch.get(type)
    return url.replace('$', input)
}

interface SelectionNote {
    value: string
    label: string
}

export const SiteSelection: SelectionNote[] = [
    {
        value: 'mcmod',
        label: 'mcmod'
    },
    {
        value: 'bing',
        label: 'bing'
    },
    {
        value: 'mc_wiki',
        label: 'mc_wiki'
    },
    {
        value: 'github',
        label: 'github'
    }
]
