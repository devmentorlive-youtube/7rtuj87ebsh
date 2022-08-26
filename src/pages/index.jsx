import dbPromise, { jsonify } from "@/modules/db";
import PeopleList from "@/features/people/list";
import withFilter from "@/features/with-filter";
import Layout from "@/features/layout";

const FilteredPeopleList = withFilter(PeopleList);

export default function Homepage({ people = [] }) {
  return (
    <Layout>
      <FilteredPeopleList {...{ data: people }} />
    </Layout>
  );
}

export async function getServerSideProps(req) {
  const people = await (
    await dbPromise
  )
    .db()
    .collection("people")
    .aggregate([
      {
        $match: {},
      },
      {
        $limit: 100,
      },
    ])
    .toArray();

  return {
    props: {
      people: jsonify(people),
    },
  };
}
