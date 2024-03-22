const Circle = ({ text }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="lightblue"
        stroke="blue"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="50%"
        style={{
          fontSize: "16px",
          fill: "black",
          textAnchor: "middle",
          alignmentBaseline: "middle",
          zIndex: "2",
        }}
        className="whitespace-nowra"
      >
        {text}
      </text>
    </svg>
  );
};

export default Circle;
