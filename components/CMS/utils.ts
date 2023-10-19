import { Item, Project, RegionData } from "lesscms"
import { PosibleContentTypes } from "lesscms/dist/utils/types"


export type ProjectPromise = {
    collections: Record<string, Item[]>
    project: Project
    regions: { 
        id: string;
        data: RegionData;
    }[]
}

export function findItem(collection: Item[], id?:string) {
    let item: Item | Item[] = collection

    if(id) {
        item = collection.find(item => item.id === id) as Item
    }

    if(item == undefined) throw createError({
        message: `Item with id ${id} not found, error from findItem`,
        statusCode: 404,
        fatal: true
    })

    return item
}

export function findMultipleItems(collection: Item[], ids?:string[]) {
    let item: Item | Item[] = collection

    if (ids) {
        item = collection.filter(item => ids?.includes(item.id))
    }

    if(item == undefined) throw createError({
        message: `Item with id ${ids} not found, error from findMultipleItems`,
        statusCode: 404,
        fatal: true
    })

    return item
}


type ReturnType = Record<string, PosibleContentTypes>

export async function getMuiltipleItems<O>(items: Item[], defaults:ReturnType): Promise<O[]>  {
    let content = await Promise.all(items.map(async (item) => {
        return await getDataFromItem<O>(item, defaults)
    }))

    return content
}

export async function getDataFromItem<O>(item: Item, defaults:ReturnType): Promise<O>  {
    if(item == undefined) return {} as O
    
    let data = {} as ReturnType
    
    for (const key in defaults) {
        if (key == "id") {
            data[key] = item.id
            continue
        }

        const response = await item.getContent(key, {autoFileURL: true})
        if (response == null) {
            data[key] = defaults[key]
            continue
        }

        data[key] = response
    }

    return data as O
}