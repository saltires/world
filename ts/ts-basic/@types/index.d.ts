declare module "*!text" {
    const content: string;
    export default content;
}

declare module "*.vue"

interface Hi {
    name: string;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}