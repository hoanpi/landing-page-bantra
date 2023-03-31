import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='pt2 pb1 align--center'>
      <div className='container'>
        <p>Welcome to</p>
        <h1 title='Loan Tea • Chuyên Các Loại Trà Thái Nguyên Ngon'>
          <Image
            className='logo'
            src={require('../../public/images/logo1.svg').default}
            alt='Loan Tea • Chuyên Các Loại Trà Thái Nguyên Ngon'
          />
        </h1>
      </div>
    </header>
  )
}
