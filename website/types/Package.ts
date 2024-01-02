export type Package = {
    name: string,
    displayName: string,
    version: string,
    description: string,
    vpmDependencies: { [dependency: string]: string }
};