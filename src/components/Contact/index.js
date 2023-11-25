import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6f1omlk',
        'template_j21hgej',
        form.current,
        '4ETlhjL8u_AERHJFd'
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
        },
        (error) => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <main className="container contact-page">
        <section className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Thank you for visiting my portfolio! If you have any questions,
            inquiries, or would like to discuss potential collaborations or
            projects, please feel free to get in touch with me. I'm always
            excited to connect with fellow developers, clients, and like-minded
            individuals.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </section>
        <section className="map-zone">
          <div className="info-map">
            Clem Alleyne
            <br />
            Edmonton, Alberta
            <br />
            Canada
            <br />
            (Open to Relocate)
            <br />
            <span>clem.alleynejr@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[53.5461, -113.4937]} zoom={5}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[53.5461, -113.4937]}>
                <Popup>Currently located here :) Open to relocation</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </main>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Contact
