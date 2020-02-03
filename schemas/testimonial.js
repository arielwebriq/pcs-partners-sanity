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
      name: "testimonialimage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number"
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime"
    }
  ]
};
