import React, { useState, useRef, MutableRefObject } from 'react'
import emailjs from '@emailjs/browser'
import { sendContactForm } from '../../services'

interface PopupProps {
  isShowSuccess: (value: boolean) => void
  isShowFail: (value: boolean) => void
}

export default function Selection3(props: PopupProps) {
  const { isShowSuccess, isShowFail } = props
  const [showEmailError, setEmailShowError] = useState(false)
  const [showPhoneError, setPhoneShowError] = useState(false)
  const [messageEmailError, setMessageEmailError] = useState<string>('')
  const [messagePhoneError, setMessagePhoneError] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [textarea, setTextArea] = useState<string>('')

  const formRef = useRef() as MutableRefObject<HTMLFormElement>
  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await sendContactForm({
      name: name,
      email: email,
      phone: phone,
      message: textarea
    })
    if (res == 0) {
      // send email from customer to me
      emailjs.sendForm('gmail', 'LoanTea', formRef.current, 'kTYnXkivDVx1g9XG6').then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
      isShowSuccess(true)
      formRef.current.reset()
      setPhone('')
    } else {
      isShowFail(false)
      formRef.current.reset()
    }
  }

  const onChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }
  const onChangeInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regEmail.test(event.target.value) && event.target.value !== '') {
      setEmailShowError(true)
      setMessageEmailError('Địa chỉ Email chưa hợp lệ.')
    } else if (event.target.value === '') {
      setEmailShowError(true)
      setMessageEmailError('Địa chỉ Email không được để trống.')
    } else {
      setEmailShowError(false)
    }

    setEmail(value)
  }
  const onChangeInputPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const re = /^[0-9\b]+$/

    if (event.target.value === '' || re.test(event.target.value)) {
      if ((event.target.value.length < 10 || event.target.value.length > 11) && event.target.value !== '') {
        setPhoneShowError(true)
        setMessagePhoneError('Số điện thoại chưa hợp lệ.')
      } else if (event.target.value === '') {
        setPhoneShowError(true)
        setMessagePhoneError('Số điện thoại không được để trống')
      } else {
        setPhoneShowError(false)
      }

      setPhone(value)
    }
  }
  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setTextArea(value)
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
                  <p>hoanpi96@gmail.com</p>
                  <p>info@helpline.com</p>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={submitContact}>
            <div className='grid-row'>
              <div className='grid-column span-half mt1'>
                <label className='label' htmlFor='name'>
                  Họ Tên
                </label>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  onChange={onChangeInputName}
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
                  onChange={onChangeInputEmail}
                  autoComplete='off'
                  type={'email'}
                  required
                />
                {showEmailError && (
                  <p className='error'>
                    <strong>{messageEmailError}</strong>
                  </p>
                )}
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
                  onChange={onChangeInputPhone}
                  value={phone}
                  autoComplete='off'
                  type={'text'}
                  required
                />
                {showPhoneError && (
                  <p className='error'>
                    <strong>{messagePhoneError}</strong>
                  </p>
                )}
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
                  onChange={onChangeTextArea}
                  rows={3}
                  maxLength={500}
                ></textarea>
              </div>
            </div>
            <div className='align--right mt2'>
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
