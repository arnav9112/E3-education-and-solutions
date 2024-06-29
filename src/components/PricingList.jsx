import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[2rem] w-full justify-around">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="
          hover:scale-105 ease-in-out transition-all
          flex-1 min-h-max px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <div className="flex items-center justify-center h-[200px] mb-6">
            {item.price && (
              <img
                src={item.price}
                alt={item.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>

          <p className="body-2 mb-3 text-n-13/50">{item.description}</p>

          {/* <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default PricingList;
