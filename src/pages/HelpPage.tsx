
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    section: 'How to Use',
    questions: [
      {
        question: 'How to place an order?',
        answer: "Go to the 'Pizza Orders' page and click on 'New Order' to create your order.",
      },
      {
        question: 'Can I edit an existing order?',
        answer: 'Yes, go to the Pizza Orders page, find your order, and click "Edit".',
      },
    ],
  },
  {
    section: 'Account Settings',
    questions: [
      {
        question: 'How to update my profile settings?',
        answer: 'Visit Settings > Profile Settings from the sidebar to update your details.',
      },
      {
        question: 'How to change my password?',
        answer: 'Go to Profile Settings and click on "Change Password".',
      },
    ],
  },
  {
    section: 'About',
    questions: [
      {
        question: 'Who can I contact for support?',
        answer: (
          <>
            You can contact us at{' '}
            <a
              href="mailto:support@web3pizza.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              support@web3pizza.com
            </a>
          </>
        ),
      },
      {
        question: 'What is Web3 Pizza?',
        answer: 'Web3 Pizza is a decentralized dashboard for managing and ordering pizzas using blockchain technology.',
      },
    ],
  },
];

const HelpPage: React.FC = () => {
  const [active, setActive] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (section: string, index: number) => {
    const key = `${section}-${index}`;
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Help & Support
      </h1>

      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
            {section.section}
          </h2>

          {section.questions.map((item, qIndex) => {
            const key = `${section.section}-${qIndex}`;
            const isOpen = active[key];

            return (
              <div
                key={qIndex}
                className="border border-gray-300 dark:border-gray-700 rounded-md mb-3 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(section.section, qIndex)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-800 dark:text-gray-200 font-medium bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <span>{item.question}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isOpen && (
                  <div className="px-8 py-4 text-sm bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HelpPage;
