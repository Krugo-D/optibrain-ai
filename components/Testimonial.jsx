function Testimonial({ quote, author, role }) {
  return (
    <div>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <cite>
        {author} - {role}
      </cite>
    </div>
  );
}

export default Testimonial;
