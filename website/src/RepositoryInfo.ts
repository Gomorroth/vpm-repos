import { PackageInfo } from "./PackageInfo"

export type RepositoryInfo = {
    name?: string,
    author?: string | {name?: string, url?: string},
    url?: string,
    id?: string,
    packages: {
        [name: string]: {
            versions: {
                [version: string] : PackageInfo,
            }
        }
    }
}