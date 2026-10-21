export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#45484d]">

      {/* PAGE CONTAINER */}
      <section className="mx-auto min-h-screen max-w-[830px] px-[28px] pb-[20px] pt-[50px]">

        {/* HEADING */}
        <div className="text-center">
          <h1 className="text-[40px] font-extrabold leading-tight tracking-[-0.5px]">
            Gallery
          </h1>

          <p className="mt-[16px] text-[16px] leading-5">
            View gallery of our products and make yourself satisfied with our creation.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="mt-[62px] grid grid-cols-2 items-start gap-x-[40px]">

          {/* LEFT COLUMN */}
          <div className="pt-[107px]">

            {/* SCOOTER IMAGE */}
            <div className="relative">
              <h2 className="absolute left-[20px] top-[16px] z-10 text-[16px] font-bold">
                Scooter
              </h2>

              <div className="flex h-[274px] items-center justify-center bg-[#f7f6f5]">
                <img
                  src="/Scooter2.png"
                  alt="Electric scooter"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* GALLERY BUTTONS */}
            <div className="mt-[30px] flex flex-col gap-[15px]">

              <button
                type="button"
                className="h-[53px] w-full rounded-[6px] border border-[#45484d] bg-white text-[16px] font-bold transition-colors hover:bg-[#45484d] hover:text-white"
              >
                Battery Images
              </button>

              <button
                type="button"
                className="h-[53px] w-full rounded-[6px] border border-[#45484d] bg-white text-[16px] font-bold transition-colors hover:bg-[#45484d] hover:text-white"
              >
                Spare Parts Images
              </button>

              <button
                type="button"
                className="h-[53px] w-full rounded-[6px] border border-[#45484d] bg-white text-[16px] font-bold transition-colors hover:bg-[#45484d] hover:text-white"
              >
                Charging Cable Images
              </button>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-[52px]">

            {/* BUILT QUALITY */}
            <div className="relative">
              <h2 className="absolute left-[22px] top-[16px] z-10 text-[16px] font-bold">
                Built Quality
              </h2>

              <div className="flex h-[274px] items-center justify-center bg-[#f7f6f5]">
                <img
                  src="/Built Quality.png"
                  alt="Scooter built quality"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* PARTS */}
            <div className="relative">
              <h2 className="absolute left-[22px] top-[16px] z-10 text-[16px] font-bold">
                Parts
              </h2>

              <div className="flex h-[274px] items-center justify-center bg-[#f7f6f5]">
                <img
                  src="/Parts.png"
                  alt="Scooter parts"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Colors Section */}
<section className="mx-auto w-full max-w-[780px] bg-white -ml-[200px]">

  {/* Heading */}
  <div className="flex h-[100px] w-full flex-col items-center justify-start pt-20 text-center">
    <h2 className="text-[40px] font-bold text-[#45484d]">
      Colors
    </h2>

    <p className="mt-2 text-[16px] text-[#45484d]">
      Checkout our products colors.
    </p>
  </div>

  {/* Main Image */}
 
<div className="relative h-[620px] w-full overflow-visible">
  <img
    src="/Scooter3.png"
    alt="Scooter"
    className="absolute left-1/2 top-1/2 w-[600px] max-w-none -translate-x-1/2 -translate-y-[55%] object-contain"
  />
</div>

  {/* Four Images */}
  <div className="grid grid-cols-4 -ml-40  pb-8 -translate-y-[500px] h-[800] w-[800]">
    <img
      src="/Blue Colour.png"
      alt="Scooter color 1"
      className="h-full w-full object-contain"
    />

    <img
      src="/Green Colour.png"
      alt="Scooter color 2"
      className="h-full w-full object-contain"
    />

    <img
      src="/Red Colour.png"
      alt="Scooter color 3"
      className="h-full w-full object-contain"
    />

    <img
      src="/Black Colour.png"
      alt="Scooter color 4"
      className="h-full w-full object-contain"
    />
   
  </div>
{/* Testimonials Section */}
<section className="relative z-10 w-[400] bg-[#f9f9f9] px-5 pt-5 pb-6 -ml-[30px]">
  <h2 className="mb-20 text-center text-[24px] font-bold text-[#45484d]">
    Testimonials
  </h2>

  <div className="mx-auto grid max-w-[500px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
    <div className="flex min-h-[160px] flex-col items-center border border-[#e7e7e7] bg-white px-3 py-5 text-center shadow-[0_10px_15px_rgba(0,0,0,0.08)]">
      <div className="mb-2 text-[12px] tracking-[1px] text-[#ff7b70]">★★★★★</div>
      <p className="text-[10px] leading-[1.45] text-[#45484d]">
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9e1dc] text-[9px] font-bold text-[#45484d]">SH</div>
        <div className="text-left">
          <p className="text-[8px] font-semibold text-[#45484d]">Serhiy Hipskyy</p>
          <p className="text-[7px] text-[#777]">CEO Universal</p>
        </div>
      </div>
    </div>

    <div className="flex min-h-[160px] flex-col items-center border border-[#e7e7e7] bg-transparent px-3 py-5 text-center">
      <div className="mb-2 text-[12px] tracking-[1px] text-[#ff7b70]">★★★★★</div>
      <p className="text-[10px] leading-[1.45] text-[#45484d]">
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d5e8dc] text-[9px] font-bold text-[#45484d]">JM</div>
        <div className="text-left">
          <p className="text-[8px] font-semibold text-[#45484d]">Justus Menke</p>
          <p className="text-[7px] text-[#777]">CEO Eronaman</p>
        </div>
      </div>
    </div>

    <div className="flex min-h-[160px] flex-col items-center border border-[#e7e7e7] bg-transparent px-3 py-5 text-center">
      <div className="mb-2 text-[12px] tracking-[1px] text-[#ff7b70]">★★★★★</div>
      <p className="text-[10px] leading-[1.45] text-[#45484d]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9e7ef] text-[9px] font-bold text-[#45484d]">BE</div>
        <div className="text-left">
          <p className="text-[8px] font-semibold text-[#45484d]">Britain Eriksen</p>
          <p className="text-[7px] text-[#777]">CEO Universal</p>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-5 flex justify-center gap-2">
    <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-[#bfc1c3] text-[12px] text-[#777]">←</div>
    <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#45484d] text-[12px] text-white">→</div>
  </div>
</section>

{/* Newsletter Section */}
<section className="relative z-10 w-full bg-white px-5 pt-8 pb-8 text-center">
  <h2 className="text-[23px] font-bold leading-tight text-[#45484d] sm:text-[24px]">
    Subscribe To Newsletter
  </h2>

  <p className="mt-1 text-[9px] text-[#45484d]">
    Subscribe to our newsletter to get amazing offers in future.
  </p>

  <form
    action="#"
    className="mx-auto mt-6 flex w-full max-w-[330px] flex-col gap-2 sm:flex-row"
  >
    <input
      type="email"
      placeholder="Enter your email."
      aria-label="Your email address"
      className="h-[36px] min-w-0 flex-1 rounded-[5px] border border-[#f0f0f0] bg-[#fafafa] px-4 text-[9px] text-[#45484d] outline-none focus:border-[#45484d]"
    />
    <button
      type="submit"
      className="h-[36px] rounded-[5px] bg-[#45484d] px-7 text-[9px] text-white transition hover:bg-[#303338]"
    >
      Get start
    </button>
  </form>
</section>

</section>
            </div>

          </div>
        </div>
      </section>
    </main>

  
  );
}