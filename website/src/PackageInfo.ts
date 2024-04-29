export type PackageInfo = {
    name: string,
    displayName?: string,
    description?: string,
    version: string,
    url?: string,
    unity?: string,
    vpmDependencies?: {[name: string]: string},
    zipSHA256?: string,
    author? : string | {
        name?: string,
        email?: string,
        url?: string
    }
};