

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const year = new Date().getFullYear();
  return (
    <footer className='bg-stone-500 text-white font-bold text-center px-10 py-5 border-t-4 border-red-500 mt-20 '>
      <h2 className="text-md font-bold">Flink-Pizza & Co.</h2>
      <div className="flex flex-col text-md mb-5">
        {isOpen ? (
          <p> We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
          online.</p>
        ) : (
          <p >
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </div>
      <div className="pt-4 text-center border-t border-white text-white text-sm">
        &copy; {year} delafuentej. This in a project as part of The Ultimate React Course 2025 from Jonas Schmedt.
      </div>

      
    </footer>
  )
}

export default Footer;