export enum SearchSite {
  MCMOD = 'mcmod',
  MC_WIKI = 'mc_wiki',
  BING = 'bing',
  GITHUB = 'github'
}

export const DefaultSearch = new Map();
DefaultSearch.set(SearchSite.MCMOD, 'https://search.mcmod.cn/s?key=$');
DefaultSearch.set(SearchSite.MC_WIKI, 'https://zh.minecraft.wiki/?search=$');
DefaultSearch.set(SearchSite.BING, 'https://cn.bing.com/search?q=$');
DefaultSearch.set(SearchSite.GITHUB, 'https://github.com/search?q=$&type=repositories');

export function getURL(input: string, type: SearchSite) {
  const url = DefaultSearch.get(type);
  return url.replace('$', input);
}

interface SelectionNote {
  value: SearchSite;
  label: string;
}

export const SiteSelection: SelectionNote[] = [
  {
    value: SearchSite.MCMOD,
    label: 'mcmod'
  },
  {
    value: SearchSite.BING,
    label: 'bing'
  },
  {
    value: SearchSite.MC_WIKI,
    label: 'mc_wiki'
  },
  {
    value: SearchSite.GITHUB,
    label: 'github'
  }
];
