import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <footer className='pt2 pb2'>
      <div className='container align--center'>
        <p>Số 2, ngõ 4, phố Tô Hiến Thành, Hà Đông, Hà Nội.</p>
        <p>
          Design by <span>Hoan Pi</span>
        </p>
        <ul className='no-bullets list--inline mt1'>
          <li className='mr1'>
            <a href='https://www.facebook.com/profile.php?id=100071252501707' className='link'>
              <Image className='icon' src={require('../../public/images/facebook.svg').default} alt='Facebook' />
            </a>
          </li>
          <li className='mr1'>
            <a href='https://www.twitter.com' className='link'>
              <Image className='icon' src={require('../../public/images/twitter.svg').default} alt='Twitter' />
            </a>
          </li>
          <li>
            <a href='https://instagram.com/tun_ori?igshid=YmMyMTA2M2Y=' className='link'>
              <Image className='icon' src={require('../../public/images/instagram.svg').default} alt='Instagram' />
            </a>
          </li>
        </ul>
        <p>&copy; Loan Tea</p>
      </div>
    </footer>
  )
}
