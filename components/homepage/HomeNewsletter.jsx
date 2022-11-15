export default function HomeNewsletter() {
  return (
    <>
      <section className="home-newsletter">
        <form className="container">
          <label htmlFor="email">
            Subscribe to our <span>Newsletter</span>
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email address to recive the latest newsletter"
          />

          <button type="submit" title="Subscribe">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
