import ConnectionHighlights from './components/ConnectionHighlights'
import IntroCard from './components/IntroCard'
import PrivacyCard from './components/PrivacyCard'
import RelationshipLegend from './components/RelationshipLegend'
import SocialGraph from './SocialGraph'

export default function App() {
  return (
    <main className="relative mx-auto min-h-[1668px] w-[1108px] overflow-hidden bg-white max-[800px]:flex max-[800px]:min-h-screen max-[800px]:w-full max-[800px]:flex-col max-[800px]:overflow-hidden max-[800px]:px-[18px] max-[800px]:py-[30px]">
      <header className="absolute left-0 top-[37px] w-full text-center max-[800px]:relative max-[800px]:inset-auto max-[800px]:order-1">
        <h1 className="m-0 text-[58px] font-normal leading-[1.1] tracking-[-2.2px] max-[520px]:text-[40px]">Family Social Graph</h1>
        <p className="mt-6 text-xl text-[#8b8b8b] max-[800px]:mt-[15px] max-[800px]:text-base">Family, Friends, Organizations &amp; Connections</p>
      </header>
      <IntroCard />
      <ConnectionHighlights />
      <div className="graph-frame"><SocialGraph /></div>
      <PrivacyCard />
      <RelationshipLegend />
    </main>
  )
}
