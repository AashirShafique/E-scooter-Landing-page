
import Link from "next/link";
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-[#45484d]">
    
      {/* ===================================================== */}
      {/* PAGE CONTAINER                                       */}
      {/* ===================================================== */}

      <section className="mx-auto min-h-screen max-w-[1100px] bg-white px-[15px] py-[48px]">

        {/* ================================================= */}
        {/* PAGE HEADING                                      */}
        {/* ================================================= */}

        <div className="text-center">

          <h1
            className="
              text-[40px]
              font-extrabold
              leading-none
              tracking-[-0.5px]
              text-[#45484d]
            "
          >
            Multiple Accessories
          </h1>

          <p
            className="
              mt-[25px]
              text-[15px]
              font-normal
              text-[#45484d]
            "
          >
            There are multiple modes for the scooter for your multiple needs.
          </p>

        </div>


        {/* ================================================= */}
        {/* GOLF BAG ROCK                                     */}
        {/* ================================================= */}

        <div className="mt-[100px] grid grid-cols-2 items-center">

          {/* ---------------- LEFT: TEXT ---------------- */}

          <div className="pl-[0px]">

            <h2
              className="
                text-[25px]
                font-extrabold
                leading-none
                tracking-[-0.5px]
                text-[#45484d]
              "
            >
              Golf Bag Rock
            </h2>


            {/* FEATURES */}

            <div className="mt-[20px] flex flex-col gap-[20px]">

              {/* Material */}
              <Feature text="Material : Aluminium alloy" />

              {/* Color */}
              <Feature text="Color : Black" />

              {/* Capacity */}
              <Feature text="Capacity : 45lbs" />

              {/* Ease */}
              <Feature text="Ease : Steady & adjustable" />

            </div>

          </div>


          {/* ---------------- RIGHT: IMAGE ---------------- */}

          <div className="flex h-[250px] items-center justify-center">

            <img
              src="/image.png"
              alt="Golf bag accessory"
              className="h-100 w-100 object-contain"
            />

 <img
              src="/golfbike.png"
              alt="Golf bag accessory"
              className="h-100 w-100 object-contain"
            />
          </div>

        </div>


        {/* ================================================= */}
        {/* SHOPPING RACK                                     */}
        {/* ================================================= */}

        <div className="mt-[45px] grid grid-cols-2 items-center">

          {/* ---------------- LEFT: IMAGE ---------------- */}

          <div className="flex h-[250px] items-center justify-center gap-[30px]">

             <img
              src="/Rac2.png"
              alt="Shopping rack accessory"
              className="h-70 w-70 object-contain"
            />
            
            <img
              src="/Rac1.png"
              alt="Shopping rack accessory"
              className="h-50 w-50 object-contain"
            />        

          </div>


          {/* ---------------- RIGHT: TEXT ---------------- */}

          <div className="pl-[100px] py-[10px]">

            <h2
              className="
                text-[40px]
                font-extrabold
                leading-none
                tracking-[-0.5px]
                text-[#45484d]
              "
            >
              Shopping Rack
            </h2>


            {/* FEATURES */}

            <div className="mt-[40px] flex flex-col gap-[20px]">

              <Feature text="Material : Aluminium alloy" />

              <Feature text="Color : Black" />

              <Feature text="Capacity : 45lbs" />

              <Feature text="Ease : Quick & adjustable" />

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* MORE ACCESSORIES BUTTON                           */}
        {/* ================================================= */}

        <div className="mt-[42px] flex justify-center">

          <button
            className="
              h-[45px]
              w-[267px]
              rounded-[5px]
              border
              border-[#45484d]
              bg-white
              text-[14px]
              font-bold
              text-[#45484d]
              transition-all
              hover:bg-[#45484d]
              hover:text-white
            "
          >
            More Accessories Coming Soon
          </button>

        </div>

      </section>

    </main>
  );
}


/* ========================================================= */
/* FEATURE COMPONENT                                         */
/* ========================================================= */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center">

      {/* Checkmark icon */}
      <svg
        viewBox="0 0 40 40"
        className="h-[25px] w-[25px] shrink-0"
        fill="none"
      >

        {/* Hexagon */}
        <path
          d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
          stroke="#45484d"
          strokeWidth="1.5"
        />

        {/* Check */}
        <path
          d="M11 20L17 26L29 13"
          stroke="#45484d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </svg>


      {/* Text */}
      <span
        className="
          ml-[9px]
          text-[10px]
          font-normal
          text-[#45484d]
        "
      >
        {text}
      </span>

    </div>
  );
}