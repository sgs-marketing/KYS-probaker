export function joinPath(...paths: (string | null)[]) {
    const filterdPaths = paths.filter(
        (path) => !!path
    ) as string[]
    
    return `/${filterdPaths.join("/")}`
}