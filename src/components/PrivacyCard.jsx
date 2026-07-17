import { FaLock } from 'react-icons/fa'

export default function PrivacyCard() {
  return (
    <section className="absolute left-[37px] top-[1298px] flex h-[136px] w-[266px] gap-[14px] rounded-[14px] border border-[#dce1e9] bg-white px-5 py-[22px] shadow-[0_2px_4px_rgba(20,25,40,.04)] max-[800px]:relative max-[800px]:inset-auto max-[800px]:order-5 max-[800px]:mt-7 max-[800px]:h-auto max-[800px]:min-h-[132px] max-[800px]:w-full">
      <FaLock className="mt-0.5 size-5 shrink-0 text-[#7c65d8]" />
      <div><strong className="text-base">Private by Design</strong><p className="mt-1.5 whitespace-nowrap text-sm leading-[1.55] text-[#5c5c63] max-[800px]:whitespace-normal">You control your connections<br />and what you share.<br />Your network. Your rules.</p></div>
    </section>
  )
}
