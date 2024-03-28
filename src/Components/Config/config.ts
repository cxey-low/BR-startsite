import { readMapFromCookie, writeMapToCookie } from '../Cook/cook'
import { DefaultSearch } from '../SearchBar/search'

export interface SearchConfig {
    name: string
    url: string
}

export class Config {
    searchMap: Map<string, string>

    constructor() {
        if (!readMapFromCookie()) {
            writeMapToCookie(DefaultSearch)
        }
        this.searchMap = readMapFromCookie()
    }

    static mapToSearchConfig(map: Map<string, string>): SearchConfig[] {
        const searchConfig: SearchConfig[] = []
        for (const [name, url] of map) {
            searchConfig.push({ name, url })
        }
        return searchConfig
    }


}

