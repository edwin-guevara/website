export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  children
}) {
  return (
    // Paste the resume item <section> HTML here over lines 10 and 11
    <section>
      <h3>
        {name} | {dept}
      </h3>
      <h4>
        {position} <time>{startDate}</time> - <time>{endDate}</time>
      </h4>{" "}
      <ul>{children}</ul>
    </section>
  );
}
