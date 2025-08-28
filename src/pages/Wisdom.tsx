import React, { useEffect } from 'react';
import { BookOpen, Lightbulb, Heart, Leaf, Award, GraduationCap } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';
import './Wisdom.css';

const Wisdom: React.FC = () => {
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
    <>
    <div className="wisdom-page">
      <section className="wisdom-hero">
        <div className="container">
          <div className="wisdom-hero-content fade-in">
            <h1>Wisdom</h1>
            <p className="hero-subtitle">Education, Training & Expertise</p>
          </div>
        </div>
      </section>

      <section className="education-section section-padding">
        <div className="container">
          <div className="education-content">
            <div className="education-item fade-in">
              <div className="education-text">
                <h2>The Swedish Institute College of Health Sciences, New York City 2021-2023</h2>
                <p><strong>Massage Therapy Associate Degree</strong></p>
                <p><strong>Summa Cum Laude</strong></p>
                <p>
                  Comprehensive training in Anatomy, Myology, Kinesiology, Palpation, Shiatsu, Swedish
                  Massage, Range of Motion, Sports Massage, PNF Stretching, Pathology, Assessment of
                  musculoskeletal injury and radiculopathies, trigger point release, myofascial
                  techniques, Thai massage, and reflexology.
                </p>
                <h2>Advanced Shiatsu and Eastern Studies (60CE) 2023</h2>
                <p>
                  Introduction to: fire cupping, guasha, moxibustion, Chinese nutrition, chakra balancing,
                  polarity, tongue and pulse evaluations, Mu Point massage
                </p>
              </div>
              <div className="education-image">
                <img src="newShanna.jpg" alt="Shanna at Swedish Institute" />
              </div>
            </div>

            <div className="education-item fade-in">
              <div className="education-image">
                <img src="shannaResize2.jpg" alt="Shanna" />
              </div>
              <div className="education-text">
                <h2>MaMassage® Prenatal Massage Therapy (24 CE) 2024</h2>
                <p>
                  Learned how to provide safe and effective massage therapy to clients during pregnancy.
                  Practice integrated Eastern & Western massage techniques to treat common discomforts
                  associated with pregnancy. Examined potential complications, cautions and
                  contraindications, as well as benefits, and helpful techniques for pregnant clients
                </p>
                <h2>MaMassage Prenatal Massage Training Intro & Webinar (3CE) 2023</h2>
                <p>
                  Learned safe and effective massage therapy techniques, bolstering options, and common
                  musculoskeletal issues and contra-indications associated with pregnancy.
                </p>
                <h2>MaMassage® for Labor & Postpartum Clients (8 CE) 2023</h2>
                <p>
                  Learned in-depth knowledge needed to offer safe and effective massage treatments to
                  laboring and postpartum clients. Reinforced knowledge of the anatomy and physiology of
                  the body during the stages of labor and postpartum recovery. Reinforced complications
                  and contraindications, as well as the benefits, indications, and cautions of labor and
                  postpartum massage. Utilized massage techniques, Eastern and Western, to treat common
                  discomforts during the stages of labor and postpartum recovery.
                </p>
              </div>
            </div>

            <div className="education-item fade-in">
              <div className="education-text">
                <h2>DoTerra Essential Oil Specialist Training 2020</h2>
                <p>
                  Study of essential oils: history, methods of extraction and distillation, chemistry of
                  essential oils; terpenes, phenol, aldehyde, ketone, alkane, alkene, ester, ether, oxide,
                  and phenylpropene families. Exploration of essential oil purity, contamination and
                  adulteration, and safety methods with using oils. Introduction of how essential oils
                  enter the body, aromatic and topical use, dilution guidelines for both external and
                  internal use. Practical use of oils as part of a wellness lifestyle, blends and
                  products.
                </p>
                <h2>Laughing Lotus 200 Hour Yoga Teacher Training 2019</h2>
                <p>
                  Introduction to: mantra, asana, Lotus Flow TM sequencing and class preparation, anatomy
                  and physiology, Sanskrit, ayurveda, prenatal yoga, restorative yoga, mythology, deities
                  and mudras Study of pranayama, subtle body, chakras and elements. Dissection and
                  discussion of the Yoga Sutras of Patanjali, yamas and Niyamas, and creation of dharma.
                </p>
                <h2>50 Hour Ayurveda Training-Ali Cramer 2019</h2>
                <p>
                  Introduction to the physical and emotional characteristics of the doshas; vata, pitta,
                  kapha, both in balance and out of balance. Studied asana and vinyasa sequences,
                  essential oils, and foods to nourish the doshas. Explored the tastes through cooking
                  class to make kitchari and study of herbs and spices to pacify the doshas. Explored the
                  vayus, gunas, rasas and kundalini yoga. Practiced ayurvedic cleansing, dinacharya, and
                  ritucharya. Studied the connection of ayurveda and the planets including mantra, colors,
                  gem stones, emotions, energetic direction and organ systems.
                </p>
              </div>
              <div className="education-image">
                <img src="offerings.jpg" alt="Offerings" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <BackToTopButton />
    </>
  );
};



export default Wisdom