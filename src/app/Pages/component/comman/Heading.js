export function H1({ heading, className }) {
    return (
      <span className={`text-[calc(30px+.8vw)] ${className || "p-0"}`}>
        {" "}
        {heading}
      </span>
    );
  }
  export function H2({ heading, className }) {
    return (
      <span className={`text-[calc(20px+.8vw)] ${className || "font-semibold"}`}>
        {" "}
        {heading}
      </span>
    );
  }
  export function H3({ heading, className }) {
    return (
      <span className={`text-[calc(15px+.6vw)] ${className || "font-semibold"} `}>
        {" "}
        {heading}
      </span>
    );
  }
  export function H4({ heading, className }) {
    return (
      <span className={`text-[calc(10px+.4vw)] ${className || "font-semibold"} `}>
        {" "}
        {heading}
      </span>
    );
  }
  export function H5({ heading, className }) {
    return (
      <span className={`text-[calc(10px+.3vw)] ${className || ""} `}>
        {" "}
        {heading}
      </span>
    );
  }
  