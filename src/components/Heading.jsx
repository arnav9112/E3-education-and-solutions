import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 text-n-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-7">{text}</p>}
    </div>
    
  );
};

export default Heading;
