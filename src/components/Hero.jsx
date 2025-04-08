export const Hero = () => {
  return (
    <div
      className='
      hero
    min-h-[20vh]           // mobile
    md:min-h-[50vh]       // desktop
    bg-center
    bg-cover
'
      style={{ backgroundImage: "url('/banner.jpg')" }}
    ></div>
  );
};
