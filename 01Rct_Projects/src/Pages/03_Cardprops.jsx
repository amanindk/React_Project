import Card from "../components/03_Tailwindprops/Card";

function Cardprops() {
  let myobj = {
    username: "aman",
    age: 22,
    // btntext: "visit",
  };
  // let newarr = [1, 2, 3];
  return (
    <div>
      <h1 className="text-3xl bg-green-500 text-white p-4 rounded-xl mb-4 top-0 font-bold underline">
        Tailwind Css
      </h1>
      <Card username="Aman" btntext="visit profile" />
      <br />
      <Card username="Deep" btntext="login" />
      <br />
      {/* <Card some={newarr} /> */}
      <Card username="Rani" btntext="register" some={myobj} />
    </div>
  );
}

export default Cardprops;
