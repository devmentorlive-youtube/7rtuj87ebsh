export default function PeopleList({ data = [] }) {
  return (
    <>
      <div>displaying {data.length} people</div>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <div className="border p-2  hover:bg-blue-400">
            <div>{item._id}</div>
          </div>
        ))}
      </div>
    </>
  );
}
