function Liste1() {
  const Liste = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <ul>
        {Liste.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Liste1;
