import { ArrowDownRight, ArrowRight, Check, MoveRight } from 'lucide-react';
import { ConversionJourney, TrackedLink, WhatsAppLink } from '../components/kleencar/conversion-journey';
import { PhotographySlot } from '../components/kleencar/photography-slot';
import { PRODUCT_JOBS } from '../lib/kleencar';

const resultCases = [
  { number: '01', title: 'The cabin reset', image: '/images/kleencar-cabin.png', alt: 'A hand wiping a car steering wheel with an orange microfiber towel', copy: 'For the steering wheel, dash, console and touchpoints that make a used car feel used.' },
  { number: '02', title: 'The first proper wash', image: '/images/kleencar-wash.png', alt: 'A charcoal wash mitt cleaning the wet bonnet of a silver car', copy: 'A simple exterior routine that replaces the random sponge-and-detergent approach.' },
  { number: '03', title: 'The finishing pass', image: '/images/kleencar-tyre.png', alt: 'A hand applying finish to a car tyre with an orange foam applicator', copy: 'Tyres, trim and glass—the small areas that make the whole car look intentionally cared for.' },
];

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">BUILT FOR NEW-TO-YOU CARS · SRI LANKA</div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="KleenCar home">KLEEN<span>CAR</span></a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">HOW IT WORKS</a><a href="#inside">THE ROUTINES</a><a href="#faq">FAQ</a>
          <TrackedLink className="button button-small" href="#enquiry" eventName="header_cta_clicked">ASK ABOUT A KIT <ArrowRight aria-hidden="true" /></TrackedLink>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">YOUR FIRST CLEAN SHOULD FEEL LIKE A RESET.</p>
          <h1 id="hero-title">MAKE YOUR USED CAR<span>FEEL NEW TO YOU.</span></h1>
          <p className="hero-deck">DIY car-cleaning kits for used-car owners in Sri Lanka. KleenCar helps you choose a simple first-clean routine with every item assigned a clear job.</p>
          <div className="hero-actions">
            <TrackedLink className="button button-primary" href="#enquiry" eventName="hero_cta_clicked">ASK ABOUT A KIT <ArrowRight aria-hidden="true" /></TrackedLink>
            <WhatsAppLink className="text-action">ASK ON WHATSAPP <MoveRight aria-hidden="true" /></WhatsAppLink>
          </div>
          <p className="micro-proof">Optional fit check · No payment on this page · Images are concept photography, not product inventory</p>
        </div>
        <PhotographySlot className="hero-photo" index="01" title="Complete kit beside the car" note="KleenCar concept photography" ratio="landscape" src="/images/kleencar-hero.png" alt="An unbranded charcoal and orange car-care kit beside a silver car in a home driveway" priority />
        <div className="hero-side-note" aria-hidden="true"><span>ONE KIT</span><span>CLEAR JOBS</span><span>NO GUESSWORK</span></div>
      </section>

      <section className="proof-bar" aria-label="KleenCar purchase process">
        <span>01 · ASK ABOUT A KIT</span><ArrowDownRight aria-hidden="true" /><span>02 · CHOOSE A ROUTINE</span><ArrowDownRight aria-hidden="true" /><span>03 · CONFIRM BEFORE ORDERING</span>
      </section>

      <section className="problem section-shell">
        <div className="section-label">THE PROBLEM</div>
        <div className="problem-copy">
          <p className="kicker dark">A SHELF FULL OF BOTTLES IS NOT A SYSTEM.</p>
          <h2>RANDOM PRODUCTS.<br />ONE OLD CLOTH.<br /><span>ZERO CONFIDENCE.</span></h2>
          <p>Most first-time care routines begin with too much advice and no sequence. KleenCar starts with the jobs you want to tackle, then puts them in a simple order.</p>
        </div>
        <div className="problem-list">
          <article><strong>01</strong><h3>Too many choices</h3><p>You should not need a weekend of research to clean your own car.</p></article>
          <article><strong>02</strong><h3>No clear order</h3><p>Every item needs a place in the routine and a surface it is meant for.</p></article>
          <article><strong>03</strong><h3>A clear starting point</h3><p>Choose a lean, balanced, or broader routine before discussing the exact kit.</p></article>
        </div>
      </section>

      <section className="results section-shell" id="results">
        <div className="section-label inverse">THE RESET</div>
        <div className="results-heading"><p className="kicker">THREE HIGH-VISIBILITY WINS</p><h2>START WHERE THE CAR<br />FEELS MOST <span>NEGLECTED.</span></h2></div>
        <div className="use-case-grid">
          {resultCases.map((item) => <article key={item.number}>
            <PhotographySlot index={item.number} title={`${item.title} — in action`} note="KleenCar concept photography" ratio="portrait" src={item.image} alt={item.alt} />
            <div className="case-copy"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>
          </article>)}
        </div>
      </section>

      <section className="how section-shell" id="how-it-works">
        <div className="section-label">HOW IT WORKS</div>
        <div className="how-intro"><p className="kicker dark">LESS SHOPPING. MORE CERTAINTY.</p><h2>FROM “WHERE DO I START?”<br />TO <span>READY.</span></h2></div>
        <ol className="how-steps">
          <li><span>01</span><div><h3>Answer three useful questions</h3><p>Car type, first priority and the level of setup you want.</p></div></li>
          <li><span>02</span><div><h3>See one recommended route</h3><p>A clear starting point, with the freedom to change it.</p></div></li>
          <li><span>03</span><div><h3>Enquire before ordering</h3><p>Ask about the routine first. An enquiry is not a payment or confirmed order.</p></div></li>
        </ol>
      </section>

      <ConversionJourney />

      <section className="offer section-shell" id="inside">
        <div className="section-label inverse">THE OFFER</div>
        <div className="offer-grid">
          <PhotographySlot index="05" title="The complete KleenCar reset" note="KleenCar concept photography" ratio="square" src="/images/kleencar-kit.png" alt="An unbranded charcoal and orange car-care kit arranged on a workshop mat" />
          <div className="offer-copy">
            <p className="kicker">A SIMPLE FIRST-CLEAN ROUTINE</p><h2>THE KLEENCAR<br /><span>RESET.</span></h2>
            <p className="offer-lead">Choose a routine that covers the jobs you want to tackle first, then ask about the exact kit, availability and ordering details.</p>
            <ul className="offer-checks"><li><Check aria-hidden="true" /> A routine matched to your stated preference</li><li><Check aria-hidden="true" /> A simple order of use</li><li><Check aria-hidden="true" /> No payment or order commitment when you enquire</li></ul>
            <TrackedLink className="button button-primary" href="#enquiry" eventName="offer_cta_clicked">ASK ABOUT A KIT <ArrowRight aria-hidden="true" /></TrackedLink>
          </div>
        </div>
      </section>

      <section className="education section-shell">
        <div className="section-label">WHY EACH ITEM EXISTS</div>
        <div className="education-heading"><p className="kicker dark">EVERYTHING EARNS ITS PLACE.</p><h2>FIVE JOBS.<br />NO <span>FILLER.</span></h2></div>
        <div className="job-list">{PRODUCT_JOBS.map((job, index) => <article key={job.name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{job.name}</h3><p>{job.purpose}</p></article>)}</div>
      </section>


      <section className="faq section-shell" id="faq">
        <div className="section-label">FAQ</div>
        <div className="faq-heading"><p className="kicker dark">START WITH THE FACTS.</p><h2>HOW ENQUIRIES<br /><span>WORK.</span></h2></div>
        <div className="faq-list">
          <details><summary>Do I pay on this website?<span>+</span></summary><p>No. An enquiry does not collect payment or place an order.</p></details>
          <details><summary>Does the fit check guarantee product compatibility?<span>+</span></summary><p>No. It suggests the scope of a routine based on your preferences. Product-specific compatibility must be confirmed before you buy.</p></details>
          <details><summary>Can I ask a question without completing the fit check?<span>+</span></summary><p>Yes. Use the enquiry form to ask about a kit directly.</p></details>
        </div>
      </section>

      <section className="final-cta"><p className="kicker">YOUR CAR ALREADY HAS A HISTORY.</p><h2>MAKE THE NEXT<br />CHAPTER FEEL <span>YOURS.</span></h2><div className="hero-actions center"><TrackedLink className="button button-light" href="#enquiry" eventName="final_cta_clicked">ASK ABOUT A KIT <ArrowRight aria-hidden="true" /></TrackedLink><WhatsAppLink className="text-action light">ASK ON WHATSAPP <MoveRight aria-hidden="true" /></WhatsAppLink></div></section>

      <footer><a className="wordmark" href="#top">KLEEN<span>CAR</span></a><p>Car-care setups for new-to-you cars in Sri Lanka.</p><a href="#top">BACK TO TOP ↑</a></footer>
      <div className="mobile-sticky" aria-label="Quick actions"><TrackedLink className="button button-primary" href="#enquiry" eventName="mobile_sticky_cta_clicked">ASK ABOUT A KIT</TrackedLink><a className="sticky-secondary" href="#fit-check">FIT CHECK</a></div>
    </main>
  );
}

