/* eslint-disable @next/next/no-img-element */
export default function LifeStyle() {
  return (
    <>
      <section className="w-full h-full md:h-[463px] bg-no-repeat bg-cover bg-center bg-event-lifestyle py-[118px] text-center justify-center relative">
        <h3 className=" font-extrabold font-montserat text-[36px] lg:text-[48px] leading-[49px] lg:leading-[59px] text-white">
          AMAPIANO LIFESTYLE
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
      className="w-full bg-AP-blue-100 rounded-[10px] md:rounded-[30px] pt-[89px] px-4 md:pl-[92px] md:pr-[48px]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[62px]">
        <img
          src="/assets/img_zanzibar.png"
          alt="life style"
          className="w-[250px] h-[249px] md:w-[360px] md:h-[449px]"
        />
        <aside className="text-AP-grey-300 font-sansPro font-normal pt-4 text-lg md:text-[28px] md:leading-[35px] tracking-[0.02em]">
          The Maiden edition of Amapiano Lifestyle will bring together the best Amapiano artists from around Africa.
          Expect world-class live DJ performances and DJ sets from your favorite Amapiano Deejays.
        </aside>
      </div>

      <div className="w-full pt-[50px] md:pr-5">
        <p className="text-AP-grey-300 font-sansPro font-normal text-xl lg:text-[28px] md:leading-[35px] tracking-[0.02em]">
          The will be sent to Lifestyle Fest ticket holders a week before the festival opens.
        </p>
        <p className="text-AP-grey-300 font-sansPro font-normal text-xl lg:text-[28px] md:leading-[35px] tracking-[0.02em] py-5">
          The main event will take place in a secluded beach somewhere in Nungwi.
        </p>
        <p className="text-AP-grey-300 font-sansPro font-normal text-xl lg:text-[28px] md:leading-[35px] tracking-[0.02em]">
          There will three ticket tiers, Regular, Golden and VIP ticket holders which will give holders access to the
          event including exclusive areas like a private beach.
        </p>
      </div>

      <div className="flex justify-end w-full py-[50px]">
        <button className="flex flex-row items-center justify-center py-2 px-8 gap-2 bg-AP-grey-200 rounded-[10px] text-white font-sansPro font-bold text-[20px] leading-[32px] duration-500 transition-all hover:bg-opacity-90">
          Learn more
        </button>
      </div>
    </div>
  );
}
