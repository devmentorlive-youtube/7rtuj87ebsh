import dbPromise, { jsonify } from "@/modules/db";
import PeopleList from "@/features/people/list";
import withFilter from "@/features/with-filter";
import Layout from "@/features/layout";
import SelectedPersonProvider from "@/features/people/selected-person";

const FilteredPeopleList = withFilter(PeopleList);

export default function Homepage({ people = [] }) {
  return (
    <SelectedPersonProvider>
      <Layout>
        <FilteredPeopleList {...{ people }} />
      </Layout>
    </SelectedPersonProvider>
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
