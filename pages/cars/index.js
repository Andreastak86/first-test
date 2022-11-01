import Link from "next/link";

export default function CarsList() {
  return (
    <>
      <h1>Cars List</h1>
      <p>Tesla</p>
      <p>Ford</p>
      <p>Lambo</p>
      <Link href='/'>Back Home</Link>
    </>
  );
}
