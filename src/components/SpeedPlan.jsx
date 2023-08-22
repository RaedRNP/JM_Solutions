import "./speedplan.css";

export default function SpeedPlan({ children, speed }) {
  let fullPlan = 600; // this variable is if the maximum plan is 600MB in that case is the 100% of velocity they can sell

  let progressEndValue = (speed * 100) / fullPlan;

  return (
    <div
      className="circular-progress mx-28"
      style={{
        background: `conic-gradient(
            #0002f8 ${progressEndValue * 3}deg,
            #2db2fd ${(progressEndValue * 3.6)+10}deg
        )`,
      }}
    >
      {children}
    </div>
  );
}
