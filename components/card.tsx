

export default function Card({ title }: {
  title: string;
}) {

  const description = "This is a card component";
  return (
    <div className="bg-gray-200 mx-2 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}