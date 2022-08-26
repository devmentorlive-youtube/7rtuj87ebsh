import { useState } from "react";

export default function withFilter(Component) {
  return function WrappedComponent({ data, ...rest }) {
    const [query, setQuery] = useState("");

    return (
      <div className="flex flex-col gap-4">
        <div className="border p-8">
          <div className="font-bold">Filters</div>
          <div>
            <input
              type="text"
              className="bg-gray-700 p-3 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full">
          <Component
            {...{
              data: data
                .filter((item) =>
                  item._id.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 10),
              ...rest,
            }}
          />
        </div>
      </div>
    );
  };
}
