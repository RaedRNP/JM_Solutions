import "./speedplan.css";

export default function SpeedPlan({ children, speed }) {
  let fullPlan = 600; // this variable is if the maximum plan is 600MB in that case is the 100% of velocity they can sell

  let progressEndValue = (speed * 100) / fullPlan;

  return (
    <div
      className="circular-progress"
      style={{
        background: `conic-gradient(
            #3da9fc ${progressEndValue * 3}deg,
            #094067 ${progressEndValue * 3.6 + 30}deg
        )`,
      }}
    >
      {children}
    </div>
  );
}
