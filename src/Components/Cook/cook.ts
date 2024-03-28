// Write a Map to cookie
export function writeMapToCookie(map: Map<string, string>): void {
    const serializedMap = JSON.stringify(Array.from(map.entries()))
    document.cookie += `map=${serializedMap}`
}

// Read a Map from cookie
export function readMapFromCookie(): Map<string, string> {
    const cookieMap = new Map<string, string>()
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('map='))
        ?.split('=')[1]

    if (cookieValue) {
        const deserializedMap = JSON.parse(cookieValue) as [string, string][]
        for (const [key, value] of deserializedMap) {
            cookieMap.set(key, value)
        }
    }

    return cookieMap
}
