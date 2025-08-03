import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetchSubscriptionPlans from '../Hooks/useFetchSubscriptionPlans';

function SubscriptionPage() {
  const { plans, loading, error } = useFetchSubscriptionPlans();
  const navigate = useNavigate();

  const handleChoosePlan = (plan) => {
    localStorage.setItem("selectedSubcriptionPlan", JSON.stringify(plan));
    navigate("/subscription/my-subscription");
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading subscription plans...</div>
      </div>
    );
  }

  if (error) {
    console.log("Error loading subscription plans:", error);
  }

  if (plans.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">No subscription plans available</div>
      </div>
    );
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
       

        {/* Main Content */}
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Subscription Plans Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#121516] tracking-light text-[32px] font-bold leading-tight">
                  Subscription Plans
                </p>
                <p className="text-[#6a7881] text-sm font-normal leading-normal">
                  Choose an AquaSwift subscription plan that suits your needs. Enjoy clean, safe drinking water with flexible delivery and exclusive benefits.
                </p>
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dde1e3] bg-white p-6"
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#121516] text-base font-bold leading-tight">
                      {plan.title}
                    </h1>
                    <p className="flex items-baseline gap-1 text-[#121516]">
                      <span className="text-[#121516] text-4xl font-black leading-tight tracking-[-0.033em]">
                        {plan.price}
                      </span>
                      <span className="text-[#121516] text-base font-bold leading-tight">
                        /month
                      </span>
                    </p>
                  </div>
                  <button onClick = {() => {handleChoosePlan(plan)}} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f3f4] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Choose Plan</span>
                  </button>
                  <div className="flex flex-col gap-2">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-[13px] font-normal leading-normal flex gap-3 text-[#121516]"
                      >
                        <div
                          className="text-[#121516]"
                          data-icon="Check"
                          data-size="20px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            aria-label="Check icon"
                          >
                            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                          </svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="flex px-4 py-3 justify-center">
              <button  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em]">
                <Link className="truncate">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
