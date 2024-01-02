import { Package } from "./Package"

export type Repository = {
    name: string,
    author: string | { name: string, url?: string, email?: string },
    id: string,
    packages:  { [name: string]: { [version: string]: Package } }
}