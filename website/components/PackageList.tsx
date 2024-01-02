import { Repository } from "../types/Repository";

export default async function PackageList()
{
    const repo : Repository = await (await fetch("https://gomorroth.github.io/vpm-repos/index.json")).json();
    console.log(repo);
    console.log(Object.entries(repo.packages));
    return (
        <div className="flex flex-col">
            {Object.entries(repo.packages).map(x => <>{x[0]}</>)}
        </div>
    )
}

