import styles from "./Form.module.css";

const Form = ({ messagePlaceholder = 'Din förfrågan'}) => {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/mail", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    try {
      const result = await res.json();
      if (result.status == 200) {
        console.log("success", result);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  return (
    <form className={styles.form} onSubmit={registerUser}>
      <fieldset className={styles.formfieldset}>
        <legend className="visually-hidden">Kontakt information</legend>
        <p>
          <label className={styles.formlabel} htmlFor="name">
            Namn
          </label>
          <input
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
            className={styles.forminputTextarea}
            id="message"
            name="message"
            type="text"
            placeholder={messagePlaceholder}
            required
          />
        </p>
        <button className={styles.formSubmit}type="submit">Skicka</button>
      </fieldset>
    </form>
  );
};

export default Form;
