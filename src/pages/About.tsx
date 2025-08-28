import React, { useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text fade-in">
            <h1>Meet Shanna</h1>
            <p className="hero-greeting">HI LOVE,</p>
            <p className="hero-thanks">THANKS FOR VISITING!</p>
            <p className="hero-intro">LET ME TELL YOU A BIT ABOUT MYSELF</p>
            <p className="hero-story">MY STORY...</p>
          </div>
          <div className="about-hero-image fade-in">
            <img 
              src="newShanna.jpg" 
              alt="Shanna - Licensed Massage Therapist" 
            />
          </div>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <div className="butterfly-3d butterfly-3d-1"></div>
          <div className="butterfly-3d butterfly-3d-2"></div>
          <div className="butterfly-3d butterfly-3d-3"></div>
          <div className="story-content fade-in">
            <p className="hero-description">
              From a young age, I was crafting, writing stories, twirling in the grass, singing at the top of my
              lungs and playing with imaginary friends. At age 3, I would make up dances and put on shows until
              finally my Mom enrolled me in dance class. From there, my love of movement expanded and evolved to a
              love of performing and expression. I wanted nothing more to be a professional performer.
            </p>
            <p>
              Dancing was my happy place, and it taught me discipline, perseverance, artistry and confidence. It
              introduced me to the challenges of competition, disordered eating, the stress of perfectionism and
              pushing past my limits even if that meant injury, burnout and exhaustion. My Mom held me, and
              caressed my hair as I cried and grew through the challenges. This simple human touch was so
              comforting and grounding to me, the privilege of maternal touch that was so freely given to me as a
              child.
            </p>
            <p>
              For college I was lead to the sunny University of Miami, where I ate, slept and breathed theatre and
              music, drank lots of cafe con leche and picked up a few salsa moves. As per usual I loaded up my
              schedule with way too many credits and had some melt downs, and performing kept my sanity intact.
              One day I found a coupon book for a week free of yoga in my neighborhood town. At age 16, I walked
              in the door of the studio and began my love affair with yoga and spirituality. I began paying
              attention to how my body held emotions, and how breath helped me let go. I navigated how to lean
              into what felt good and what challenged me without caring how the pose looked or how I compared to
              others around me.
            </p>
            <p>
              Yoga held my hand while I went through my first break up and social isolation from my peers in high
              school. I always left my practice feeling different-more in tune and self aware, balanced, and a
              better version than when I first stepped foot on the mat, even if that meant being vulnerable and
              tender.
            </p>
          </div>
        </div>
      </section>

      <section className="about-journey section-padding">
        <div className="container">
          <div className="journey-content">
            <div className="journey-image fade-in">
              <img 
                src="meetButterfly.jpg" 
                alt="Shanna practicing yoga" 
              />
            </div>
            <div className="journey-text fade-in">
              <p>
                I moved to NYC shortly after graduation and began auditioning every single day, working in a
                restaurant at night. I woke waking up at the crack of dawn to put my name on a list and wait for
                hours to get the chance to be seen, and hopefully picked, finishing my evening waiting tables. I
                took every dance class I could, enrolled in acting classes, workshops, you name it. Through this
                process I abused my body and had to navigate self love, discernment, boundaries, injury
                rehabilitation, heartbreak, and how to deal with rejection-a lot of it. I found myself craving to be
                held and supported. I found a talk therapist and at
                a massage therapist that helped me heal and both have been pillars in my growth. My massage
                therapist listened to my words, as well as the story my body told her. She made me feel safe to feel
                all the emotions that came up as they were released from my muscles, bones, and energy centers. I
                was enchanted by the overwhelming sense of calm and the ability to move forward in my life.
              </p>
              <p>
                Along the way, my craving for more yoga knowledge lead me to study Ayurveda and I became a yoga
                teacher at the magical Laughing Lotus. I was also inspired by the beauty of wine and became a
                Sommelier through the Court of Master Sommeliers.
              </p>
              <p>
                When the pandemic hit I was alone in my NY apartment with myself and the city that surrounds me and I
                felt the most in tune I have felt since being that little girl twirling in the grass. I took tons of
                online classes, became an essential oil specialist, wrote poetry, did crafts, watercolor painted,
                sang, meditated and went for long walks. I knew I needed a change when the world reopened and the
                idea to become a massage therapist became a thought I could not ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-calling section-padding">
        <div className="container">
          <div className="butterfly-3d butterfly-3d-4"></div>
          <div className="butterfly-3d butterfly-3d-5"></div>
          <div className="butterfly-3d butterfly-3d-6"></div>
          <div className="calling-content fade-in">
            <div className="calling-text">
              <p>
                I am in love with the human body and I have always wanted to learn more. How each part fits, how the
                organ systems intertwine, and the space beyond when our physical body ends and our energetic body
                expands. I've always had a passion for helping others and making them feel included and special.
              </p>
              <p>
                Hello journey to the Swedish Institute! There I studied every muscle and bone inside out, became
                obsessed with five element theory, and soaked up every bit of knowledge I could like a sponge.
              </p>
              <p>
                I always thought my specialty would be to take care of dancers and performers upholding their
                creative and physical processes. Again the universe had other plans, and I found myself captured by
                another direction. I went on to study prenatal massage, postpartum and labor preparation massage
                with Kiera Nagle of Mamassage and began working at Red Moon Wellness under the clinical direction of
                Lena DeGloma. I was so moved when Kiera said, "you have the honor of taking care of two souls
                instead of one". That really resonated within me and brought tears to my eyes.
              </p>
              <p>
                The training enlivened me to step forward in our community, and take care of mother's, perpetuating
                kind, nurturing, and loving touch through generations. After all, it is my mother that brought me
                into this world, introduced me to loving touch and who taught me to move forward with strength,
                grace and an open heart. I don't get to see her too often, but I call her every day and squeeze her
                tight when I do.
              </p>
              <p>
                The more I learn about the human body, the more I am enraptured by this great work of art. This is
                now the canvas with which I work with, helping human beings feel good in their bodies, nurturing our
                pregnant community as they grow life inside them, activating the energy of the chakras, enlivening
                the cells, and helping the body to find balance and rest.
              </p>
            </div>
          </div>
        </div>
      </section>
    <BackToTopButton />
  </div>
  );
};


export default About