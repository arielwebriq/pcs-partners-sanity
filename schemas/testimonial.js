export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "job",
      title: "Job",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "rating",
      title: "Rating",
      type: "number"
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ]
};
