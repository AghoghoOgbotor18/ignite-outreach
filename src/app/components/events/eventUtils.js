export function prepareEvents(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prepared = events.map((event) => ({
    ...event,
    when: new Date(`${event.date}T00:00:00`),
  }));

  const upcoming = prepared
    .filter((event) => event.when >= today)
    .sort((a, b) => a.when - b.when);

  const past = prepared
    .filter((event) => event.when < today)
    .sort((a, b) => b.when - a.when);

  return {
    upcoming,
    past,
  };
}

export function formatEventDate(date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getEventDay(date) {
  return date.getDate();
}

export function getEventMonth(date) {
  return date.toLocaleDateString("en-GB", {
    month: "short",
  });
}

/*
 * Groups events by month and year.
 */
export function groupEventsByMonth(events) {
  const groups = {};

  events.forEach((event) => {
    const key = `${event.when.getFullYear()}-${String(
      event.when.getMonth() + 1
    ).padStart(2, "0")}`;

    if (!groups[key]) {
      groups[key] = {
        key,
        year: event.when.getFullYear(),
        month: event.when.toLocaleDateString("en-GB", {
          month: "long",
        }),
        events: [],
      };
    }

    groups[key].events.push(event);
  });

  return Object.values(groups);
}