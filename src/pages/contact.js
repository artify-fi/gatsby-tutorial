import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>
                            Want to get in touch?
                    </h3>
                        <p>
                            …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!
                    </p>
                        <p>
                            Last night's "Itchy and Scratchy Show" was, without a doubt, the worst episode *ever.* Rest assured, I was on the Internet within minutes, registering my disgust throughout the world. I didn't get rich by signing checks.
                    </p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block"></button>
                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default contact
