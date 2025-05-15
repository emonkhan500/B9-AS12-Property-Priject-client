import faq from '../../../../public/faq.json';
import Lottie from 'lottie-react';


const Faq = () => {
    return (
        <div className='p-5 md:p-1 lg:p-7 xl:p-10 mt-10 w-full lg:max-w-[1400px] mx-auto'>
            <div className="text-center mb-6 md:mb-14">
        <p className="text-lg mb-2 text-gray-800">
          Your Frequently Ask Questions
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text dark:text-white">
          Everything You Need to Know
        </h3>
        <p className="text-sm text-gray-600 dark:text-white mt-2">
          We’re here to make things clear for you. Your concerns, clarified in
          one place.
        </p>
      </div>
      <div className="flex flex-col-reverse justify-center items-center md:flex-row gap-4 lg:gap-7 xl:gap-10">
        <div className="md:w-1/2 lg:w-3/5">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-orange">
              Can I buy a property directly?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                Yes! Once you see a property you like, go to its Details page and click “Make an Offer”. Just make sure your offer is within the price range mentioned. If the agent accepts, you’ll be able to proceed with payment.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium  dark:text-orange">
              How do I add a property as an agent?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                If you're logged in as an agent, head over to your Dashboard → Add Property. Fill out the form with your property details, set a price range, and upload an image. Once submitted, it will wait for admin verification.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-orange">
              What does "verified" mean on a property?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                It means the admin has reviewed and approved the property details. Only verified properties appear in the public listing and advertisement sections.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-orange">
              Can I review a property I bought?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                Absolutely! After buying or wishlisting a property, go to the Details page and click “Add a Review”. You can leave your feedback and it will show publicly.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-orange">
              How do I manage my wishlisted properties?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                Go to Dashboard → Wishlist. You’ll see all the properties you’ve saved. You can make offers or remove properties from the list anytime.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-orange">
              What happens after I pay for a property?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                After payment, the property status changes to “bought”, and your transaction ID will be displayed. You can view it anytime under Dashboard → Property Bought.


                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div data-aos="zoom-in-up" className="flex relative">
            
            <Lottie animationData={faq} className="w-full " />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Faq;