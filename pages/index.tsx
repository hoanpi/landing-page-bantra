import React, { useState, useRef } from 'react'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header'
import Selection1 from './Section/Section1'
import Selection2 from './Section/Section2'
import Selection3 from './Section/Section3'
import Footer from './Footer'
import ogimage from './../public/images/logo1.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [show, setShow] = useState(false)
  const [not_show, setNotShow] = useState(false)

  const handleShowPopup = (value: boolean) => {
    if (value == true) {
      setShow(true)
    } else {
      setNotShow(true)
    }
  }

  const handleCloseSuc = () => setShow(false)
  const handleCloseFai = () => setNotShow(false)

  return (
    <>
      <Head>
        <title>Loan Tea • Chuyên Các Loại Trà Thái Nguyên Ngon.</title>
        <meta
          name='keywords'
          content='trà thái nguyên, trà hạt truyền thống, trà lai ngon, trà long vân, trà nõn tôm ngon, trà nõn tôm đặc biệt, trà đinh ngon, trà đinh đặc biệt, trà đinh thượng hạng, loan tea, loan trà'
        ></meta>
        <meta
          name='description'
          content='Loan Tea chuyên cung cấp các loại trà ngon tại Thái Nguyên như Trà Hạt Truyền Thống, Trà Lai Ngon, Trà Long Vân, Trà Nõn Tôm Ngon, Trà Nõn Tôm Đặc Biệt, Trà Đinh Ngon, Trà Đinh Thượng Hạng. Hotline: 0865.070.496'
        />
        <link rel='canonical' href='https://landing-page-bantra.vercel.app/'></link>
        <meta property='og:title' content='Loan Tea • Chuyên Các Loại Trà Thái Nguyên Ngon.' />
        <meta
          property='og:description'
          content='Loan Tea chuyên cung cấp các loại trà ngon tại Thái Nguyên như Trà Hạt Truyền Thống, Trà Lai Ngon, Trà Long Vân, Trà Nõn Tôm Ngon, Trà Nõn Tôm Đặc Biệt, Trà Đinh Ngon, Trà Đinh Thượng Hạng. Hotline: 0865.070.496'
        />
        <meta property='og:url' content='https://landing-page-bantra.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://landing-page-bantra.vercel.app/images/ogimage.png' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='200' />
        <meta property='fb:app_id' content='' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>
        <Selection1 />
        <Selection2 />
        <Selection3 isShowSuccess={handleShowPopup} isShowFail={handleShowPopup} />
      </main>
      <Footer />
      <Modal show={show} onHide={() => setShow(false)} aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Header>
          <div className='icon-box-suc'>
            <i className='material-icons'></i>
          </div>
          <h4 className='modal-title'>Thông báo!</h4>
        </Modal.Header>
        <Modal.Body>
          <p className='align--center'>
            Cảm ơn bạn đã gửi thông tin liên hệ, chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-success btn-block' data-dismiss='modal' onClick={handleCloseSuc}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={not_show} onHide={() => setNotShow(false)} aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Header>
          <div className='icon-box-fai'>
            <i className='material-icons'></i>
          </div>
          <h4 className='modal-title'>Thông báo!</h4>
        </Modal.Header>
        <Modal.Body>
          <p className='align--center'>Đã xảy ra sự cố, Vui lòng thử lại !!</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-success btn-block' data-dismiss='modal' onClick={handleCloseFai}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
