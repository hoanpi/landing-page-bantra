import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { sendContactForm } from '../../services'

interface PopupProps {
  isShow: (value: boolean) => void
  isNotShow: (value: boolean) => void
}

export default function Selection3(props: PopupProps) {
  const { isShow, isNotShow } = props
  const [info, setInfo] = useState<string>('')

  const emailRef = useRef()
  const formRef = useRef()
  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await sendContactForm({
      name: info,
      email: info,
      phone: info,
      message: info
    })
    if (res == 0) {
      // send email from customer to me
      // emailjs.sendForm('gmail', 'LoanTea', e.currentTarget, 'kTYnXkivDVx1g9XG6').then(
      //   (result) => {
      //     console.log(result.text)
      //   },
      //   (error) => {
      //     console.log(error.text)
      //   }
      // )
      isShow(true)
      emailRef.current.value = ''
    } else {
      isNotShow(false)
      formRef.current.reset()
    }
  }

  const onChangeInput = (info: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (info == 'name') {
      setInfo(value)
    } else if (info == 'email') {
      setInfo(value)
    } else if (info == 'phpne') {
      setInfo(value)
    } else if (info == 'message') {
      setInfo(value)
    } else {
      setInfo(value)
    }
  }

  return (
    <>
      <section id='contact' className='bg--secondary-color pt3 pb3'>
        <div className='container'>
          <div className='mb1 align--center'>
            <h3 className='mb1'>Liên hệ với chúng tôi để đặt hàng</h3>
            <p>Chúng tôi sẽ phản hồi lại trong thời gian sớm nhất.</p>
          </div>
          <div className='row justify-content-center mb2'>
            <div className='col-lg-4 col-md-6 col-sm-7'>
              <div className='contact-box align--center mt-30'>
                <div className='contact-icon'>
                  <i className='fa fa-map-marker-alt'></i>
                </div>
                <div className='contact-content'>
                  <h6 className='contact-title'>Địa Chỉ</h6>
                  <p>Số 2, ngõ 4, phố Tô Hiến Thành, Hà Đông, Hà Nội.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-7'>
              <div className='contact-box align--center mt-30'>
                <div className='contact-icon'>
                  <i className='fa fa-phone'></i>
                </div>
                <div className='contact-content'>
                  <h6 className='contact-title'>Số Điện Thoại</h6>
                  <p>+84357 550 497</p>
                  <p>+84865 070 496</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-7'>
              <div className='contact-box align--center mt-30'>
                <div className='contact-icon'>
                  <i className='fa fa-envelope'></i>
                </div>
                <div className='contact-content'>
                  <h6 className='contact-title'>Email</h6>
                  <p>support@yourmail.com</p>
                  <p>info@helpline.com</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={submitContact}>
            <div className='grid-row'>
              <div className='grid-column span-half mt1'>
                <label className='label' htmlFor='name'>
                  Họ Tên
                </label>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  onChange={onChangeInput('name')}
                  autoComplete='off'
                  type={'text'}
                  minLength={3}
                  maxLength={25}
                  required
                />
              </div>
              <div className='grid-column span-half mt1'>
                <label className='label' htmlFor='email'>
                  Email
                </label>
                <input
                  className='form-control'
                  id='email'
                  name='email'
                  onChange={onChangeInput('email')}
                  autoComplete='off'
                  type={'email'}
                  ref={emailRef}
                  required
                />
              </div>
            </div>
            <div className='grid-row'>
              <div className='grid-column mt1'>
                <label className='label' htmlFor='phone'>
                  Số Điện Thoại
                </label>
                <input
                  className='form-control'
                  id='phone'
                  name='phone'
                  onChange={onChangeInput('phone')}
                  autoComplete='off'
                  type={'text'}
                  required
                />
              </div>
            </div>
            <div className='grid-row'>
              <div className='grid-column mt1'>
                <label className='label' htmlFor='message'>
                  Lời Nhắn
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  onChange={onChangeInput('message')}
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className='align--right mt1'>
              <button className='btn btn--outline' type='submit'>
                Gửi
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
