import MarkdownInput from "sanity-plugin-markdown";
export default {
  name: "listing",
  title: "Property Listing",
  type: "document",
  fields: [
    {
      name: "UnparsedAddress",
      title: "Full Address (address, city, state, country abbr., zip code)",
      type: "string"
    },
    {
      name: "City",
      title: "City",
      type: "string"
    },
    {
      name: "StateOrProvince",
      title: "State or Province",
      type: "string"
    },
    {
      name: "Country",
      title: "Country (Country abbr)",
      type: "string"
    },
    {
      name: "PostalCode",
      title: "Zip or Postal code",
      type: "string"
    },
    {
      name: "BedroomsTotal",
      title: "Total Bedrooms",
      type: "number"
    },
    {
      name: "BathroomsTotalInteger",
      title: "Total Bathrooms",
      type: "number"
    },
    {
      name: "StoriesTotal",
      title: "Stories Total",
      type: "string"
    },
    {
      name: "LotSizeSquareFeet",
      title: "Lot Size - Square Feet",
      type: "number"
    },
    {
      name: "LotSizeAcres",
      title: "Lot Size - Acres",
      type: "number"
    },
    {
      name: "description",
      title: "Description",
      type: "markdown"
    },
    {
      name: "Media",
      title: "Upload Images",
      type: "array",
      of: [{ type: "image" }]
    },
    {
      name: "InteriorFeatures",
      title: "Interior Features Description",
      type: "text"
    },
    {
      name: "ListAgentMlsId",
      title: "List Agent MlS ID",
      type: "number"
    },
    {
      name: "ListPrice",
      title: "Listing Price",
      type: "number"
    },
    {
      name: "BathroomsFull",
      title: "Number of Full Bathrooms",
      type: "number"
    },
    {
      name: "YearBuilt",
      title: "Years Built",
      type: "number"
    },
    {
      name: "PropertyType",
      title: "Property Type",
      type: "string"
    },
    {
      name: "PropertySubType",
      title: "Sub Property Type",
      type: "string"
    },
    {
      name: "StandardStatus",
      title: "Status",
      type: "string"
    },
    {
      name: "SubdivisionName",
      title: "Sub Division Name",
      type: "string"
    },
    {
      name: "Appliances",
      title: "Appliances (ex. Refrigerator, Dishwasher)",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "GarageSpaces",
      title: "Number of Garage Spaces",
      type: "number"
    },
    {
      name: "Heating",
      title: "Heating (ex. Wood, Electric)",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "FireplaceFeatures",
      title: "FireplaceFeatures (ex. One, Wood)",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "FireplacesTotal",
      title: "Number of Fireplaces",
      type: "number"
    },
    {
      name: "Roof",
      title: "Input Roof Materials (ex. Metal, Gravel)",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "ConstructionMaterials",
      title: "Input Construction Materials (ex. Wood, Concrete)",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "FoundationDetails",
      title: "Foundation Details",
      type: "string"
    },
    {
      name: "ZoningDescription",
      title: "Zoning Description",
      type: "string"
    },
    {
      name: "ElementarySchoolDistrict",
      title: "Elementary School District",
      type: "string"
    },
    {
      name: "HighSchoolDistrict",
      title: "High School District",
      type: "string"
    },
    {
      name: "AssociationFee",
      title: "Association Fee",
      type: "number"
    },
    {
      name: "AssociationFeeFrequency",
      title: "Association Fee Frequency",
      type: "string"
    },
    {
      name: "ListOfficeName",
      title: "Listing Office Name",
      type: "string"
    },
    {
      name: "LivingArea",
      title: "Living Area",
      type: "number"
    },
    {
      name: "LivingAreaUnits",
      title: "Living Area Units",
      type: "string"
    }
  ]
};
