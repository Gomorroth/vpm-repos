import { PackageInfo } from "@/PackageInfo";
import Link from "next/link";

export default function PackageItem({packageInfo, onClick}: {packageInfo: PackageInfo, onClick?: () => void})
{
    return (
        <div onClick={onClick} className="max-w-4xl w-full border-[1px] border-white/20 p-4 hover:bg-white/10 bg-black/30 backdrop-blur-3xl tracking-tighter flex-shrink-0 overflow-hidden transition-colors duration-300 ease-out">
          <span className="flex flex-col md:flex-row w-full md:items-center">
            <h2 className="text-lg whitespace-nowrap">{packageInfo.displayName}</h2>
            <div className="hidden md:block mx-2 w-4 border-b-2 border-white/30 flex-shrink"/>
            <p className="whitespace-nowrap text-sm">{packageInfo.name}</p>
          </span>
          
          { packageInfo.author && <>
              <div className="mx-2 w-4 flex-shrink"/>
              <span className="flex flex-row whitespace-nowrap text-sm">
                <p className="mr-2">Author: </p>
                {
                  typeof packageInfo.author === "string" ?
                  <p>{packageInfo.author}</p> :
                  packageInfo.author.url ?
                  <Link href={packageInfo.author.url} target="_blank">{packageInfo.author.name}</Link> :
                  <p>{packageInfo.author.name}</p>
                }
              </span>
            </>}

            
            <div className="md:hidden my-2 w-full border-b-2 border-white/30 flex-shrink"/>

          <p className=" text-base line-clamp-2">{packageInfo.description}</p>
        </div>
    )
}