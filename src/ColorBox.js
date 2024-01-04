export function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "170px",
    backgroundColor: color
  };
  return (
    <div style={styles}></div>
  );
}
