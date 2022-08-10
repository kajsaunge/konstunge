import { useEffect, useState } from "react";

import styles from "./Form.module.css";

const Form = ({
  messagePlaceholder = "Din förfrågan",
  submit = "Skicka",
  successMsg = "Yey! Du får återkoppling inom kort :)",
}) => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    setLoading(loading);
    setSuccessMsg(successMsg);
  }, [setLoading, setSuccessMsg]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch("/api/mail", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
        path: window.location.pathname,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    try {
      const result = await res.json();
      setTimeout(() => {
        event.target.reset();
        setLoading(false);
        setSuccessMsg(true);
      }, 1500);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 4500);
      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} disabled={loading}>
        {successMsg && <p className={styles.successmsg}>{successMsg}</p>}
        <fieldset className={styles.formfieldset}>
          <legend className="visually-hidden">Kontakt information</legend>
          <p>
            <label className={styles.formlabel} htmlFor="name">
              Namn
            </label>
            <input
              disabled={loading}
              className={styles.forminput}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Ditt namn"
              required
            />
          </p>
          <p>
            <label className={styles.formlabel} htmlFor="email">
              E-post
            </label>
            <input
              disabled={loading}
              className={styles.forminput}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Din e-post"
              required
            />
          </p>
          <p>
            <label className={styles.formlabel} htmlFor="message">
              Meddelande
            </label>
            <textarea
              disabled={loading}
              className={styles.forminputTextarea}
              id="message"
              name="message"
              type="text"
              placeholder={messagePlaceholder}
              required
            />
          </p>
          <button
            className={styles.formSubmit}
            type="submit"
            disabled={loading}
          >
            {submit}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
