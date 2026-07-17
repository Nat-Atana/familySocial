import { MdGroups, MdLink, MdPeople } from 'react-icons/md'
import { connectionStats } from '../data'

const icons = { family: MdPeople, friend: MdPeople, community: MdGroups, total: MdLink }

export default function ConnectionHighlights() {
  return (
    <aside className="absolute right-5 top-[200px] z-20 h-[375px] w-[257px] rounded-[14px] border border-[#dbe0e9] bg-white px-[26px] pb-[18px] pt-5 shadow-[0_2px_4px_rgba(20,25,40,.04)] max-[800px]:relative max-[800px]:inset-auto max-[800px]:order-3 max-[800px]:mt-6 max-[800px]:h-auto max-[800px]:w-full">
      <h2 className="mb-[15px] whitespace-nowrap text-sm font-semibold leading-5">CONNECTION HIGHLIGHTS</h2>
      {connectionStats.map((stat) => {
        const Icon = icons[stat.type]
        return (
          <div key={stat.type} className="flex h-[79px] items-center gap-4 border-b border-[#e3e3e7] last:border-0 max-[800px]:h-[76px]">
            <span className="stat-tile relative grid shrink-0 place-items-center rounded bg-[var(--tile-bg)] text-[var(--tile-color)]" style={{ '--tile-bg': stat.background, '--tile-color': stat.color }}>
              <Icon className="size-[72%]" />
            </span>
            <div><strong className="block text-[27px] font-semibold leading-none">{stat.value}</strong><span className="mt-[7px] block whitespace-nowrap text-sm text-[#55565d]">{stat.label}</span></div>
          </div>
        )
      })}
    </aside>
  )
}
