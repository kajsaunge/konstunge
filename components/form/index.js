import { useEffect, useState } from 'react';

// import contentSe from '../../pages/api/se.json';
import contentEn from '../../pages/api/en.json';

import styles from './Form.module.css';

const Form = ({}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { form } = contentEn.contact;

  useEffect(() => {
    setLoading(loading);
    setSuccess(success);
  }, [setLoading, setSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch('/api/mail', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
        path: window.location.pathname,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    try {
      const result = await res.json();
      setTimeout(() => {
        event.target.reset();
        setLoading(false);
        setSuccess(true);
      }, 1500);
      setTimeout(() => {
        setSuccess(false);
      }, 4500);
      return result;
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} disabled={loading}>
        {success && <p className={styles.successmsg}>{form.successMsg}</p>}
        <fieldset className={styles.formfieldset}>
          <legend className='visually-hidden'>Kontaktinformation</legend>
          <p>
            <label className={styles.formlabel} htmlFor='name'>
              {form.name}
            </label>
            <input
              disabled={loading}
              className={styles.forminput}
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              placeholder={form.namePlaceholder}
              required
            />
          </p>
          <p>
            <label className={styles.formlabel} htmlFor='email'>
              {form.mail}
            </label>
            <input
              disabled={loading}
              className={styles.forminput}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder={form.mailPlaceholder}
              required
            />
          </p>
          <p>
            <label className={styles.formlabel} htmlFor='message'>
              {form.message}
            </label>
            <textarea
              disabled={loading}
              className={styles.forminputTextarea}
              id='message'
              name='message'
              type='text'
              placeholder={form.messagePlaceholder}
              required
            />
          </p>
          <button
            className={styles.formSubmit}
            type='submit'
            disabled={loading}
          >
            {form.submit}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
