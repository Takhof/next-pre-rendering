import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchEvents = async (e) => {
    const category = e.target.value;
    const response = await axios.get(
      `http://localhost:4000/events?category=${category}`
    );
    const data = response.data;
    setEvents(data);
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchEvents} value="sports">
        sort by sports
      </button>
      <button onClick={fetchEvents} value="tech">
        sort by tech
      </button>
      <h1>List of events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category = ${category}` : "";
  const response = await axios.get(
    `http://localhost:4000/events?${queryString}`
  );
  const data = response.data;

  return {
    props: {
      eventList: data,
    },
  };
}
