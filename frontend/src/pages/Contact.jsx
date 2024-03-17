
const Contact = () => {
  return <section >
    <div className='px-4  mx-auto max-w-screen-md '>
      <h2 className='heading text-center '>Contact us </h2>

      <p className='mb-8 lg:mb-16 font-light text-center text__para '>Feeling unsure about something?  No sweat!  Our friendly support team is here to help.  Whether you have questions about the app, need a hand navigating a feature, or just want to say hi, we're just a tap away.

Reach out to us through the app's built-in chat function, or send us an email at [insert your email address here].  We believe in clear communication and are always happy to lend a helping hand.</p>

      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'> Your Email </label>
          <input type="email"  id="email" placeholder='example@gmail.com' className='form__input mt-1' />
        </div>

        <div>
          <label htmlFor="subject" className='form__label'> Subject </label>
          <input type="text"  id="subject" placeholder='let us know how can we help you ' className='form__input mt-1' />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className='form__label'> Your message </label>
          <textarea
          rows="6"
          
          type="text"  id="message" placeholder='Leave a comment...' className='form__input mt-1' />
        </div>
        <button type="submit" className="btn rounded sm:w-fit">Submit</button>
      </form>
    </div>

  </section>
};

export default Contact;
