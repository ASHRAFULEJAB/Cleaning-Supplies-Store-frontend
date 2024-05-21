import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[100%] mx-auto">
      <Image
        src="https://media1.tenor.com/m/swTDQJ85dDEAAAAC/aaaa.gif"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
