import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
    return (
        <Layout>
            <main className='page about-background'>
                <section className='about-page'>
                    <article>
                        <h2>Can't you people take the law into your own hands? I mean, we can't be policing the entire city!</h2>
                        <p>I'll keep it short and sweet — Family. Religion. Friendship. These are the three demons you must slay if you wish to succeed in business.</p>
                        <p>How could you?! Haven't you learned anything from that guy who gives those sermons at church? Captain Whatshisname? We live in a society of laws! Why do you think I took you to all those Police Academy movies? </p>
                        <Link to='/contact' className='btn'>
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src='../assets/images/about.jpeg'
                        alt='Person pouring salt in bowl'
                        className='about-img'
                        placeholder='blurred'
                    />
                </section>
            </main>
        </Layout>

    )
}

export default About
