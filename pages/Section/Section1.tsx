import React from 'react'
import cabin from '../../public/images/1.jpg'
import teepee from '../../public/images/2.jpg'
import fishing from '../../public/images/fishing.jpg'
import archery from '../../public/images/archery.jpg'
import canoeing from '../../public/images/canoeing.jpg'
import Image from 'next/image'

export default function Selection1() {
  return (
    <div className='container'>
      <section className='grid-row grid-row--center'>
        <div className='grid-column span-half pt3 pb3 mobile-m order-1 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={cabin} alt='Cabin' width={422} height={422} />
            <div className='pattern pattern--left-down absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-2'>
          <h3>Trà Lai</h3>
          <p>
            <strong>Trà Lai</strong> là một loại trà xanh nổi tiếng đến từ vùng trà La Bằng của Thái Nguyên. Loại trà
            này là giống lai giữa trà ta của Việt Nam và Long Tỉnh – loại trà xanh đứng đầu Thập Đại Danh Trà.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-4'>
          <h3>Trà Long Vân</h3>
          <p>
            <strong>Trà Long Vân</strong> là một loại trà xanh nổi tiếng đến từ vùng trà La Bằng của Thái Nguyên. Loại
            trà này là giống lai giữa trà ta của Việt Nam và Long Tỉnh – loại trà xanh đứng đầu Thập Đại Danh Trà.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-3 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={teepee} alt='Teepee' />
            <div className='pattern pattern--right-middle absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-5 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={fishing} alt='Fishing' />
            <div className='pattern pattern--left-up absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-6'>
          <h3>Fishing</h3>
          <p>
            Que Manilium, ab iisque M. Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem,
            nos amemus; An eum locum libenter invisit&nbsp;ultimas.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-8'>
          <h3>Archery</h3>
          <p>
            At ille pellit, qui permulcet sensum voluptate. Quid in isto egregio tuo officio et tanta fide-sic enim
            existimo-ad corpus refers? Nec vero sum nescius esse utilitatem in&nbsp;historia.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-7 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={archery} alt='Archery' />
            <div className='pattern pattern--right-down absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-9 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={canoeing} alt='Canoeing' />
            <div className='pattern pattern--left-middle absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-10'>
          <h3>Canoeing</h3>
          <p>
            Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Sin te auctoritas commovebat,
            nobisne omnibus et Platoni ipsi nescio quem illum&nbsp;anteponebas.
          </p>
        </div>
      </section>
    </div>
  )
}
