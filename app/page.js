import HeroSection from "@/components/HeroSection/HeroSection";
import heroImgWithShape from "@/public/assets/hero-with-shape.png";
import aboutImgWithShape from "@/public/assets/about-with-shape.png"
import AboutSection from "@/components/AboutSection/AboutSection";
import CTASection from "@/components/CTASection/CTASection";
export default function Home() {
  const heroData = {
    welcome: "Hi I am",
    name: "Muhammad Umair",
    designationLine1: "UI & UX",
    designationLine2: "Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
    btnLink: "#contact",
    img: heroImgWithShape,
  };
  const aboutData = {
    sectionTitle: "About Me",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
    img:aboutImgWithShape,
    alt: "Muhammad Umair",
    skills: [
      {
        name: "UX",
        percentage: 90,
      },
      {
        name: "Website Design",
        percentage: 70,
      },
      {
        name: "Design",
        percentage: 95,
      }, 
      {
        name: "Graphic Design",
        percentage: 88,
      }, 
    ],
  };
  const ctaData={
    sectionTitle: "Lets Design Together",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
  }
  return (
    <main>
      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData}/>
      <CTASection ctaData={ctaData}/>
    </main>
  );
}
