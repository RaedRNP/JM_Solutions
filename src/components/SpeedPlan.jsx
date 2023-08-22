import "./speedplan.css";

export default function SpeedPlan({ children, speed }) {
  let fullPlan = 600; // this variable is if the maximum plan is 600MB in that case is the 100% of velocity they can sell

  let progressValue = 0;
  let progressEndValue = (speed * 100) / fullPlan;

  let progress = setInterval(() => {
    progressValue += 0.1;
    if (progressValue >= progressEndValue) {
      clearInterval(progress);
    }
  });

  return (
    <div
      className="circular-progress mx-28"
      style={{
        background: `conic-gradient(
            #0002f8 ${progressValue * 3.6}deg,
            #2db2fd ${progressValue * 3.6}deg
        )`,
      }}
    >
      {children}
    </div>
  );
}
