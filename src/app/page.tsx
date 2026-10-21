import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#44474b]">

      {/* ================= HEADER ================= */}
      <header className="h-[68px] border-b border-[#e7e7e7] bg-white">
        <div className="relative flex h-full w-full items-center px-[34px]">

          {/* ================= LOGO ================= */}
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[39px]">

            {/* Products */}
           <a
  href="/product"
  className="flex items-center gap-[5px] text-[20px] font-normal tracking-[0.1px] text-[#34373b] transition-colors hover:text-black"
>
  PRODUCTS

  <span className="relative top-[-1px] text-[20px]">
    ⌄
  </span>
</a><Link
  href="/gallery"
  className="text-[20px] font-normal text-[#34373b] transition-colors hover:text-black"
>
  GALLERY
</Link>

            <a
              href="#"
              className="text-[20px] font-normal tracking-[0.1px] text-[#34373b] transition-colors hover:text-black"
            >
              CONTACT
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex h-full items-center">

            {/* LOGIN */}
            <a
              href="#"
              className="mr-[29px] text-[20px] font-normal text-[#34373b] transition-colors hover:text-black"
            >
              LOG IN
            </a>

            {/* SIGN UP */}
            <button
              className="
                h-[32px]
                w-[80px]
                rounded-[3px]
                bg-[#45484d]
                text-[20px]
                font-normal
                text-white
                shadow-[0_5px_12px_rgba(0,0,0,0.16)]
                transition-all
                hover:bg-[#36383c]
              "
            >
              SIGN UP
            </button>

          </div>

        </div>
      </header>

       {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}

      <section className="relative min-h-[530px] overflow-hidden bg-white">

        {/* ======================================================= */}
        {/* GRAY CIRCLE / BACKGROUND SHAPE                          */}
        {/* ======================================================= */}

        <div
          className="
            absolute
            right-[-150px]
            top-[65px]
            h-[500px]
            w-[750px]
            rounded-full
            bg-[#dedede]
          "
        />


        {/* ======================================================= */}
        {/* LEFT CONTENT                                             */}
        {/* ======================================================= */}

        <div className="absolute left-[59px] top-[62px] z-10">

          {/* Small heading */}
          <h1 className="text-[60px] font-light leading-[0.98] tracking-[-2px] text-[#45484d]">
            LET'S RIDE
          </h1>

          {/* Main heading */}
          <h2 className="mt-[4px] text-[57px] font-bold leading-[0.98] tracking-[-2px] text-[#45484d]">
            THE FUTURE.
          </h2>


          {/* Horizontal Line */}
          <div className="mt-[65px] h-[4px] w-[222px] bg-[#45484d]" />


          {/* Description */}
          <p className="mt-[38px] max-w-[285px] text-[15px] font-normal leading-[1.55] text-[#45484d]">
            Simple and sleek design with users
            <br />
            in mind.
          </p>


          {/* Bottom actions */}
          <div className="mt-[42px] flex items-center">

            {/* BUY NOW */}
            <div className="flex items-center">

              <button
                className="
                  flex
                  h-[46px]
                  w-[50px]
                  items-center
                  justify-center
                  bg-[#45484d]
                  text-[22px]
                  font-light
                  text-white
                  transition-all
                  hover:bg-[#33363a]
                "
              >
                →
              </button>

              <button
                className="ml-[20px] text-[20px] font-semibold text-[#303338]"
              >
                Buy now
              </button>

            </div>


            {/* VIDEO */}
<div className="ml-[80px] flex items-center">

  {/* Text */}
  <div className="text-[12px] font-medium leading-[1.35] text-[#45484d]">
    Watch our
    <br />
    video how
    <br />
    it works
  </div>

  {/* Circular text */}
  <div className="relative ml-[12px] h-[62px] w-[62px]">

    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
    >

      {/* Invisible circular path */}
      <defs>
        <path
          id="circlePath"
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
      </defs>

      {/* Circular text */}
      <text
        className="fill-[#74777b]"
        fontSize="12"
        fontWeight="600"
        letterSpacing="4"
      >
        <textPath
          href="#circlePath"
          startOffset="0%"
        >
          SEE • HOW • IT • WORKS •
        </textPath>
      </text>

    </svg>

    {/* Play button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="
          ml-[2px]
          text-[9px]
          text-[#45484d]
        "
      >
        ▶
      </span>
    </div>

  </div>

</div>

              </div>

            </div>

          
    
        {/* ======================================================= */}
        {/* SCOOTER IMAGE                                            */}
        {/* ======================================================= */}

        <div className="absolute right-[200px] top-[28px] z-20 w-[660px]">

          <img
            src="/scooter.png"
            alt="Electric scooter"
            className="h-auto w-full object-contain"
          />

        </div>



</section>

{/* ========================================================= */}
{/* SPECS / STATS SECTION                                     */}
{/* ========================================================= */}

<section className="bg-white px-[58px] py-[40px]">

  <div className="mx-auto grid max-w-[1200px] grid-cols-6 gap-[38px]">

    {/* 105 lbs */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          105
        </span>
        <span className="ml-[5px] text-[12px] font-semibold text-[#45484d]">
          lbs
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Net Weight
      </p>
    </div>


    {/* 26 mph */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          26
        </span>
        <span className="ml-[5px] text-[12px] font-semibold text-[#45484d]">
          mph
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Top Speed
      </p>
    </div>


    {/* 38 miles */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          38
        </span>
        <span className="ml-[5px] text-[12px] font-semibold text-[#45484d]">
          miles
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Max Range
      </p>
    </div>


    {/* 89 nm */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          89
        </span>
        <span className="ml-[5px] text-[12px] font-semibold text-[#45484d]">
          nm
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Max Torques
      </p>
    </div>


    {/* 22% slope */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          22%
        </span>
        <span className="ml-[5px] text-[12px] font-semibold text-[#45484d]">
          slope
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Hill Climbing
      </p>
    </div>


    {/* 2x */}
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[4px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-baseline">
        <span className="text-[28px] font-extrabold leading-none text-[#45484d]">
          2x
        </span>
      </div>

      <p className="mt-[14px] text-[10px] text-[#45484d]">
        Hydraulic Disc Brakes
      </p>
    </div>

  </div>

</section>

{/* ========================================================= */}
{/* PRODUCT INFORMATION                                      */}
{/* ========================================================= */}


<section className="bg-white px-[60px] py-[70px]">

  {/* Heading */}
  <div className="text-center">

    <h2 className="text-[34px] font-extrabold tracking-[-1px] text-[#45484d]">
      Product Information
    </h2>

    <p className="mt-[22px] text-[14px] font-bold text-[#45484d]">
      Our Scooter has following unique design and technology features:
    </p>

  </div>


  {/* Main Content */}
  <div className="mx-auto mt-[65px] flex max-w-[1100px] items-center justify-between">

    {/* ===================================================== */}
    {/* PRODUCT IMAGE                                         */}
    {/* ===================================================== */}

    <div className="w-[600px]">
     <img
  src="/Scooter1.png"
  alt=""
  className="h-[600px] w-[1000px]"
/>
    </div>


    {/* ===================================================== */}
    {/* FEATURES                                              */}
    {/* ===================================================== */}

    <div className="flex w-[470px] flex-col gap-[25px]">

      {/* Feature 1 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          Lightweight aircraft grade aluminium frame
        </p>
      </div>


      {/* Feature 2 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          Car grade lithium battery
        </p>
      </div>


      {/* Feature 3 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          Self-balanced
        </p>
      </div>


      {/* Feature 4 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          Plug n play
        </p>
      </div>


      {/* Feature 5 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          Quick release adapter
        </p>
      </div>


      {/* Feature 6 */}
      <div className="flex items-center">
        <div className="flex h-[38px] w-[38px] items-center justify-center">
          <span className="text-[30px] text-[#45484d]">
            ♢
          </span>
        </div>

        <p className="ml-[14px] text-[20px] text-[#45484d]">
          RFID key card
        </p>
      </div>


    </div>

  </div>

</section>

{/* ========================================================= */}
{/* HIGH EFFICIENCY MOTOR                                    */}
{/* ========================================================= */}

<section className="bg-white px-[40px] py-[70px]">

  {/* ================= HEADING ================= */}

  <div className="text-center">

    <h2
      className="
        text-[44px]
        font-extrabold
        leading-[1.1]
        tracking-[-1.5px]
        text-[#45484d]
      "
    >
      High Efficiency Motor
    </h2>

    <p
      className="
        mt-[28px]
        text-[16px]
        font-normal
        text-[#45484d]
      "
    >
      More torque for powerful riding with 22% maximum hill climbing capability.
    </p>

  </div>


  {/* ================= MOTOR IMAGE ================= */}

  <div className="mx-auto mt-[70px] w-full max-w-[1000px]">

    <img
      src="/motor.png"
      alt="High efficiency motor"
      className="h-auto w-full object-contain"
    />

  </div>

</section>

    </main>
  );
}