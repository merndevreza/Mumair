import SectionTitle from "../SectionTitle";

const CTASection = ({ctaData}) => {
   return (
      <div>
         <SectionTitle title={ctaData?.sectionTitle} subtitle={ctaData?.subtitle} />
      </div>
   );
};

export default CTASection;