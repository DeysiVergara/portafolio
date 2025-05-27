export const Hero = () => {
  return (
    <div
      className='
      hero
    min-h-[17vh]           // mobile
    md:min-h-[50vh]       // desktop
    bg-center
    bg-cover
'
      style={{ backgroundImage: "url('/banner.png')" }}
    ></div>
  );
};
