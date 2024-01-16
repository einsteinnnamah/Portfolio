import React from 'react'
import Header from '../Components/Header'
import Swapgomain from '../assets/Swapgofull.png'
import persona1 from '../assets/persona1.png'
import persona2 from '../assets/persona2.png'
import scope from '../assets/scope.png'
import home from '../assets/swapgo/Home.png'
import Ask from '../assets/swapgo/Ask.png'
import Offer from '../assets/swapgo/Offer.png'
import Transaction from '../assets/swapgo/Transactions.png'
const Swapgo = () => {
  return (
    <div>
    <Header />
    <div className='max-w-[1440px] mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 flex flex-col justify-between'>
        <div className='text-white text-[20px] md:text-[28px] lg:text-[38px] mt-[20px] mb-[20px]'>
          Swapgo- 
          The money app that gives you absolute control over your exchange rate 
          <img src={Swapgomain} />
        </div>
        <div className=' flex-col md:flex-row gap-5 flex justify-between'>
          <div>
          <h4 className='font-bold text-white md:text-[22px] lg:text-[24px]  text-[20px]'>Role/team</h4>
          <p className='text-[16px] md:w-[450px] text-[#E5E5EA] md:text-[18px] lg:text-[20px]'>Led the design efforts for the mobile app & website, working closely with a with the founder, and the engineering team.</p>
          </div>
          <div>
            <h4 className='text-white text-[20px] md:text-[22px] lg:text-[24px]  font-bold'>Timeline</h4>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[20px]'>Feb-Mar 2023</p>
          </div>
          <div>
            <h4 className='text-white text-[20px] md:text-[22px] lg:text-[24px] font-bold'>Industry</h4>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[20px]'>Fintech</p>
          </div>
        </div>
        <div className='text-white mt-[20px]'>
          <h3 className='font-bold text-[20px] mb-[5px] md:text-[22px] lg:text-[26px]'>The why behind Swapgo</h3>
        <p className=' text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px] '>As of 2021, there are approximately 178,000 Nigerians living in the UK, comprising students, skilled workers, business owners, and their dependents. In 2022, 34,000 Nigerian students were granted study visas, accompanied by about 38,000 dependents. Additionally, 9,000 Nigerians received work visas, bringing 8,500 dependents.</p>
        <p className=' text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>Nigerian migrants worldwide share a common need to send money home, regardless of their status. The prevalent challenges they face include high remittance costs, unfavorable exchange rates, and slow transactions. Many resort to informal peer-to-peer exchanges on platforms like WhatsApp, Telegram, and Facebook. However, this method poses trust issues, fraud risks, unfavorable rates, and slow transactions.</p>
        </div>
        <div>
          <h3 className='text-white text-[20px] mt-[20px] font-bold mb-[5px] md:text-[22px] lg:text-[26px]'>What problem is Swapgo solving?</h3>
          <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>Swapgo core objective is to make sell or buy the British pounds using a peer-to-peer method while giving you absolute control over the exchange rates </p>
        </div>
        {/* <div>
          <h3 className='text-white font-bold text-[24px] mt-[20px] mb-[5px]'>Ideal user profile</h3>
          <p></p>
          <img src={persona1} />
          <img className='mt-[20px]' src={persona2} />
        </div> */}
        <div>
          <h3 className='text-white text-[24px] mt-[20px] font-bold mb-[5px]'>Key Features & Scope</h3>
          <img src={scope} />
        </div>
        <div>
          <h3 className='text-white text-[24px] mt-[20px] font-bold mb-[5px]'>Main screens</h3>
          <div>
            <h3 className='text-white text-[20px] font-bold mb-[5px] mt-[20px] md:text-[22px] lg:text-[26px]'>Home</h3>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>
On Swapgo's home screen, users experience swift access to funds, intuitive navigation, and seamless fund management. The platform enables easy addition or removal of funds, giving users complete control over their financial transactions within a user-friendly interface. </p>
            <img src={home} />
          </div>
          <div>
          <h3 className='text-white text-[20px] font-bold mt-[20px] md:text-[22px] lg:text-[26px]'>Trade</h3>
           <div>
           <h3 className='text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold mt-[10px]'>Ask</h3>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>In Swapgo's "Ask" section, users effortlessly purchase pounds at their preferred exchange rate. The key feature is the ability to view multiple asks, enabling users to swiftly compare and choose the most advantageous exchange rate. It provides a user-friendly avenue to secure the best deals on currency exchanges. </p>
            <img src={Ask} />
           </div>
           <div>
           <h3 className='text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold mt-[20px]'>Offer</h3>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>In the "Offer" section on Swapgo, users can personalize their currency sales by requesting to sell a specific amount at a designated exchange rate to pounds. Each offer includes a minimum sell limit, providing users with control and flexibility in their transactions. </p>
            <img src={Offer} />
           </div>
          </div>
          <div>
            <h3 className='text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold mt-[20px]'>Transactions</h3>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>The "Transactions" section on Swapgo provides users with a thorough overview of their complete transaction history, encompassing purchases, sales, and fund management activities. This feature offers a transparent and accessible record, allowing users to effortlessly track and review their financial interactions within the platform. </p>
            <img src={Transaction} />
          </div>
          <div>
            <h3 className='text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold mt-[20px]'>Key takeaways</h3>
            <p className='text-[#E5E5EA] text-[16px] md:text-[18px] lg:text-[24px] mb-[5px]'>we designed the platform to tackle the unique challenges of currency exchange. In the "Ask" section, users easily find the best deals by comparing various offers. The "Offer" section gives a personalized touch, setting minimum sell limits. This design approach is all about meeting user needs and making the platform work well in the world of currency exchange.





</p>
          </div>
          <div>
            <h3 className='text-white text-[18px] md:text-[20px] lg:text-[24px] font-bold mt-[20px]'>View prototype</h3>
            <a className='text-[#E5E5EA] underline-offset-1 underline' href='https://www.figma.com/proto/26nOFH3TCp1l8LypfQ9CW0/SwapGo-(Copy)?page-id=218%3A226&type=design&node-id=369-1108&viewport=362%2C776%2C0.48&t=zifclUV1OyKx8ek8-1&scaling=scale-down&starting-point-node-id=369%3A1108&show-proto-sidebar=1&mode=design' target='_blank'>Link here</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Swapgo