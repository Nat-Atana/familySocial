import { legendItems, relationshipStyles } from '../data'

export default function RelationshipLegend() {
  return (
    <section className="absolute left-[37px] top-[1475px] h-[182px] w-[486px] rounded-[14px] border border-[#dce1e9] bg-white px-[27px] py-[21px] shadow-[0_2px_4px_rgba(20,25,40,.04)] max-[800px]:relative max-[800px]:inset-auto max-[800px]:order-6 max-[800px]:mt-7 max-[800px]:h-auto max-[800px]:w-full">
      <h2 className="mb-5 text-base font-semibold">RELATIONSHIP TYPES</h2>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-[35px] gap-y-[18px] max-[520px]:flex max-[520px]:flex-col">
        {legendItems.map(([type, label]) => (
          <p className="m-0 flex items-center gap-[18px] text-base" key={type}>
            <i className={`h-[3px] w-[43px] shrink-0 rounded-sm ${relationshipStyles[type].dashed ? 'line-dashed' : ''}`} style={{ '--line': relationshipStyles[type].color, backgroundColor: relationshipStyles[type].color }} />
            <span>{label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
