'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
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
        'Absolutely! Our platform is fully optimized for mobile devices and works seamlessly on smartphones and tablets. We use mobile-first design principles, ensuring fast loading times and smooth gameplay even on slower internet connections common in Pakistan. You can enjoy all games and features directly from your mobile browser.',
    },
    {
      question: 'How do I register on Royal X Casino?',
      answer:
        'Registration is simple and straightforward. Visit royal-x-casino.com and click on the registration button. You\'ll need to provide basic information such as your email address, create a secure password, and verify your account. The entire process takes just a few minutes, and you can start exploring immediately after registration.',
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
        'Royal X Casino supports multiple convenient and locally preferred payment methods for players in Pakistan, including JazzCash, EasyPaisa, local bank transfers, and USDT (Tether). JazzCash and EasyPaisa allow fast mobile deposits and withdrawals directly from your digital wallet, while bank transfer is ideal for larger amounts and users who prefer using their bank account. For crypto users, USDT offers faster processing, lower fees, and an extra layer of privacy when managing your funds.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="content-section faq-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </header>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <h3
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
              </h3>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
