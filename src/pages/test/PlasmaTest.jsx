import Plasma from "../../components/Plasma";

const PlasmaTest = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#0a0a0a",
      }}
    >
      <Plasma
        color="#3b82f6"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
    </div>
  );
};

export default PlasmaTest;
