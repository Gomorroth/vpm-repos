import Image from 'next/image'
import PackageList from '../../components/PackageList'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <PackageList/>
    </main>
  )
}
