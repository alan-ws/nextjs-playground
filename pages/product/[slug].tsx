export function getStaticPaths() {
  console.log('setitng paths')
  return { paths: [{ params: { slug: 1 } }], fallback: true };
}

export async function getStaticProps() {
  console.log("requesting data");
  const result = await fetch(
    "https://639040c665ff4183110d7bdd.mockapi.io/products"
  );
  const data = await result.json();

  return {
    props: {
      data: data,
    },
  };
}

export default function Product({
  data,
}: {
  data: { createdAt: string; name: string; id: string }[];
}) {
  console.log(data);
  return (
    <div>
      <h1>Product: 1</h1>
      {data.map((value, index) => {
        return <p key={index}>{value.name}</p>;
      })}
    </div>
  );
}
