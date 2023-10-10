import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
