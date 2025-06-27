import React from 'react';
import Navbar from '../Components/Footer'; // From previous response
import Footer from '../Components/Navbar'; // From previous response

const services = [
  {
    title: 'Water Can Sizes',
    description:
      'Choose from a range of water can sizes, including 20L, 10L, and 5L, to meet your household or business requirements.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnJHI-cL6TqoDiLhXiMcZ8T7e7TkwhAR01BqB1wqBpde1sj7H_Uc4PDxh_d-Bx4kHq5n8PYZ3v1XBoYLuiECWtoPM9Gmrkz60lMmQmkEkDg3NlvPUCjwqBY3Iovcc-7T1f6ATQDCaiLWaSr03fDde8qwmtPU8NYfVcoqOyoTn1eso19JzeDFLwxnHSA06hWVeBM3fPaek2rQzGl986BsuyvVvSFIrg6W99wdShNsPuHLzkusAAbJVFzKG1MzH0uMHLqWSWhIeI0Ao',
  },
  {
    title: 'Flexible Delivery',
    description:
      'Enjoy flexible delivery options, including same-day and scheduled deliveries, tailored to your convenience.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnyesxY3lgnA2HzT-w2YEiXpgBWBm4H8F7SBz_Q00wA17XL8ekg4GQlCZ7SrzJya98DdaBEZDcU7Mo6KuG-bTKpurrqyqeLBY6xch84tszcff6aPkzjeu_-VSk99Y0oMx4dT8BYd6mgSdKWsRuD0o20y6pBQgP1jIESM98sfTzzXUToJwW6Z1aywoM-FSCiLVuPL1o1S7Hp_vhC9Tz4eW9SL-zHn3fMxpc8xOFmoBqnSx749HqmjcVe9lfq91aamZOL2qBPS_9fL4',
  },
  {
    title: 'Trusted Quality',
    description:
      'All cans go through strict hygiene protocols ensuring clean, safe, and drinkable water every time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfO8w5YPfbbs6P9D05nD7dXVB8epnwK7jVzRUZZbdylUI8-rQsUx_-bl8MF1dGDuZDFMVVajNhze31hwIO5KPpcUx20WsZuc1JDaWDQiER4IT5ndp6xCMB3cKdrIT4jNs6WxY2-ueC70sLUV-wx_n3959_7Fmapx2JABbTONafpEbGpz_sKNkndrgYMEXaBq0pmHGrjHe6e8PHpVZyTcN0x6iLrj3pHaCiSIIhEriMngGDxR2xgavUao2DrrRpDn0Ac0__vUE2C8o',
  },
];

const installationSupport = [
  {
    title: 'Dispenser Installation',
    description: 'Professional installation of your water dispenser for optimal performance.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
        aria-label="Wrench icon"
      >
        <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    description: 'Our dedicated support team is available to assist you with any queries.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
        aria-label="Headphones icon"
      >
        <path d="M201.89,62.66A103.43,103.43,0,0,0,128.79,32H128A104,104,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Regular maintenance and repair services to keep your dispenser in top condition.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
        aria-label="ShieldCheck icon"
      >
        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How do I place an order?',
    answer:
      'You can place an order through our website or mobile app. Simply select your desired products, choose a delivery option, and proceed to checkout. You can also call our customer support team for assistance.',
  },
  {
    question: 'What are the delivery charges?',
    answer:
      'Delivery charges vary based on your location and selected delivery option (Standard or Express). You can view the exact charges at checkout or contact our support team for details.',
  },
  {
    question: 'How do I manage my subscription?',
    answer:
      'You can manage your subscription through your account on our website or mobile app. Log in to modify your plan, update delivery frequency, or cancel your subscription. Contact support for further assistance.',
  },
];

function ServicesPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
    

        {/* Main Content */}
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Services Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#121516] tracking-light text-[32px] font-bold leading-tight">
                  Our Services
                </p>
                <p className="text-[#6a7881] text-sm font-normal leading-normal">
                  AquaSwift offers a range of services to ensure you always have access to clean and safe drinking water. From flexible delivery options to expert installation and maintenance, we've got you covered.
                </p>
              </div>
            </div>

            {/* Delivery Options */}
            <h2 className="text-[#121516] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Delivery Options
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-lg border border-[#dde1e3] bg-white p-4"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div>
                    <h3 className="text-[#121516] text-base font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#6a7881] text-sm font-normal leading-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Installation & Support */}
            <h2 className="text-[#121516] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Installation & Support
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {installationSupport.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-1 gap-3 rounded-lg border border-[#dde1e3] bg-white p-4 flex-col"
                >
                  <div className="text-[#121516]">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121516] text-base font-bold leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-[#6a7881] text-sm font-normal leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="text-[#121516] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col p-4 gap-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="flex flex-col rounded-xl border border-[#dde1e3] bg-white px-[15px] py-[7px] group"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-[#121516] text-sm font-medium leading-normal">
                      {faq.question}
                    </p>
                    <div
                      className="text-[#121516] group-open:rotate-180"
                      data-icon="CaretDown"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        aria-label="Caret down icon"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </div>
                  </summary>
                  <p className="text-[#6a7881] text-sm font-normal leading-normal pb-2">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Contact Button */}
            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Contact Us</span>
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default ServicesPage;