import Image from "next/image";
import heroImg from "../../assets/hero_img.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero bg-base-200 p-30 container mx-auto rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
        <Image
          alt="Hero Img"
          src={heroImg}
          className="max-w-sm rounded-lg shadow-2xl "
        />
        <div>
          <h1 className="text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h1>
          <Link href="/books">
            <button className="btn btn-primary text-[#ffff] text-[20px] bg-[#23BE0A]">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
