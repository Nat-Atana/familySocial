import NetworkIcon from './NetworkIcon'

export default function IntroCard() {
  return (
    <section className="absolute left-[37px] top-[200px] flex h-[120px] w-[333px] items-center gap-[25px] rounded-b-[14px] px-[25px] py-[21px] shadow-[0_3px_8px_rgba(0,0,0,.025)] max-[800px]:relative max-[800px]:inset-auto max-[800px]:order-2 max-[800px]:mt-8 max-[800px]:h-auto max-[800px]:min-h-[112px] max-[800px]:w-full max-[800px]:rounded-[14px] max-[800px]:border max-[800px]:border-[#eef0f4] max-[520px]:gap-[14px] max-[520px]:px-[15px] max-[520px]:py-[17px]">
      <NetworkIcon />
      <div className="whitespace-nowrap text-base leading-[1.64] max-[800px]:whitespace-normal">
        People are nodes.<br />Relationships are edges.<br />Memories connect us.
      </div>
    </section>
  )
}
