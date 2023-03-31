import { addDoc, collection, Timestamp } from 'firebase/firestore/lite'
import { firestore } from '../config/firebaseConfig'

export const sendContactForm = async ({
  name,
  email,
  phone,
  message
}: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  try {
    const ref = collection(firestore, 'contact')
    await addDoc(ref, {
      name,
      email,
      phone,
      message,
      sentAt: Timestamp.now().toDate()
    })
    return 0
  } catch (err) {
    console.log(err)
    return -1
  }
}
