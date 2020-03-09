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
    },
    {
        id: `testimonials`,
        title: `Testimonials`,
        description: `Show off what your clients are saying about you.`,
        fields: [`name`, `location`, `testimonial`],
        hasPreviewImage: true
    },
    {
        id: `case-study`,
        title: `Case Study`,
        description: `Ideal for a Case Studies custom post type, includes a Gallery and Project Details.`,
        fields: [
            `client`,
            `location`,
            `tags`,
            `value`,
            `description`,
            `photos`
        ],
        hasPreviewImage: true
    },
    {
        id: `opening-times`,
        title: `Opening Times`,
        description: `A simple repeater for displaying business opening times, includes a toggle for closed days.`,
        fields: [`day`, `open`, `close`, `closed`],
        hasPreviewImage: true
    }
];
