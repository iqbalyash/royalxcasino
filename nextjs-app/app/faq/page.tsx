'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Is Royal X Casino available in Pakistan?',
      answer:
        'Yes, our platform is accessible to users in Pakistan. We are designed to provide entertainment-focused gaming experiences for players in the region. Please ensure you comply with all applicable local laws and regulations in your area.',
    },
    {
      question: 'Is the platform mobile-compatible for Pakistani users?',
      answer:
        'Absolutely! Our platform is fully optimized for mobile devices and works seamlessly on smartphones and tablets. We use mobile-first design principles, ensuring fast loading times and smooth gameplay even on slower internet connections common in Pakistan. You can enjoy all games and features directly from your mobile browser or by downloading the Royal X Casino APK.',
    },
    {
      question: 'How do I register on Royal X Casino?',
      answer:
        'Registration is simple and straightforward. Visit royal-x-casino.com and click on the registration button. You\'ll need to provide basic information such as your email address, create a secure password, and verify your account. The entire process takes just a few minutes, and you can start exploring immediately after registration. For detailed steps, visit our How to Play page.',
    },
    {
      question: 'Is Royal X Casino suitable for beginners?',
      answer:
        'Yes, our platform is beginner-friendly! We feature an intuitive interface that\'s easy to navigate, even for first-time users. We offer a variety of games suitable for all skill levels, from simple visual games to more strategic options. Helpful guides and clear instructions are available to help new players get started comfortably.',
    },
    {
      question: 'How safe and secure is the Royal X Casino platform?',
      answer:
        'We prioritize user safety and security. We implement industry-standard security measures including SSL encryption to protect your personal information and data. Secure protocols are used for all transactions and interactions. We also promote responsible gaming practices and provide tools to help users maintain control over their gaming activities.',
    },
    {
      question: 'What deposit and withdrawal options does Royal X Casino offer?',
      answer:
        'Royal X Casino supports multiple convenient and locally preferred payment methods for players in Pakistan, including JazzCash, EasyPaisa, local bank transfers, and USDT (Tether). JazzCash and EasyPaisa allow fast mobile deposits and withdrawals directly from your digital wallet, while bank transfer is ideal for larger amounts and users who prefer using their bank account. For crypto users, USDT offers faster processing, lower fees, and an extra layer of privacy when managing your funds. Visit our Deposit & Withdrawal page for detailed information.',
    },
    {
      question: 'How long do deposits and withdrawals take?',
      answer:
        'Processing times vary by payment method. JazzCash and EasyPaisa deposits are typically instant, with withdrawals processed within 24 hours. Bank transfers usually take 1-3 business days. USDT transactions are typically processed within a few hours, depending on network congestion. For specific processing times, please check our Deposit & Withdrawal page.',
    },
    {
      question: 'Can I download the Royal X Casino APK?',
      answer:
        'Yes, Royal X Casino offers an APK download option for Android users who prefer a dedicated app experience. The APK provides faster access and optimized performance for mobile gaming. You can download it directly from our platform.',
    },
    {
      question: 'What games are available on Royal X Casino?',
      answer:
        'Royal X Casino offers a diverse collection of skill-based and entertainment-focused games including card games, slots and arcade games, and live-style games. Each category provides different gameplay experiences to suit various preferences. Visit our Games page to explore all available options.',
    },
    {
      question: 'Are there bonuses available for new players?',
      answer:
        'Yes, Royal X Casino offers various promotional rewards including welcome bonuses for new players, activity-based promotions, referral incentives, and periodic platform offers. All bonuses are subject to terms and conditions. Visit our Bonuses & Promotions page for more information.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'If you have questions or need assistance, you can reach out through the platform\'s support channels. We aim to provide timely and helpful responses to all user inquiries. For common questions, please check our FAQ page first.',
    },
    {
      question: 'What is responsible gaming?',
      answer:
        'Responsible gaming means playing within your means and maintaining control over your gaming activities. Royal X Casino promotes responsible gaming practices and provides tools to help users manage their gaming. We encourage players to set personal limits, take breaks, and comply with local laws. Visit our Responsible Gaming page to learn more.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section faq-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Frequently Asked Questions</h1>
            </header>
            <div className="section-content">
              <p>
                Find answers to common questions about Royal X Casino, our
                online gaming platform in Pakistan. If you don't find what
                you're looking for, feel free to contact our support team.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <h2
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleFAQ(index)
                      }
                    }}
                  >
                    {faq.question}
                  </h2>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-content" style={{ marginTop: '3rem' }}>
              <h2>Still Have Questions?</h2>
              <p>
                If you couldn't find the answer you're looking for, explore our
                other pages for more information:
              </p>
              <ul className="about-features">
                <li>
                  <Link href="/how-to-play">How to Play</Link> - Step-by-step
                  guide to getting started
                </li>
                <li>
                  <Link href="/deposit-withdrawal">Deposit & Withdrawal</Link> -
                  Payment methods and processing times
                </li>
                <li>
                  <Link href="/games">Games</Link> - Explore our game collection
                </li>
                <li>
                  <Link href="/responsible-gaming">Responsible Gaming</Link> -
                  Learn about safe gaming practices
                </li>
              </ul>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="https://royalxcasino55.com/?refer_id=101202282045"
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
