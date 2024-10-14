
const SectionTitle = ({title,subtitle,leftAlignment}) => {
   return (
      <div className={`space-y-4 ${leftAlignment ? " text-center lg:text-left": "text-center"}`}>
         <h2 className="text-[38px] md:text-[50px] xl:text-[65px] font-bold">{title}</h2>
         <p className="md:text-[21px] mx-auto lg:mx-0 text-center max-w-[730px] lg:text-justify">{subtitle}</p>
      </div>
   );
};

export default SectionTitle;