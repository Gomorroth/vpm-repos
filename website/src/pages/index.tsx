import { PackageInfo } from "@/PackageInfo";
import { RepositoryInfo } from "@/RepositoryInfo";
import Background from "@/components/Background";
import PackageItem from "@/components/PackageItem";
import Spacer from "@/components/Spacer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Rokkitt, Sono, Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import semverCompare from "semver-compare";
import repository from "../../public/index.json"

const rokkitt = Rokkitt({subsets: ["latin"], style: "normal", weight: "300"});
const sono = Ubuntu_Mono({subsets: ["latin"], weight: "400"});
const repositoryUrl = "https://gomorroth.github.io/vpm-repos/index.json";

export const getStaticProps = (async context => {
  return {props: { repository: repository as RepositoryInfo }};
}) satisfies GetStaticProps<{repository: RepositoryInfo}>;

export default function Home({repository}: InferGetStaticPropsType<typeof getStaticProps>) {

  var packages : (PackageInfo | undefined)[] = Object.keys(repository.packages).map(key => repository.packages[key])
  .flatMap(a => Object.keys(a.versions).map(x => a.versions[x]))
  .filter((element, index, self) => self.findIndex(x => x.name === element.name) === index);

  for(var i = packages.length - 1; i > 0; i--)
  {
     packages.splice(i, 0, undefined);
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Background className='blur-3xl'/>
      <main className="absolute flex w-full h-full flex-col sm:flex-row items-center justify-between m-0 ">
        <div className={`flex flex-col flex-shrink-0 items-center mx-8 md:mx-24 sm:text-xl ${rokkitt.className}`}>
          <h1>gomoru.su</h1>
          <p>VPM Repository</p>
          <div className="h-1 sm:h-4"/>
          <Link className="border-b-[1px] border-white/60 hover:text-blue-500 hover:border-blue-500/60 duration-300 px-4 py-1" href={`vcc://vpm/addRepo?url=${encodeURIComponent(repositoryUrl)}`}>Add to VCC</Link>
        </div>
        <div className="w-0 h-8 sm:h-full md:w-16"/>
        <div className={`flex flex-col items-center w-full h-full p-4 md:p-24 md:justify-center overflow-x-hidden overflow-y-auto ${sono.className}`}>
          {packages.map(x => x ? <PackageItem key={x.name} packageInfo={x}/> : <div key={0} className="h-4 flex-shrink-0"/>)}
        </div>
      </main>
    </div>
  )
}

