module.exports = [
    {
        id: `panels`,
        title: `Panels`,
        description: `Ideal for repeating content like a grid of services, a carousel or media lists.`,
        fields: [`image`, `title`, `description`],
        hasPreviewImage: true
    },
    {
        id: `contact-information`,
        title: `Contact Information`,
        description: `Great for contact pages and the like. You'll need to setup your <a href="https://www.advancedcustomfields.com/blog/google-maps-api-settings/">Google Maps API key</a> with ACF to use the map field!`,
        fields: [`phone`, `email`, `location`, `social_media`],
        hasPreviewImage: true
    }
];
