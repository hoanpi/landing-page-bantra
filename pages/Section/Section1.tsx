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
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='section-title align--center pb1'>
              <p>
                <strong>Qúy khách hàng lưu ý :</strong> Trà nhà LoanTea tất cả là trà mạn, được chế biến và chăm sóc thủ
                công. Sản phẩm có chứng nhận Vietgap, canh tác tại vùng chè đặc sản La Bằng – Đại Từ - Thái Nguyên.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='grid-row grid-row--center'>
        <div className='grid-column span-half pt3 pb3 mobile-m order-1 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={cabin} alt='trà mạn truyền thống' width={422} height={422} />
            <div className='pattern pattern--left-down absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-2'>
          <h3>Trà Mạn Truyền Thống</h3>
          <p>
            <strong>Trà mạn truyền thống</strong> : Một loại trà được yêu thích ngàn đời nay, trà có vị chát và đắng
            nhẹ. Khi uống xong sẽ lưu hậu vị ngọt, nước trà xanh ngả vàng(vàng nhiều) đặc trưng của trà.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-4'>
          <h3>Trà Mạn Lai 1</h3>
          <p>
            <strong>Trà mạn lai 1</strong> : Loại trà trồng từ cành, cánh trà nhỏ - chuẩn - thu hái 1 tôm 2 lá. Dễ uống,
            phù hợp với mọi gia đình và lứa tuổi.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-3 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={teepee} alt='trà mạn lai 1' />
            <div className='pattern pattern--right-middle absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-5 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={fishing} alt='trà búp long vân' />
            <div className='pattern pattern--left-up absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-6'>
          <h3>Trà Búp Long Vân</h3>
          <p>
            <strong>Trà búp long vân</strong> : Đặc sản vùng trà La Bằng - Thái Nguyên, thu hái chuẩn 1 tôm 2 lá, hái bỏ
            sạch sẽ cẫng và búp già. Thơm đặc trưng của Long Vân, nước sánh vàng rất đẹp.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-8'>
          <h3>Trà Móc Câu</h3>
          <p>
            <strong>Trà móc câu</strong> : Trà cánh nhỏ sắc nhọn như móc câu, nước sánh vàng - chát nhẹ - hậu vị ngọt.
            Trà cực thơm, chỉ cần 1 lượng nhỏ sẽ đặc hơn các loại trà khác.
          </p>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-7 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={archery} alt='trà móc câu' />
            <div className='pattern pattern--right-down absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-9 reveal-on-scroll'>
          <div className='relative'>
            <Image className='info-image relative z2' src={canoeing} alt='trà đinh thượng hạng' />
            <div className='pattern pattern--left-middle absolute z1'></div>
          </div>
        </div>
        <div className='grid-column span-half pt3 pb3 mobile-m order-10'>
          <h3>Trà Đinh Thượng Hạng</h3>
          <p>
            <strong>Trà đinh thượng hạng</strong> : Trà thu hái chỉ 1 tôm, sau khi chế biến thu thành phẩm như cây đinh,
            sản phẩm làm thủ công <strong>100%</strong>. Khi dùng, chỉ nên cho lượng nhỏ để pha chế vì nước sẽ đặc và
            ngọt hậu sâu.
          </p>
        </div>
      </section>
    </div>
  )
}
