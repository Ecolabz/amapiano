/* eslint-disable @next/next/no-img-element */
export default function LifeStyle() {
  return (
    <>
      <section className="w-full h-full md:h-[463px] bg-no-repeat bg-cover bg-center bg-event-lifestyle py-[118px] text-center justify-center relative">
        <h3 className=" font-extrabold font-montserat text-[36px] lg:text-[48px] leading-[49px] lg:leading-[59px] text-white">
          AMAPIANO LIFESTYLE EVENTS CALENDAR
        </h3>
        <h3 className=" font-extrabold font-montserat text-[36px] lg:text-[48px] leading-[45px] lg:leading-[59px] text-white">
          EVENTS
        </h3>
        <div className="h-full bg-events-sahdow top-[468px] -left-[122px] bg-no-repeat bg-cover" />
      </section>

      <section className="w-full p-4 py-[100px] lg:px-[206px]">
        <LifeStyleCard />
      </section>
    </>
  );
}

function LifeStyleCard() {
  return (
    <div
      className="w-full bg-AP-blue-100 rounded-[10px] md:rounded-[30px] pt-[89px] px-4 md:pl-[70px] md:pr-[30px]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-[40px]">
        <img
          src="/assets/img_zanzibar.jpg"
          alt="life style"
          className="w-[250px] h-[249px] md:w-[280px] md:h-[350px]"
        />
        <aside className="text-AP-grey-300 font-sansPro font-normal pt-4 text-lg md:text-[28px] md:leading-[35px] tracking-[0.02em]">
          <h3 className="font-[600] font-montserat text-[16px] lg:text-[32px] mb-[24px] leading-[24px] lg:leading-[36px] ">
            Amapiano Lifestyle Summer Vibes Zanzibar 2024
          </h3>
          <p>We are bringing together the finest Amapiano Deejays from South Africa.</p>
        </aside>
      </div>

      <div className="w-full pt-[50px] md:pr-5">
        <p className="text-AP-grey-300 font-sansPro font-normal text-xl lg:text-[28px] md:leading-[35px] tracking-[0.02em]">
          Expect stellar Live Mixes and spectacular DJ sets from your favorite Amapiano Deejays.
        </p>
        <p className="text-AP-grey-300 font-sansPro font-normal text-xl lg:text-[28px] md:leading-[35px] tracking-[0.02em] py-5">
          The main event will take place in at Ycona Luxury Resort Zanzibar
          <br />
          There are no ticket tiers, Everyone is a VIP.
        </p>
      </div>

      <div className="flex justify-center w-full py-[50px]">
        <button className="flex flex-row items-center justify-center py-2 px-8 gap-2 bg-AP-grey-200 rounded-[10px] text-white font-sansPro font-bold text-[20px] leading-[32px] duration-500 transition-all hover:bg-opacity-90">
          Tell Me More
        </button>
      </div>
    </div>
  );
}
