export const Projects = ({ project }) => {
  const { name, image } = project;
  const handleLink = (path) => {
    open(path, "_blank");
  };
  return (
    <div
      className='md:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer'
      onClick={() => handleLink("https://matromol.com/")}
    >
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <img
            src={`/${image}.png`}
            alt='imagen proyecto'
            className='w-full object-cover'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h3 className='card-title text-black font-bold uppercase'>{name}</h3>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </div>
  );
};
